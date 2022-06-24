const mongoose = require('mongoose')

const connectDB = async() =>{
    try {
        // Mongo DB connection string
        const con = await mongoose.connect(process.env.MONGO_URL, {
            useNewUrlParser: true, 
            useCreateIndex: true,
            useUnifiedTopology: true 
        })
        console.log(`MongoDb connected :${con.connection.host}`);
    } catch (err) {
        console.log(err)
        process.exit(1)
    }
}

module.exports = connectDB