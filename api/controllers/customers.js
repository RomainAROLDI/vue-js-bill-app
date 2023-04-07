const Customer = require('../models/Customers');

const getItems = (req, res) => {
    Customer.find().then((customers) => {
        if (!customers) {
            return res.status(204).json({message: 'Aucun client'});
        }
        res.status(200).json(customers);
    }).catch(error => res.status(400).json({error}));
}

const getItem = (req, res) => {
    const id = req.params.id;

    Customer.findOne({_id: id}).then((customer) => {
        if (!customer) {
            res.status(204).json({});
        } else {
            res.status(200).json(customer);
        }
    }).catch(error => res.status(400).json({error}));
}

const patchItem = (req, res) => {
    const id = req.params.id;

    const updatedCustomer = req.body;
    if (
        !updatedCustomer.firstname ||
        !updatedCustomer.lastname ||
        !updatedCustomer.dateAdd ||
        !updatedCustomer.address ||
        !updatedCustomer.address.address1 ||
        !updatedCustomer.address.zipCode ||
        !updatedCustomer.address.city ||
        !updatedCustomer.address.country
    ) {
        return res.status(400).json({
            error: 'Les paramètres firstname, lastname, dateAdd et addresse (address1, zipCode, city, country) sont obligatoires.'
        });
    }

    Customer.updateOne({
        _id: id
    }, {
        ...updatedCustomer
    }).then((customer) => {
        res.status(201).json(customer);
    }).catch(error => res.status(400).json({error}));
}

const postItem = (req, res) => {
    const newCustomer = req.body;

    if (
        !newCustomer.firstname ||
        !newCustomer.lastname ||
        !newCustomer.dateAdd ||
        !newCustomer.address ||
        !newCustomer.address.address1 ||
        !newCustomer.address.zipCode ||
        !newCustomer.address.city ||
        !newCustomer.address.country
    ) {
        return res.status(400).json({
            error: 'Les paramètres firstname, lastname, dateAdd et addresse (address1, zipCode, city, country) sont obligatoires.'
        });
    }

    const customer = new Customer({...newCustomer});
    customer.save().then(() => {
        res.status(201).json(customer);
    }).catch(error => res.status(400).json({error}));
}

const deleteItem = (req, res) => {
    const id = req.params.id;

    Customer.deleteOne({_id: id}).then(() => res.status(204).json({})).catch(error => res.status(400).json({error}));
}

module.exports = {getItems, getItem, patchItem, postItem, deleteItem}