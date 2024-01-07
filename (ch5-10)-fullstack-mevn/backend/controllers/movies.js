const Movie = require('../models/Movie.js')
const Rating = require('../models/Rating.js')

module.exports.controller = (app) => {
    // get movies
    app.get('/movies', (req, res) => {
        Movie.find({}, 'name description release_year genre', (error, movie) => {
            if (error) console.error(error)
            res.send(movie)
        })
    })

    // fetch a single movie
    app.get('/api/movies/:id', (req, res) => {
        Movie.findById(req.params.id, 'name description release_year genre', (error, movie) => {
            if (error) console.error(error)
            res.send(movie)
        })
    })

    // fetch a single rating
    app.get('/movies/rate/:id', (req, res) => {
        Rating.find({ movie_id: req.params.id }, 'movie_id user_id rate', (error, rate) => {
            if (error) {
                console.error(error);
                res.status(500).send({ error: 'Internal Server Error' });
            } else {
                res.status(200).send(rate);
            }
        });
    });    

    // rate a movie
    app.post('/movies/rate/:id', (req, res) => {
        const rating = new Rating({
            movie_id: req.params.id,
            user_id: req.body.user_id,
            rate: req.body.rate
        })

        rating.save((error, rating) => {
            if (error) console.error(error)
            res.send({
                movie_id: rating.movie_id,
                user_id: rating.user_id,
                rate: rating.rate
            })
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

    // delete a movie
    app.delete('/movies/:id', (req, res) => {
        Movie.remove({ _id: req.params.id }, (error, movie) => {
            if (error) console.error(error)
            res.send({ succes: true })
        })
    })

}
