const express = require("express");
const app = express();
const PORT =3000;

const connectDB = require('./utils/db');

app.use(express.json()) //middleware to parse express JSON


connectDB();

// Basic : GET request to '/' route
app.get('/' , (req,res)=>{
    res.send(`Hi , from the Server on ${PORT}`);
});

app.get('/about' , (req,res)=>{
    res.send("Recieve about requests here");
})

app.get('/contact' , (req,res)=>{
    res.send("Recieve contact requests here");
})


app.listen(PORT,()=>{ console.log(`Server running on the  http://localhost:${PORT}`)});
