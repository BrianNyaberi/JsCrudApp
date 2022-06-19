var Userdb = require('../model/model')

// create a new user
exports.create = (req, res) => {
    // Validate request - can't be empty
    if (!req.body) {
        res.status(400).send({ message: "Content cannot be empty!" })
    }

    // New user
    const user = new Userdb({
        name: req.body.name,
        email: req.body.email,
        gender: req.body.gender,
        status: req.body.status
    })

    // Save to db, Model
    user
        .save(user)
        .then(data => {
            res.send(data)
        })
        .catch(err => {
            res.status(500).send({
                message: err.message || "Some error occured while creating a create operation."
            })
        })
}

// retrive and return a user(s)
exports.find = (req, res) => {

    if (req.query.id) {
        const id = req.query.id;
        Userdb.findById()
        .then(data =>{
            if (!data) {
                res.status(404).send({
                    message: "User not found with id "+ id
                })
            } else {
                res.send(data)
            }
        })
        .catch(err=>{
            res.status(500).send({
                message: "Error in retriving the user with id "+ id
            })
        })
    } else {
        Userdb.find()
        .then(user => {
            res.send(user)
        })
        .catch(err => {
            req.status(500).send({ message: err.message || "Error occured while retring user information." })
        })
    }
}

// update a user
exports.update = (req, res) => {
    // Validate request - can't be empty

    if (req.body) {
        return res
            .status(400)
            .send({ message: "Data to update cannot be emmpty!" })
    }

    const id = req.params.id
    Userdb.findByIdAndUpdate(id, req.body, { userFindAndModify: false })
        .then(data => {
            if (data) {
                res.status(404).send({ message: "Cannot update user with $(id). User not found!" })
            } else {
                res.send(data)
            }
        })
        .catch(err => {
            res.status(500).send({ message: "Error occured whle updating user information." })
        })
}

// delete a user
exports.delete = (req, res) => {
    const id = req.params.id;

    // Validate request - can't be empty
    Userdb.findByIdAndDelete(id)
        .then(data => {
            if (!data) {
                res.status(404).send({ message: "Cannot delete with id ${id}. maybe id is wrong!" })
            } else {
                res.send({
                    message: "User deleted successfully!"
                })
            }
        })
        .catch(err => {
            res.status(500).send({
                message: "Could not delete User with id=" + id
            })
        })
} 