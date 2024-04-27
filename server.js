require("dotenv").config

const express = require("express")
const app = express ()
const PORT = process.env.PORT || 3001

const connectToDb = require('./config/connectToDb')

const Note = require("./models/notes.js");
const User = require("./models/users.js");
const Comment = require("./models/comments.js");
const notesConntroller = require ("./controllers/notesController.js");
const usersConntroller = require ("./controllers/usersController.js");
const commentsConntroller = require ("./controllers/commentsController.js");


const cors = require('cors');

//middleware
app.use(express.json())

app.use(cors())

app.use(express.urlencoded({ extended: true }));

connectToDb()

app.get("/", (req,res)=> {
    res.send("This is a Landing Page")
});

//------Data base connections
//------NOTES
//------IDEAS
//------COMMENTS





app.listen(PORT,()=>{
    console.log(`Express Server Listening on port num: ${PORT}`)
});