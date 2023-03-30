import React, { useState } from 'react'
import { useSelector } from 'react-redux';
import DefaultLayout from '../components/DefaultLayout';
import { Modal, Table } from 'antd';
import moment from 'moment';
import { EditFilled, UnorderedListOutlined, DeleteFilled } from '@ant-design/icons';
import { Link, useNavigate } from 'react-router-dom';

function PostedJobs() {

    const alljobs = useSelector(state => state.jobsReducer).jobs;
    const allusers = useSelector((state) => state.usersReducer).users;
    const userid = JSON.parse(localStorage.getItem('user'))._id;
    const userPostedJobs = alljobs.filter(job => job.postedBy === userid);
    const navigate = useNavigate();
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [selectedJob,setSelectedJob]=useState();
    // function deleteJob(id) {
    //     fetch(`/deletejob/${id}`, {
    //         method: "DELETE",
    //     }).then((res) => res.json())
    //         .then((data) => {
    //             if (data.error) {
    //                 alert(data.error)
    //             }
    //             else {
    //                 alert(data.message)
    //                 window.location.reload();
    //             }
    //         })
    // }

    const columns = [
        {
            title: 'Title',
            dataIndex: 'title',
        },
        {
            title: 'Company',
            dataIndex: 'company',
        },
        {
            title: 'Posted On',
            dataIndex: 'postedOn',
        },
        {
            title: 'Total Applicants',
            dataIndex: 'appliedCandidates',
        },
        {
            title: 'Actions',
            render: (text, data) => {
                return <div className='flex'>
                    <EditFilled style={{fontSize: '20px'}} onClick={() => navigate(`/editjob/${data.completeJobData._id}`)} className='transition ease-in-out hover:scale-110' />
                    <UnorderedListOutlined style={{fontSize: '20px'}} onClick={()=>{showModal(job)}} className='transition ease-in-out hover:scale-110' />
                    <DeleteFilled style={{fontSize: '20px'}} className='transition ease-in-out hover:scale-110' />
                </div>
            }
        }
    ];

    const dataSource = [];

    for(var job of userPostedJobs) 
    {
        var obj = {
            title: job.title,
            company: job.company,
            postedOn: moment(job.createdAt).format("MMM DD, YYYY"),
            appliedCandidates: job.appliedCandidates.length,
            completeJobData: job,
        }
        dataSource.push(obj);
    }

    const showModal = (job) => {
        setIsModalOpen(true);
        setSelectedJob(job)
      };
      const handleOk = () => {
        setIsModalOpen(false);
      };
      const handleCancel = () => {
        setIsModalOpen(false);
      };
      
      function CandidatesList(){
        const candidatesColumns=[{
            title:'Candidate Id',
            dataIndex:'candidateId',
            render : (text ,data)=>{
                return <Link to={`/users/${data.candidateId}`}>{data.candidateId}</Link>
               }
          },
          {
            title:'Full Name',
            dataIndex:'fullName'
          },
          {
            title:'Applied Date',
            dataIndex:'appliedDate'
          }, 
        ]
        var candidatesDataSource=[]
        for(var candidate of selectedJob.appliedCandidates){
            if (allusers && allusers.length > 0) {
                // eslint-disable-next-line no-loop-func
                var user = allusers.find((user) => user._id === candidate.userid);
                // rest of the code
              } else {
                console.log('allusers is undefined or empty');
              }
            
            var obj={
                candidateId: user._id,
                fullName : user.firstName +" "+user.lastName,
                appliedDate :candidate.appliedDate
            }
            candidatesDataSource.push(obj)
        }
        return <Table columns={candidatesColumns} dataSource={candidatesDataSource}/>
      }
      
  
    console.log(userPostedJobs);

    return (
        <DefaultLayout>
            <hr />
                <div className='flex items-center justify-center text-lg font-mo'>Posted Jobs</div>
            <hr />
            <Table columns={columns} dataSource={dataSource} />
            <Modal title="Applied Candidates List" open={isModalOpen} closable={false} onOk={handleOk} onCancel={handleCancel} width={800}>
                <CandidatesList/>
            </Modal>
        </DefaultLayout>
    )
}

export default PostedJobs;