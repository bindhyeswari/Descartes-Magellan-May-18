var router = require('express').Router();
var mongoose = require('mongoose');
var myrest = require('../modules/rest_uniform');

// Create the Contact Model

var Contact = mongoose.model('contact', {
    name: String,
    email: String
});

module.exports = myrest.uniformCRUD(mongoose.model('contact', {
    name: String,
    email: String
}));