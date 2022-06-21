const axios = require('axios')

exports.homeRoutes = (req, res) => {
    // Make a request to api/users
    axios.get('http://localhost:3000/api/users')
        .then(function (response) {
            res.render('index', { users: response.data });
        })
}

exports.add_user = (req, res) => {
    res.render('add_user');
}

exports.update_user = (req, res) => {
    // Make a request to api/users, for a specific user
    axios.get('http://localhost:3000/api/users',{params:{id: req.query.id}})
        .then(function (userdata) {
            res.render("update_user",{ user: userdata.data })
        })
        .catch(err => {
            res.send(err)
        })
}