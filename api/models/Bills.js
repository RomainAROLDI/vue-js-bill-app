const mongoose = require("mongoose");

const billSchema = new mongoose.Schema({
    billnum: {
        type: Number,
        required: true
    },
    date: {
        type: String,
        required: true
    },
    description: String,
    client: {
        type: Object,
        required: true
    },
    prestations: Array,
    discount: Number,
    paid: Number,
    totalHT: Number,
    tva: Number,
    totalTTC: Number
});

module.exports = mongoose.model('Bill', billSchema);