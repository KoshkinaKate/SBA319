const User = require("../models/users")

//Find All
const fetchAllUsers = async (req,res) =>{
    const users = await User.find()
    res.json({ users: users });
};
//Find by Id
const fetchUser = async (req, res) =>{

const userId = req.params.id
const user = await Note.findById(userId);
res.json({user: user});
}
//Create User
const createUser = async(req,res)=>{
    console.log(`BODY: ${req.body}`);
    const title = req.body.title;
    const name = req.body.name;
    const note = await User.create({
        title: title,
        name:name,
    });
    res.json({note:note})
}
//Update User
const updateUser = async (req,res)=>{
    const userId = req.params.id;
    const { title, name } =req.body;
    const user = await User.findByIdAndUpdate(userId,{
        title:title,
        name:name,
    });
    const updatedUser = await User.findById(uderId);
    res.json({user: updatedUser});
}
//Delete User
const deleteUser = async(req,res)=>{
    const userId = req.params.id
    await User.findByIdAndDelete(userId)
    res.json({success: "Record has been deleted successfully"})
};

module.exports = {
    fetchAllUsers,
    fetchUser,
    createUser,
    updateUser,
    deleteUser
};