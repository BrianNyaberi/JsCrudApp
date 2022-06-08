var Userdb = require('../model/model')

// create a new user
exports.create = (req, res) => {
    // Validate request
    if (!req.body) {
        res.status(400).send({ message: "Content cannot be empty!"})
    }

    // New user
    const user = new Userdb({
        name:req.body.name,
        email:req.body.email,
        gender:req.body.gender,
        status:req.body.status
    })

    // Save to db, Model
    user
        .save(user)
        .then(data =>{
            res.send(data)
        })
        .catch(err => {
            res.status(500).send({
                message:err.message || "Some error occured while creating a create operation"
            })
        })
}

// retrive and return a user(s)
exports.find = (req, res) => {
    Userdb.find()
    .then(user =>{
        res.send(user)
    })
    .catch(err =>{
        req.status(500).send({message:err.message || "error occured while retring user information."})
    })
}

// update a user
exports.update = (req, res) => {
    
}

// delete a user
exports.delete = (req, res) => {
    
}