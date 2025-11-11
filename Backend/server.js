const express = require("express");
const cors = require("cors");

const app = express();
app.use(cors({
  origin: [
    "https://travelfestagent.vercel.app",
    "http://localhost:3000"
  ],
  methods: ["GET", "POST", "PUT", "DELETE"],
  credentials: true
}));
app.use(express.json());


// Example /chat endpoint
app.post("/chat", (req, res) => {
  const { message, chatId } = req.body;
  console.log("📩 Received:", message, "from chatId:", chatId);

  res.json({
    reply: `Server says: you typed "${message}"`,
    options: [
      { place: "Delhi", festival: "Holi", price: "₹4,000" },
      { place: "Kolkata", festival: "Durga Puja", price: "₹6,500" },
    ],
  });
});

const PORT = 4000;
app.listen(PORT, () => console.log(`✅ Server running on http://localhost:${PORT}`));
