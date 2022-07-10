const express = require("express");

const bodyParser = require("body-parser");
const cookieParser = require("cookie-parser");
const mongoose = require("mongoose");
const config = require("./config/config").get(process.env.NODE_ENV);
const app = express();
const user = require("./routes/user");
const books = require("./routes/books");

mongoose.connect(
  config.DATABASE
);

// middlewares

app.use(bodyParser.json());
app.use(cookieParser());
app.use('/api/users',user);
app.use('/api/books',books);

app.use(express.static('client/build'))



// sumit
// Raja123
// mongodb+srv://sumit:<password>@cluster0.4vzjs0r.mongodb.net/?retryWrites=true&w=majority





if(process.env.NODE_ENV === 'production'){
    const path = require('path')
    app.get('/*',(req,res)=>{
             console.log('works');

             res.sendFile(path.resolve(__dirname,'../client','build','index.html'))
    })
}










// api/users/register 

const port = process.env.PORT || 3001;

app.listen(port, ()=>{
    console.log("SERVER LISTENING")
})