const router = require("express").Router();
const Book = require("../models/Books");


router.get("/books", (req, res) => {
    Book.find({})
    .then(data => res.json(data))

});

router.post("/books", (req,res) => {
    Book.create(req.body)
    .then(data => res.json(data))
});

router.delete("/books/:id", (req, res) => {
    Book.findById({ _id: req.params.id})
    .then(data => data.remove())
    .then(data => res.json(data))
});

module.exports = router