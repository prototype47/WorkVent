import React, { useEffect } from 'react'
import DefaultLayout from '../components/DefaultLayout'
import { useSelector, useDispatch } from 'react-redux'
import { getAllJobs } from '../redux/actions/jobActions';
import { Row, Col, Button } from 'antd';
import { Link } from 'react-router-dom';
import moment from 'moment';

function Home() {

    const { jobs } = useSelector(state => state.jobsReducer);
    // console.log(jobs);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getAllJobs());
    }, [dispatch]);

    return (
        <div>
            <DefaultLayout>
                <Row gutter={16}>
                    {jobs.map((job) => {
                        return <Col lg={12} sm={24} xs={24}>
                            <div className="job-card font-jos shadow-xl transition ease-in-out hover:shadow-3xl m-1 p-2 border-solid duration-1000 border-[#070054] hover:border-purple-500 rounded-2xl">
                                <h2>{job.title}</h2>
                                <p>{job.company}</p>
                                <hr />
                                <p>{job.smallDescription}</p>
                                <p>Branch : <b>{job.department}</b></p>
                                <p>Category : <b>{job.Category}</b></p>
                                <div className='flex'>
                                    <p>Eligibility : <b>{job.Cutoff} CGPA</b></p>
                                    {/* <p className='ml-[2rem]'>CTC : <b>{job.CTC}</b></p> */}
                                    <p className='ml-[2rem]'>CTC : <b>₹ {new Intl.NumberFormat('en-IN', {maximumSignificantDigits: 3}).format(job.CTC)}</b></p>
                                </div>
                                <hr />
                                <div className='flex'>
                                    <Link to={`/jobs/${job._id}`}><Button className='transition ease-out hover:scale-110 border-blue-500 border-2 mt-3 font-mo text-sm p-1'><b>View full JD</b></Button></Link>
                                    <p className='ml-[40px]'>Posted On : <b>{moment(job.postedOn).format("MMM DD, yyyy")}</b></p>
                                    <p className='ml-[40px]'>Deadline : <b>{job.deadline}</b></p>
                                </div>
                            </div>
                        </Col>;
                    })}
                </Row>
            </DefaultLayout>
        </div>
    )
}

export default Home
