const mongoose = require("mongoose");

const mongoURI ='mongodb://localhost:27017/Practice'; // For local MongoDB . can pass MongoAB Atlas


// M-I
// mongoose.connext(mongoURI)
//   .then(()=> console.log("MongoDB Connected"))
//   .catch(err=console.log("MongoDB connection error"));

// module.exports=mongoose;

// M-II

const connectDB = async () =>{
    try{
        await mongoose.connect(mongoURI);
        console.log("MongoDB Connection Sucess !!");
    }
    catch(err){
        console.log("MongoDB connection Error" ,err);
    }
}


module.exports = connectDB;