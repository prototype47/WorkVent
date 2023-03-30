import { message } from "antd";
import axios from "axios";

export const getAllJobs = () => async dispatch => {

    dispatch({type: 'LOADING', payload: true})

    try{
        const response = await axios.get('/api/jobs/getalljobs');
        dispatch({type: 'GET_ALL_JOBS', payload: response.data});
        dispatch({type: 'LOADING', payload: false});
    }
    catch(error) {
        console.log(error);
        dispatch({type: 'LOADING', payload: true});
    }
};

export const postJob = (values) => async dispatch => {

    values.postedBy = JSON.parse(localStorage.getItem('user'))._id;
    dispatch({type: 'LOADING', payload: true})

    try{
        await axios.post('/api/jobs/postjob', values);
        dispatch({type: 'LOADING', payload: false});
        message.success("Job posted successfully🤘, Redirecting to portal...");
        setTimeout(() => {
            window.location.href = "/";
        }, 2000);
    }
    catch(error) {
        console.log(error);
        dispatch({type: 'LOADING', payload: true});
    }
};

export const editJob = (values) => async dispatch => {

    dispatch({type: 'LOADING', payload: true})

    try{
        await axios.post('/api/jobs/editjob', values);
        dispatch({type: 'LOADING', payload: false});
        message.success("Job updated successfully🤘, Redirecting to portal...");
        setTimeout(() => {
            window.location.href = "/";
        }, 2000);
    }
    catch(error) {
        console.log(error);
        dispatch({type: 'LOADING', payload: false});
    }
};

export const applyJob = (job) => async dispatch => {

    const user=JSON.parse(localStorage.getItem("user"))
    dispatch({type: 'LOADING', payload: true})

    try{
        await axios.post('/api/jobs/applyjob', {job,user});
        dispatch({type: 'LOADING', payload: false});
        message.success("Job Applied successfully🤘, Redirecting to portal...");
        setTimeout(() => {
            window.location.href = "/";
        }, 2000);
    }
    catch(error) {
        console.log(error);
        dispatch({type: 'LOADING', payload: false});
    }
};

export const searchJobs = (searchKey) => async dispatch => {
    dispatch({type: 'LOADING', payload: true})

    try {
        const response = await axios.get('/api/jobs/getalljobs');
        const jobs = response.data;
        const filteredJobs = Object.values(jobs).filter(job=>job.title.toLowerCase().includes(searchKey.toLowerCase()));
        // const filteredJobs = jobs.filter(job=>job.title.toLowerCase().includes(searchKey.toLowerCase()));
        dispatch({type: 'GET_ALL_JOBS', payload: filteredJobs});
        dispatch({type: 'LOADING', payload: false});
    }
    catch(error) {
        console.log(error);
        dispatch({type: 'LOADING', payload: false});
    }
};

export const sortJobs = (values) => async (dispatch) => {
    dispatch({ type: "LOADING", payload: true });

    try {
      const response = await axios.get("/api/jobs/getalljobs");
      const jobs = response.data
      var filteredJobs = jobs
  
      if(values.Category !== undefined) {
        filteredJobs = jobs.filter(job=>job.Category <= values.Category)
      }
      if(values.Cutoff !== undefined){
        filteredJobs = jobs.filter(job=>job.Cutoff >= values.Cutoff)
      }
      dispatch({ type: "GET_ALL_JOBS", payload: filteredJobs });
      dispatch({ type: "LOADING", payload: false });
    } catch (error) {
      console.log(error);
      dispatch({ type: "LOADING", payload: false });
    }
};
