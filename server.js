require("dotenv").config

const express = require("express")
const app = express ()
const PORT = process.env.PORT || 3001

const connectToDb = require('./config/connectToDb')

const Note = require("./models/notes.js");
const User = require("./models/users.js");
const Comment = require("./models/comments.js");
const notesController = require("./controllers/notesController.js");
const usersController = require("./controllers/usersController.js");
const commentsController = require("./controllers/commentsController.js");


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
app.get("/notes", notesController.fetchAllNotes);
// -----------------> GET all Notes - [Read]
app.get("/notes/:id", notesController.fetchNote);
// -----------------> GET a Specific Note by ID - [Read]
app.post("/notes", notesController.createNote);
// -----------------> Create a Notes - [Create / POST]
app.put("/notes/:id", notesController.updateNote);
// -----------------> Update a Specific Note - [Update]
app.delete("/notes/:id", notesController.deleteNote);
// -----------------> Delete a Specific Note - [Delete]

//------USERS
app.get("/users", usersController.fetchAllUsers);
// -----------------> GET all Notes - [Read]
app.get("/users/:id", usersController.fetchUser);
// -----------------> GET a Specific Note by ID - [Read]
app.post("/users", usersController.createUser);
// -----------------> Create a Notes - [Create / POST]
app.put("/users/:id", usersController.updateUser);
// -----------------> Update a Specific Note - [Update]
app.delete("/users/:id",usersController.deleteUser);
// -----------------> Delete a Specific Note - [Delete]

//------COMMENTS
app.get("/comments", commentsController.fetchAllComments);
// -----------------> GET all Notes - [Read]
app.get("/comments/:id", commentsController.fetchComment);
// -----------------> GET a Specific Note by ID - [Read]
app.post("/comments", commentsController.createComment);
// -----------------> Create a Notes - [Create / POST]
app.put("/comments/:id", commentsController.updateComment);
// -----------------> Update a Specific Note - [Update]
app.delete("/comments/:id", commentsController.deleteComment);
// -----------------> Delete a Specific Note -comments




app.listen(PORT,()=>{
    console.log(`Express Server Listening on port num: ${PORT}`)
});