const express = require('express');
const router = express.Router();
const ctrl = require('../controllers/bills');

router.get('/', ctrl.getItems);

router.get('/:id', ctrl.getItem);

router.patch('/:id', ctrl.patchItem);

router.post('/', ctrl.postItem);

router.delete('/:id', ctrl.deleteItem);

module.exports = router;