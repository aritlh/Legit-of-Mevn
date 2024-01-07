const mongoose = require('mongoose')

const Schema = mongoose.Schema

const RatingSchema = new Schema({
    movie_id: String,
    user_id: String,
    rate: Number,
})

const Rating = mongoose.model('Rating', RatingSchema)

module.exports = Rating

