const express = require("express");

const app = express();
app.use(express.json());

// ===== SIMPLE HEALTH CHECK =====
app.get("/health", (req, res) => {
  res.json({ status: "ok" });
});

// ===== QUOTE ENDPOINT =====
app.post("/quote", (req, res) => {
  const { pickup_address, flight_departure_local, bag_count, pickup_preference } = req.body;

  if (!pickup_address || !flight_departure_local || !bag_count || !pickup_preference) {
    return res.status(400).json({ error: "Missing required fields" });
  }

  res.json({
    quote_id: "qt_test_123",
    airport: "JFK",
    distance_miles: 12.5,
    drive_minutes: 35,
    recommended_pickup_window: {
      start: "2026-01-20T18:30:00-05:00",
      end: "2026-01-20T20:30:00-05:00"
    },
    pricing: {
      base: 25,
      time_distance: 15,
      night_before: 10,
      per_bag: 8,
      handler_fee: 5,
      taxes_fees: 4
    },
    total_price: 67,
    currency: "USD"
  });
});

// ===== BOOKING ENDPOINT =====
app.post("/create-booking", (req, res) => {
  const { quote_id, customer_name, customer_email } = req.body;

  if (!quote_id || !customer_name || !customer_email) {
    return res.status(400).json({ error: "Missing required fields" });
  }

  res.json({
    booking_id: "bk_test_456",
    booking_status: "pending_payment",
    booking_url: "https://example.com/booking/bk_test_456",
    payment_url: "https://example.com/pay/bk_test_456"
  });
});

// ===== START SERVER =====
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log("Server running on port", PORT);
});
