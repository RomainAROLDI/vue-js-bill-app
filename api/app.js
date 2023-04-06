require('dotenv').config();
const http = require('http');
const express = require('express');
const cors = require('cors');

const hostname = '127.0.0.1';
const port = process.env.PORT;

const billsRoutes = require('./routes/bills');

const app = express();

app.use(express.json());

app.use(cors({
    origin: hostname + ':5173'
}));

app.use('/bills', billsRoutes);

app.get('/', (req, res) => {
    res.json({
        api: 'bill-app API',
        version: process.env.VERSION
    });
});

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`);
});