const express = require('express');
const router = express.Router();
const verifyParams = require('../middleware/verifyParams');
const ctrl = require('../controllers/customers');

router.get('/', ctrl.getItems);

router.get('/:id', verifyParams, ctrl.getItem);

router.patch('/:id', verifyParams, ctrl.patchItem);

router.post('/', ctrl.postItem);

router.delete('/:id', verifyParams, ctrl.deleteItem);

module.exports = router;