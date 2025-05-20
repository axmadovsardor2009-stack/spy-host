const express = require('express');
const fetch = require('node-fetch');
const cors = require('cors');

const app = express();
app.use(cors());
app.use(express.json());

// Proxy GET request
app.get('/api/leaderboard', async (req, res) => {
    const token = req.headers.authorization;

    try {
        const response = await fetch("https://api.zootools.co/v1/leaderboard?listId=08os7KvUeW8FLH9X3Tz7", {
            method: "GET",
            headers: { Authorization: token }
        });

        const data = await response.json();
        res.json(data);
    } catch (err) {
        res.status(500).json({ error: "Fetch failed" });
    }
});

// Proxy POST request
app.post('/api/contacts', async (req, res) => {
    const token = req.headers.authorization;

    try {
        const response = await fetch("https://api.zootools.co/v1/contacts", {
            method: "POST",
            headers: {
                "Authorization": token,
                "Content-Type": "application/json"
            },
            body: JSON.stringify(req.body)
        });

        const data = await response.json();
        res.json(data);
    } catch (err) {
        res.status(500).json({ error: "Post failed" });
    }
});

const PORT = 3000;
app.listen(PORT, () => console.log(`Proxy server running on http://localhost:${PORT}`));
