
const express = require('express');
const app = express();
require('dotenv').config();
// Use the PORT from .env or default to 3000
const PORT = process.env.PORT || 3000;

app.get('/', (req, res) => {
    res.send('Hello World!');
    }
);

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
}
);