const express = require('express');
const fs = require('fs');
const bodyParser = require('body-parser');
const app = express();

app.use(bodyParser.json());

app.post('/save-visitor-info', (req, res) => {
    const visitorInfo = req.body;

    // Save visitor info to a JSON file
    fs.writeFile('visitorInfo.json', JSON.stringify(visitorInfo, null, 2), (err) => {
        if (err) {
            return res.status(500).send('Error saving visitor info');
        }
        res.status(200).send('Visitor info saved successfully');
    });
});

app.listen(3000, () => {
    console.log('Server running on http://localhost:3000');
});

async function getVisitorInfo() {
    const visitorInfo = {};
    visitorInfo.browser = navigator.userAgent;
    visitorInfo.language = navigator.language;
    visitorInfo.screenResolution = `${screen.width}x${screen.height}`;

    try {
        const response = await fetch('https://api.ipify.org?format=json');
        const data = await response.json();
        visitorInfo.ip = data.ip;
    } catch (error) {
        visitorInfo.ip = 'Unable to fetch IP';
    }

    // Send visitor info to the backend
    fetch('http://localhost:3000/save-visitor-info', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(visitorInfo)
    }).then(response => {
        if (response.ok) {
            console.log('Visitor info saved successfully');
        } else {
            console.error('Failed to save visitor info');
        }
    });

    // Display info on the page
    document.getElementById("info").innerText = JSON.stringify(visitorInfo, null, 2);
}

