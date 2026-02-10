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

const apiKey = process.env.WHOP_API_KEY;
const companyId = process.env.WHOP_COMPANY_ID;

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

  if (!apiKey || !companyId) {
    res.writeHead(500);
    return res.end(JSON.stringify({ error: "WHOP_API_KEY or WHOP_COMPANY_ID not configured" }));
  }

  const paymentId = url.searchParams.get("id");

  try {
    let paymentData;

    if (paymentId) {
      const response = await fetch(
        `https://api.whop.com/api/v1/payments/${paymentId}`,
        { headers: { Authorization: `Bearer ${apiKey}` } }
      );
      if (!response.ok) {
        res.writeHead(response.status);
        return res.end(JSON.stringify({ error: "Payment not found" }));
      }
      paymentData = await response.json();
    } else {
      const response = await fetch(
        `https://api.whop.com/api/v1/payments?company_id=${companyId}&statuses=paid&order=created_at&direction=desc&first=1`,
        { headers: { Authorization: `Bearer ${apiKey}` } }
      );
      if (!response.ok) {
        res.writeHead(response.status);
        return res.end(JSON.stringify({ error: "Failed to fetch payments" }));
      }
      const data = await response.json();
      const payments = data.data || data.results || [];
      if (payments.length === 0) {
        res.writeHead(404);
        return res.end(JSON.stringify({ error: "No payments found" }));
      }
      paymentData = payments[0];
    }

    res.writeHead(200);
    return res.end(JSON.stringify({
      id: paymentData.id,
      amount: paymentData.total ?? paymentData.usd_total ?? 0,
      currency: paymentData.currency ?? "usd",
      status: paymentData.status,
      cardBrand: paymentData.card_brand ?? paymentData.payment_method?.card?.brand ?? null,
      cardLast4: paymentData.card_last4 ?? paymentData.payment_method?.card?.last4 ?? null,
      cardHolder: paymentData.user?.name ?? paymentData.billing_address?.name ?? null,
      email: paymentData.user?.email ?? null,
      paidAt: paymentData.paid_at ?? paymentData.created_at,
    }));
  } catch {
    res.writeHead(500);
    return res.end(JSON.stringify({ error: "Internal server error" }));
  }
});

server.listen(3001, () => {
  console.log("API dev server running on http://localhost:3001");
});
