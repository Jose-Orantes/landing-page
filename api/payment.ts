interface Request {
  method?: string;
  query: Record<string, string | string[] | undefined>;
}

interface Response {
  setHeader(name: string, value: string): Response;
  status(code: number): Response;
  json(body: unknown): Response;
  end(): Response;
}

export default async function handler(req: Request, res: Response) {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Access-Control-Allow-Methods", "GET, OPTIONS");
  res.setHeader("Access-Control-Allow-Headers", "Content-Type");

  if (req.method === "OPTIONS") {
    return res.status(200).end();
  }

  if (req.method !== "GET") {
    return res.status(405).json({ error: "Method not allowed" });
  }

  const secretKey = process.env.STRIPE_SECRET_KEY;
  if (!secretKey) {
    return res.status(500).json({ error: "STRIPE_SECRET_KEY not configured" });
  }

  const sessionId = req.query.session_id as string | undefined;
  if (!sessionId) {
    return res.status(400).json({ error: "session_id is required" });
  }

  try {
    const response = await fetch(
      `https://api.stripe.com/v1/checkout/sessions/${sessionId}?expand[]=payment_intent.payment_method`,
      {
        headers: { Authorization: `Bearer ${secretKey}` },
      }
    );

    if (!response.ok) {
      return res.status(response.status).json({ error: "Session not found" });
    }

    const session = await response.json();
    const paymentIntent = session.payment_intent;
    const card = paymentIntent?.payment_method?.card;

    return res.status(200).json({
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
    });
  } catch {
    return res.status(500).json({ error: "Internal server error" });
  }
}
