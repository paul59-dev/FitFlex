require('dotenv').config();

const express = require('express');
const cors = require('cors');

const app = express();

const PORT = process.env.PORT || 5000;

app.use(cors());

app.get('/', (req, res) => {
    res.send('Hello world');
});

app.get('/api', (req, res) => {
    res.json({ message: 'Hello from the API!' });
});

app.listen(PORT, () => console.log(`Server start on http://localhost:${PORT}`));
