const express = require('express');
const cors = require('cors');
const { generateDashboardData } = require('./data.js');

const app = express();
const PORT = 3001;

app.use(cors());

app.get('/api/dashboard', (req, res) => {
    const data = generateDashboardData();
    res.json(data);
});

app.post('/api/login', express.json(), (req, res) => {
    const { username, password } = req.body;
    if (username === 'admin' && password === 'admin') {
        res.status(200).json({ message: 'Login successful', token: 'fake-jwt-token' });
    } else {
        res.status(401).json({ message: 'Invalid credentials' });
    }
});

app.listen(PORT, () => {
    console.log(`Backend server running on http://localhost:${PORT}`);
});