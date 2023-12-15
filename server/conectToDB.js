const mongoose = require('mongoose')

// * This is the mongodb Atlas connection link
const dbConnect = process.env.MONGO_URI;

// * Theses are the parameters
const connectionParams = {
    useNewUrlParser: true, useUnifiedTopology: true,
};

// * This is the mongodb Atlas connection
const connectToDB = () => {
    mongoose.connect(dbConnect, connectionParams).then(() => {

        console.log('Hurrah! MongoDB connection successfully established :)');

    }).catch((err) => {

        console.log('Sorry Bro! MongoDB is not connected :(', err);

    })
}


module.exports = connectToDB