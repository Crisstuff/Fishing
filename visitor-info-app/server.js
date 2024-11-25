const express = require('express');
const bodyParser = require('body-parser');
const fs = require('fs');
const path = require('path');

const app = express();
const PORT = 3000;

// Middleware to parse JSON request bodies
app.use(bodyParser.json());

// Serve the HTML file
app.use(express.static(path.join(__dirname, 'public')));

// Route to handle saving visitor info
app.post('/save-visitor-info', (req, res) => {
    const visitorInfo = req.body;

    // Save the visitor info to a JSON file
    const filePath = path.join(__dirname, 'visitorInfo.json');
    fs.writeFile(filePath, JSON.stringify(visitorInfo, null, 2), (err) => {
        if (err) {
            console.error("Error writing file:", err);
            return res.status(500).send('Failed to save visitor info.');
        }
        console.log("Visitor info saved to visitorInfo.json");
        res.send('Visitor info saved successfully!');
    });
});

// Start the server
app.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}`);
});

