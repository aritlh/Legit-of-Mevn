const User = require('../models/User')

module.exports.controller = (app) => {
    // get users page
    app.get('/users', (req, res) => {
        User.find({}, 'name email', (e, users) => {
            if (e) console.error(e)
            res.send(users)
        })
    })

    // get single user details
    app.get('/users/:id', (req, res) => {
        User.findById(req.params.id, 'name email', (e, user) => {
            if (e) console.error(e)
            res.send(user)
        })
    })

    //add a new user
    app.post('/users', (req, res) => {
        const user = new User({
            name: req.body.name,
            email: req.body.email
        })

        user.save((e, user) => {
            if (e) console.error(e)
            res.send(user)
        })
    })
}