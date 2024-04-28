const Note = require("../models/notes")

//Find All
const fetchAllNotes = async (req,res) =>{
    const notes = await Note.find()
    res.json({ notes: notes });
};
//Find by Id
const fetchNote = async (req, res) =>{

const noteId = req.params.id
const note = await Note.findById(noteId);
res.json({note:note});
}
//Create Note
const createNote = async(req,res)=>{
    console.log(`BODY: ${req.body}`);
    const title = req.body.title;
    const body = req.body.body;
    const note = await Note.create({
        title: title,
        body:body,
    });
    res.json({note:note})
}
//Update Note
const updateNote = async (req,res)=>{
    const noteId = req.params.id;
    const { title, body } =req.body;
    const note = await Note.findByIdAndUpdate(noteId,{
        title:title,
        body:body,
    });
    const updatedNote = await Note.findById(noteId);
    res.json({note: updatedNote});
}
//Delete Note
const deleteNote = async(req,res)=>{
    const noteId = req.params.id
    await Note.findByIdAndDelete(noteId)
    res.json({success: "Record has been deleted successfully"})
};

module.exports = {
    fetchAllNotes,
    fetchNote,
    createNote,
    updateNote,
    deleteNote
}