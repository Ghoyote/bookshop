var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var Book = new Schema({
    title: {
        type: String,
        required: true,
        unique: true
    },
    author: {
        type: String,
        default: 'Anonymous'
    },
    year: Number,
    publisher: String
});

module.exports = mongoose.model('Book', Book)
