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

    // add a new user
    app.post('/users', (req, res) => {
        const user = new User({
            name: req.body.name,
            email: req.body.email,
        });
        user.save((e, user) => {
            if (e) { console.log(e); }
            res.send(user);
        });
    });

    /**
     * We can also use the PATCH method to update a resource.
     * The diff between the PUT and PATCH methods is: the PUT
     * method updates the whole resource, whereas PATCH is used for
     * a partial update on resources.
     */
    // update a user
    app.put('/users/:id', (req, res) => {
        User.findById(req.params.id, 'name email', (e, user) => {
            if (e) console.error(e)
            user.name = req.body.name
            user.email = req.body.email
            user.save((e, user) => {
                if (e) { console.log(e); }
                res.send(user)
            })
        })
    })

    // delete a user
    app.delete('/users/:id', (req, res) => {
        User.remove({ _id: req.params.id }, (e, user) => {
            if (e) console.error(e)
            res.send({ success: true })
        })
    })
}