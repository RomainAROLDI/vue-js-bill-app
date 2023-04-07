const mongoose = require("mongoose");

const customerSchema = new mongoose.Schema({
    firstname: {
        type: String,
        required: true
    },
    lastname: {
        type: String,
        required: true
    },
    job: {type: String},
    phone: {type: String},
    email: {type: String},
    company: {type: String},
    dateAdd: {
        type: Date,
        required: true
    },
    address: {
        address1: {
            type: String,
            required: true
        },
        address2: {type: String},
        zipCode: {
            type: String,
            required: true
        },
        city: {
            type: String,
            required: true
        },
        country: {
            type: String,
            required: true
        }
    }
});

module.exports = mongoose.model('Customer', customerSchema);