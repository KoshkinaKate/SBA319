const Comment = require("../models/comments")

//Find All
const fetchAllComments = async (req,res) =>{
    const comments = await Comment.find()
    res.json({ comments: comments });
};
//Find by Id
const fetchComment = async (req, res) =>{

const commentId = req.params.id
const comment = await Comment.findById(commentId);
res.json({comment: comment});
}
//Create Comment
const createComment = async(req,res)=>{
    console.log(`BODY: ${req.body}`);
    const name = req.body.name;
    const body = req.body.body;
    const comment = await Comment.create({
        name: name,
        body: body,
    });
    res.json({comment: comment})
}
//Update Comment
const updateComment = async (req,res)=>{
    const commentId = req.params.id;
    const { name, body } =req.body;
    const comment = await Comment.findByIdAndUpdate(commentId,{
        name: name,
        body:body,
    });
    const updatedComment= await Comment.findById(commentId);
    res.json({comment: updatedComment});
}
//Delete Comment
const deleteComment = async(req,res)=>{
    const commentId = req.params.id
    await Comment.findByIdAndDelete(commentId)
    res.json({success: "Record has been deleted successfully"})
};

module.exports = {
    fetchAllComments,
    fetchComment,
    createComment,
    updateComment,
    deleteComment
}