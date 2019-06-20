const express = require('express');
const router = express.Router();

// Item Model
const Item = require('../../modals/Item');

// @route GET api/items
// @desc Get All Items
// @acceess Public

router.get('/', (req, res) => {
  Item.find().sort({date: -1})
    .then(items => res.json(items))
});

// @route POST api/items
// @desc Create an Item
// @acceess Public

router.post('/', (req, res) => {
  const newItem = new Item({
    name: req.body.name
  });
  newItem.save().then(item => res.send(item))
});

// @route DELETE api/items/:id
// @desc Delete an Item
// @acceess Public

router.delete('/:id', (req, res) => {
  Item.findById(req.params.id)
    .then(item => item.remove()
    .then((item) => res.send(item)))
    .catch(err => res.status(404).send(err))
});

module.exports = router;