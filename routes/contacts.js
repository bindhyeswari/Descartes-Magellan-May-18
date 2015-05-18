var router = require('express').Router();

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

module.exports = router;