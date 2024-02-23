const mongoose = require("mongoose");

const connectDB = async ()=>{
        const conn =  mongoose.connect("mongodb+srv://ankur:ankur@cluster0.vhmlwmz.mongodb.net/?retryWrites=true&w=majority");
        console.log('mongodb connect');
        
};

module.exports = connectDB;