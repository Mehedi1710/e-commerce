const mongoose = require("mongoose");

const dbConnection = () => {
    mongoose.connect('mongodb+srv://mh1710341714:mern2303mern@cluster0.vys6mr4.mongodb.net/e-commerce')
    .then(()=>console.log('Database is Connected'))
};

module.exports = dbConnection;