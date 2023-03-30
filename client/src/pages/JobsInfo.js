import React from 'react'
import DefaultLayout from '../components/DefaultLayout'
import { useNavigate, useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { Button,Tag } from 'antd';
import moment from 'moment';
import { applyJob } from '../redux/actions/jobActions';


function JobsInfo() {

    const { id } = useParams();
    const { jobs } = useSelector(state => state.jobsReducer);
    const job = jobs.find((job) => job._id === id);
    const userid = JSON.parse(localStorage.getItem('user'))._id;
    const appliedCandidates = job.appliedCandidates
    const alreadyApplied = appliedCandidates.find(candidate=>candidate.userid === userid)

    const navigate = useNavigate();
    const dispatch = useDispatch()
    function applyNow() {
        dispatch(applyJob(job))

    }

    return (
        <div>
            <DefaultLayout>
                {job && (
                    <div className='font-comf mt-[0.5rem] ml-2 font-bold mb-5'>
                        <h1 className='mt-0 text-lg text-center underline font-comf font-extralight underline-offset-4'>Displaying full JD for <span className='font-bold'>{job.title}</span></h1>
                        <p>Company : <span className='font-extralight'>{job.company}</span></p>
                        <p>Category : <span className='inline-block font-extrabold text-transparent bg-gradient-to-r from-black via-red-500 to-emerald-500 bg-clip-text'>{job.Category}</span></p>
                        <p>Job Description : <span className='font-extralight'>{job.fullDescription}</span></p>
                        <p>Skills Required : <span className='capitalize font-extralight'>{job.skillsRequired}</span></p>
                        <hr />
                        <p className='font-bold font-comf'>CTC Offered : <span className='capitalize font-extralight'>₹ {new Intl.NumberFormat('en-IN', { maximumSignificantDigits: 3 }).format(job.CTC)}</span></p>
                        <p>Eligible Departments : <span className='font-extralight'>{job.department}</span></p>
                        <p className='font-bold font-comf'>Eligibility Criteria : </p>
                        <table className="text-sm font-light text-left">
                            <tbody className="text-white">
                                <tr className="border-b bg-neutral-100 dark:border-neutral-500 dark:bg-neutral-700">
                                    <td className="px-6 py-1 font-medium whitespace-nowrap">% in X and XII</td>
                                    <td className="px-6 py-1 whitespace-nowrap">{job.ptentwel}%</td>
                                </tr>
                                <tr className="bg-white border-b dark:border-neutral-500 dark:bg-neutral-600">
                                    <td className="px-6 py-1 font-medium whitespace-nowrap">In Pursuing Degree</td>
                                    <td className="px-6 py-1 whitespace-nowrap">{job.pugpg}%</td>
                                </tr>
                                <tr className="border-b bg-neutral-100 dark:border-neutral-500 dark:bg-neutral-700">
                                    <td className="px-6 py-1 font-medium whitespace-nowrap">In UG (for PGs)</td>
                                    <td colspan="2" className="px-6 py-1 whitespace-nowrap">{job.pugpg}%</td>
                                </tr>
                                <tr className="bg-white border-b dark:border-neutral-500 dark:bg-neutral-600">
                                    <td className="px-6 py-1 font-medium whitespace-nowrap">Backlogs</td>
                                    <td colspan="2" className="px-6 py-1 whitespace-nowrap">{job.arrear}</td>
                                </tr>
                            </tbody>
                        </table>
                        {/* <div className="grid grid-cols-2 gap-2 font-comf">
                            <div className="bg-blue-600 text-sm py-3 border rounded-md text-center text-white mx-[10rem] font-bold">% in X and XII</div>
                            <div className="bg-blue-500 text-sm py-3 border rounded-md text-center text-black mx-[25rem] ml-[-10rem]">{job.ptentwel}</div>
                            <div className="bg-blue-600 text-sm py-3 border rounded-md text-center text-white mx-[10rem] font-bold">In Pursuing Degree</div>
                            <div className="bg-blue-500 text-sm py-3 border rounded-md text-center text-black mx-[25rem] ml-[-10rem]">{job.pugpg}</div>
                            <div className="bg-blue-600 text-sm py-3 border rounded-md text-center text-white mx-[10rem] font-bold">In UG (for PGs)</div>
                            <div className="bg-blue-500 text-sm py-3 border rounded-md text-center text-black mx-[25rem] ml-[-10rem]">{job.pugpg}</div>
                            <div className="bg-blue-600 text-sm col-span-2 py-3 border rounded-md text-center text-white mx-[25rem] ml-[10rem]">{job.arrear}</div>
                        </div> */}
                        <hr />
                        <p>Company Profile : <span className='font-extralight'>{job.companyDescription}</span></p>
                        <p>Total applied candidates : <span className='font-extralight'>{job.appliedCandidates.length}</span></p>
                        <p className='font-semibold font-mo'>*Test details will be mailed to your registerd mail address after your application is received*</p>
                        <hr />
                        <div className="flex justify-between">
                            {job.postedBy === userid ?
                                (
                                    <Button className='mt-4 text-sm text-center transition ease-out border-2 border-blue-500 hover:scale-125 font-comf' onClick={() => navigate(`/editjob/${job._id}`)}>Edit Job</Button>
                                ) : alreadyApplied ? (<Tag color="green">Already Applied</Tag>) : (
                                    <Button className='mt-4 text-sm text-center transition ease-out border-2 border-blue-500 hover:scale-125 font-comf' onClick={applyNow}>Apply now</Button>
                                )
                            }
                            <p>Posted on : <span className='font-extralight'>{moment(job.postedOn).format("MMM DD, yyyy")}</span></p>
                        </div>
                        <div className="flex justify-end mt-[-1rem]">
                            <p>Apply by : <span className='font-extralight'>{job.deadline}</span></p>
                        </div>
                    </div>
                )}
            </DefaultLayout>
        </div>
    )
}

export default JobsInfo;
