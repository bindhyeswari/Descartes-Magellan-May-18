var router = require('express').Router();
var mongoose = require('mongoose');

// Create the Contact Model

var Contact = mongoose.model('contact', {
    name: String,
    email: String
});

router.post('/', function (req, res) {
    (new Contact(req.body)).save(function (err, result) {
        if (err) res.status(500).json({ message: err });
        else res.status(201).json({ message: 'Resource Created', contact: result });
    });
});

router.get('/', function (req, res) {
   Contact.find(function (err, results) {
       // todo: return only the first 10 results and paginate service ...
       if (err) res.status(500).json({message: 'Something went wrong!'});
       res.status(200).json(results);
   });
});

module.exports = router;