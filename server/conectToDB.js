const mongoose = require('mongoose')

// * This is the mongodb Atlas connection link
const dbConnect = process.env.MONGO_URI;


// * This is the mongodb Atlas connection
mongoose.connect(dbConnect).then(() => {

    console.log('Hurrah! MongoDB connection successfully established :)');

}).catch((err) => {

    console.log('Sorry Bro! MongoDB is not connected :(', err);

})