// server.js
const express = require("express");
const fetch = require("node-fetch");
const app = express();

app.use(express.json());

const API_TOKEN = "zootools-api-token-4b821f5e-afd9-4c1a-a1eb-30bbfb04856c";

app.post("/api/contact", async (req, res) => {
  try {
    const response = await fetch("https://api.zootools.co/v1/leaderboard?listId=08os7KvUeW8FLH9X3Tz7", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Authorization": `Bearer ${API_TOKEN}`,
      },
      body: JSON.stringify(req.body),
    });

    const data = await response.json();
    res.json(data);
  } catch (error) {
    res.status(500).json({ error: "Failed to contact external API" });
  }
});

app.listen(3000, () => console.log("Backend running at http://localhost:3000"));
