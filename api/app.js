require('dotenv').config();
const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');

const port = process.env.PORT;
const dbUser = process.env.DB_USER;
const dbPass = process.env.DB_PASS;
const dbCluster = process.env.DB_CLUSTER;

mongoose.connect(`mongodb+srv://${dbUser}:${dbPass}@${dbCluster}/?retryWrites=true&w=majority`, {
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then(() => console.log('Connexion à MongoDB réussie !'))
    .catch(() => console.log('Connexion à MongoDB échouée !'));

const billsRoutes = require('./routes/bills');

const app = express();

app.use(express.json());

app.use(cors({
    origin: '*'
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