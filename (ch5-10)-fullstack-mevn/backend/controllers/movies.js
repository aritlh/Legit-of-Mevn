const Movie = require('../models/Movie.js')

module.exports.controller = (app) => {
    // get movies
    app.get('/movies', (req, res) => {
        Movie.find({}, 'name description release_year genre', (error, movie) => {
            if (error) console.error(error)
            res.send(movie)
        })
    })

    // add a new movie
    app.post('/movies', (req, res) => {
        const movie = new Movie({
            name: req.body.name,
            description: req.body.description,
            release_year: req.body.release_year,
            genre: req.body.genre
        })

        movie.save((error, movie) => {
            if (error) console.error(error)
            res.send(movie)
        })
    })
}