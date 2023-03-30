const mongoose = require("mongoose");

const jobSchema = new mongoose.Schema({
    // _id: mongoose.Schema.Types.ObjectId,
    title: { type: String, required: true },                            //  // Role
    company: { type: String, required: true },                          //  // Company Name
    smallDescription: { type: String, required: true },                 //  //
    department: { type: String, required: true },                       //  //
    Category: { type: String, required: true },                         //  // Opportunity Type
    Cutoff: { type: String, required: true },                               //
    CTC: { type: Number, required: true },                              //  //
    // postedOn: { type: String, required: true },                          // LET IT REMAIN COMMENTED
    deadline: { type: String, required: true },                         //  //
    fullDescription: { type: String, required: true },                  //  //
    minimumQualification: { type: String, required: true },                 //
    skillsRequired: { type: String, required: true },                   //  //
    email: { type: String, required: true },                                //
    phoneNumber: { type: String, required: true },                          //
    companyDescription: { type: String, required: true },               //  // About Company
    appliedCandidates: { type: [], required: true },                    //  
    ptentwel: { type: String, required: true },                         //  //
    pugpg: { type: String, required: true },                            //  //
    arrear: { type: String, required: true },                           //  //
    postedBy: { type: String, required: true },                             //
}, {
    timestamps: true,
})

const jobModel = new mongoose.model('jobs', jobSchema)
module.exports = jobModel