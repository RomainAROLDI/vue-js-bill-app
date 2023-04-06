const Bill = require('../models/Bills');

const getItems = (req, res) => {
    Bill.find().then((bills) => {
        res.status(200).json(bills);
    }).catch(error => res.status(400).json({error}));
}

const getItem = (req, res) => {
    const id = req.params.id;

    Bill.findOne({_id: id}).then((bill) => {
        res.status(200).json(bill);
    }).catch(error => res.status(400).json({error}));
}

const patchItem = (req, res) => {
    const id = req.params.id;


    const updatedBill = req.body;
    if (!updatedBill.billnum || !updatedBill.date || !updatedBill.client) {
        return res.status(400).json({error: 'Les paramètres billnum, date et client sont obligatoires.'});
    }

    Bill.updateOne({
        _id: id
    }, {
        ...updatedBill
    }).then((bill) => {
        res.status(201).json(bill);
    }).catch(error => res.status(400).json({error}));
}

const postItem = (req, res) => {
    const newBill = req.body;

    if (!newBill.billnum || !newBill.date || !newBill.client) {
        return res.status(400).json({error: 'Les paramètres billnum, date et client sont obligatoires.'});
    }

    const bill = new Bill({...newBill});
    bill.save().then(() => {
        res.status(201).json(bill);
    }).catch(error => res.status(400).json({error}));
}

const deleteItem = (req, res) => {
    const id = req.params.id;

    Bill.deleteOne({_id: id}).then(() => res.status(204)).catch(error => res.status(400).json({error}));
}

module.exports = {getItems, getItem, patchItem, postItem, deleteItem}