const mongoose = require('mongoose');

//Schema
const Schema = mongoose.Schema;
const BlogPostSchema = new Schema({
    gradelevel: String,
    firstName: String,
    mi: String,
    lastName: String,
    gender: String,
    address: String,
    contact: String,
    date: {
        type: String,
        default: Date.now()
    }
});

//model
const BlogPost = mongoose.model('BlogPost', BlogPostSchema);

module.exports = BlogPost;