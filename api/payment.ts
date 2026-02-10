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

  const apiKey = process.env.WHOP_API_KEY;
  const companyId = process.env.WHOP_COMPANY_ID;
  if (!apiKey || !companyId) {
    return res.status(500).json({ error: "WHOP_API_KEY or WHOP_COMPANY_ID not configured" });
  }

  const paymentId = req.query.id as string | undefined;

  try {
    let paymentData;

    if (paymentId) {
      const response = await fetch(
        `https://api.whop.com/api/v1/payments/${paymentId}`,
        {
          headers: { Authorization: `Bearer ${apiKey}` },
        }
      );
      if (!response.ok) {
        return res.status(response.status).json({ error: "Payment not found" });
      }
      paymentData = await response.json();
    } else {
      const response = await fetch(
        `https://api.whop.com/api/v1/payments?company_id=${companyId}&statuses=paid&order=created_at&direction=desc&first=1`,
        {
          headers: { Authorization: `Bearer ${apiKey}` },
        }
      );
      if (!response.ok) {
        return res.status(response.status).json({ error: "Failed to fetch payments" });
      }
      const data = await response.json();
      const payments = data.data || data.results || [];
      if (payments.length === 0) {
        return res.status(404).json({ error: "No payments found" });
      }
      paymentData = payments[0];
    }

    return res.status(200).json({
      id: paymentData.id,
      amount: paymentData.total ?? paymentData.usd_total ?? 0,
      currency: paymentData.currency ?? "usd",
      status: paymentData.status,
      cardBrand: paymentData.card_brand ?? paymentData.payment_method?.card?.brand ?? null,
      cardLast4: paymentData.card_last4 ?? paymentData.payment_method?.card?.last4 ?? null,
      cardHolder: paymentData.user?.name ?? paymentData.billing_address?.name ?? null,
      email: paymentData.user?.email ?? null,
      paidAt: paymentData.paid_at ?? paymentData.created_at,
    });
  } catch {
    return res.status(500).json({ error: "Internal server error" });
  }
}
