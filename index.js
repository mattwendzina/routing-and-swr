import express from "express";
import fetch from "node-fetch";
import cors from "cors";

const app = express();
const PORT = 3001;

// Allow CORS for all routes
app.use(cors());

// Create a route to proxy the request
app.get("/api/booking", async (req, res) => {
  try {
    const response = await fetch(
      "https://restful-booker.herokuapp.com/booking"
    );

    const data = await response.json();
    console.log("data", data);
    res.json(data);
  } catch (error) {
    console.error("Error fetching data:", error);
    res.status(500).json({ error: "Failed to fetch data" });
  }
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
