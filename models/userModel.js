const mongoose=require("mongoose");
const userSchema=new mongoose.Schema({
    username: {type: String, required: true},   //
    password: {type: String, required: true},   //
    firstName: {type: String, default: ""},    //
    lastName: {type: String, default: ""},   //
    email: {type: String, default: ""},     //
    mobileNumber: {type: String, default: ""},  //
    Portfolio: {type: String, default: ""}, //
    Github: {type: String, default: ""},    //
    LinkedIn: {type: String, default: ""},  //
    RegistrationNumber: {type: String, default: ""},    //
    about: {type: String, default: ""},    //
    address: {type: String, default: ""},   //
    education: {type: [], default: [""]},   //
    Branch: {type: String, default: ""},
    skills: {type: [], default: [""]},  //
    projects: {type: [], default: [""]},    //
    projectLink: {type: [], default: [""]},   //
    Internship: {type: [], default: [""]},  //
    ResumeLink: {type: String, default: ""},    //
    appliedJobs: [],
}, {timestamps:true});
const userModal=new mongoose.model('users',userSchema);
module.exports=userModal;
