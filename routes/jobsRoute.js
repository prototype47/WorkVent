const express = require("express");
const router = express.Router();
const Job = require("../models/jobModel");
const User=require("../models/userModel");
const moment=require("moment");

router.get("/getalljobs", async (req, res) => {
    try {
        const jobs = await Job.find();
        return res.status(200).json({ jobs });
    }
    catch (error) {
        return res.status(400).json({ error });
    }
});

router.post("/postjob", async (req, res) => {
    try {
        const newJob = new Job(req.body);
        newJob.save();
        return res.status(200).json({ message: "Job posted successfully" });
    }
    catch (error) {
        return res.status(400).json({ error });
    }
});

router.post("/editjob", async (req, res) => {
    try {
        const updatedJob = await Job.findOneAndUpdate({ _id: req.body._id }, req.body);
        return res.status(200).json({ message: "Job updated successfully" });
    }
    catch (error) {
        return res.status(400).json({ error });
    }
});

router.post("/applyjob",async(req,res)=>{
    const{user,job}=req.body
    try{
        const jobDetails=await Job.findOne({_id: job._id})
        const appliedCandidate={
            userid :user._id,
            appliedDate :moment().format('MMM DD YYYY')
        }
        jobDetails.appliedCandidates.push(appliedCandidate)
        await jobDetails.save()
        const userDetails=await User.findOne({_id: user._id})
        const appliedJob={
            jobid:job._id,
            appliedDate :moment().format('MMM DD YYYY')
        }
        userDetails.appliedJobs.push(appliedJob)
        await userDetails.save()
        res.send('Job Applied Successfully Best Of Luck !!!')
    }
    catch(error){
        res.send(error)
    }
});

module.exports = router;
