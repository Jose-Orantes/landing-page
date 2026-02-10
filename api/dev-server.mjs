import http from "node:http";
import { readFileSync } from "node:fs";
import { resolve, dirname } from "node:path";
import { fileURLToPath } from "node:url";

const __dirname = dirname(fileURLToPath(import.meta.url));

// Load .env
const envPath = resolve(__dirname, "../.env");
try {
  const envContent = readFileSync(envPath, "utf-8");
  for (const line of envContent.split("\n")) {
    const trimmed = line.trim();
    if (trimmed && !trimmed.startsWith("#")) {
      const [key, ...rest] = trimmed.split("=");
      process.env[key] = rest.join("=");
    }
  }
} catch {}

const secretKey = process.env.STRIPE_SECRET_KEY;

const server = http.createServer(async (req, res) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Access-Control-Allow-Methods", "GET, OPTIONS");
  res.setHeader("Access-Control-Allow-Headers", "Content-Type");
  res.setHeader("Content-Type", "application/json");

  if (req.method === "OPTIONS") {
    res.writeHead(200);
    return res.end();
  }

  const url = new URL(req.url, "http://localhost");

  if (url.pathname !== "/api/payment") {
    res.writeHead(404);
    return res.end(JSON.stringify({ error: "Not found" }));
  }

  if (!secretKey) {
    res.writeHead(500);
    return res.end(JSON.stringify({ error: "STRIPE_SECRET_KEY not configured" }));
  }

  const sessionId = url.searchParams.get("session_id");
  if (!sessionId) {
    res.writeHead(400);
    return res.end(JSON.stringify({ error: "session_id is required" }));
  }

  try {
    const response = await fetch(
      `https://api.stripe.com/v1/checkout/sessions/${sessionId}?expand[]=payment_intent.payment_method`,
      {
        headers: { Authorization: `Bearer ${secretKey}` },
      }
    );

    if (!response.ok) {
      res.writeHead(response.status);
      return res.end(JSON.stringify({ error: "Session not found" }));
    }

    const session = await response.json();
    const paymentIntent = session.payment_intent;
    const card = paymentIntent?.payment_method?.card;

    res.writeHead(200);
    return res.end(JSON.stringify({
      id: session.id,
      amount: (session.amount_total ?? 0) / 100,
      currency: session.currency ?? "usd",
      status: session.payment_status,
      cardBrand: card?.brand ?? null,
      cardLast4: card?.last4 ?? null,
      cardHolder: session.customer_details?.name ?? null,
      email: session.customer_details?.email ?? null,
      paidAt: paymentIntent?.created
        ? new Date(paymentIntent.created * 1000).toISOString()
        : new Date().toISOString(),
    }));
  } catch {
    res.writeHead(500);
    return res.end(JSON.stringify({ error: "Internal server error" }));
  }
});

server.listen(3001, () => {
  console.log("API dev server running on http://localhost:3001");
});
