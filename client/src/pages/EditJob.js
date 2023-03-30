import React, { useState } from 'react';
import DefaultLayout from '../components/DefaultLayout';
import { Row, Col, Form, Input, Button, Tabs, Select } from 'antd';
import { useDispatch, useSelector } from 'react-redux';
import { editJob } from '../redux/actions/jobActions';
import { useParams } from 'react-router-dom';

const { TextArea } = Input;
const { Option } = Select;
function EditJob() {

    const dispatch = useDispatch();
    const[jobInfo, setJobInfo] = useState({});
    const [activeTab, setActiveTab] = useState("1");
    const { id } = useParams();

    function onCompletion(values) 
    {
        setJobInfo(values);
        setActiveTab("2");
    }

    function onFinalCompletion(values)
    {
        const data = {...jobInfo, ...values};
        data._id = id;
        console.log(data);
        dispatch(editJob(data));
    }

    const { jobs } = useSelector(state => state.jobsReducer);
    const job = jobs.find(job => job._id === id);
    console.log(job);

    const items = [
        {
            key: '1',
            label: `About Job`,
            children: 
                <Form layout="vertical" className="mt-2" onFinish={onCompletion} initialValues={job}>
                    <hr />
                        <div className='flex items-center justify-center font-mo text-sm'>Basic Details</div>
                    <hr />
                    <Row>
                        <Col lg={8} sm={24} className='ml-[2rem]'>
                            <Form.Item name="title" rules={[{required: true}]} label="Role">
                                <Input className='capitalize' />
                            </Form.Item>
                        </Col>
                        <Col lg={8} sm={24} className='ml-[12rem]'>
                            <Form.Item name="department" rules={[{required: true}]} label="Department">
                                <Input className='capitalize' />
                            </Form.Item>
                        </Col>
                        <Col lg={8} sm={24} className='ml-[2rem]'>
                            <Form.Item name="Cutoff" rules={[{required: true}]} label="CGPA Required">
                                <Input />
                            </Form.Item>
                        </Col>
                        <Col lg={8} sm={24} className='ml-[12rem]'>
                            <Form.Item name="CTC" rules={[{required: true}]} label="CTC Offered">
                                <Input type='number' placeholder='LPA'/>
                            </Form.Item>
                        </Col>
                        <Col lg={8} sm={24} className='ml-[2rem]'>
                            <Form.Item name="Category" rules={[{required: true}]} label="Opportunity Type">
                                <Input placeholder='Super Dream/Dream/Regular'/>
                            </Form.Item>
                        </Col>
                        <Col lg={8} sm={24} className='ml-[12rem]'>
                            <Form.Item name="skillsRequired" rules={[{required: true}]} label="Skills">
                                <Input />
                            </Form.Item>
                        </Col>
                        <Col lg={8} sm={24} className='ml-[2rem]'>
                            <Form.Item name="minimumQualification" rules={[{required: true}]} label="Minimum Qualification">
                                <Select>
                                    <Option value="Degree">Degree</Option>
                                    <Option value="+2">Plus 2</Option>
                                    <Option value="10th">10th</Option>
                                </Select>
                            </Form.Item>
                        </Col>
                        <Col lg={8} sm={24} className='ml-[12rem]'>
                            <Form.Item name="deadline" rules={[{required: true}]} label="Deadline">
                                <Input placeholder='22nd March 2022, 10:00PM'/>
                            </Form.Item>
                        </Col>
                    </Row>
                    <div className='mb-5'>&nbsp;</div>
                    <hr />
                        <div className='flex items-center justify-center font-mo text-sm'>Eligibility Criteria</div>
                    <hr />
                    <Row>
                        <Col lg={8} sm={24} className='ml-[2rem]'>
                            <Form.Item name="ptentwel" rules={[{required: true}]} label="10th and 12th">
                                <Input placeholder='Minimum required % in X and XII'/>
                            </Form.Item>
                        </Col>
                        <Col lg={8} sm={24} className='ml-[12rem]'>
                            <Form.Item name="pugpg" rules={[{required: true}]} label="UG (or PGs)">
                                <Input placeholder='Minimum required CGPA in pursuing degree'/>
                            </Form.Item>
                        </Col>
                        <Col lg={8} sm={24} className='ml-[18rem]'>
                            <Form.Item name="arrear" rules={[{required: true}]} label="Backlogs">
                                <Input placeholder='Exceptions allowed type "YES" else "Not Allowed"'/>
                            </Form.Item>
                        </Col>
                    </Row>
                    <div className='mb-5'>&nbsp;</div>
                    <hr />
                        <div className='flex items-center justify-center font-mo text-sm'>Job Description</div>
                    <hr />
                    <Row>
                        <Col lg={10} sm={24} className='ml-[16rem]'>
                            <Form.Item name="smallDescription" rules={[{required: true}]} label="Small Description">
                                <TextArea rows={3}/>
                            </Form.Item>
                        </Col>
                        <Col lg={15} sm={24} className='ml-[9.5rem]'>
                            <Form.Item name="fullDescription" rules={[{required: true}]} label="Full Description">
                                <TextArea rows={6}/>
                            </Form.Item>
                        </Col>
                    </Row>
                    <div className='mb-5'>&nbsp;</div>
                    <hr />
                    <div className='flex justify-end mb-5'>
                        <Button htmlType='submit' className='font-comf font-bold text-sm w-[5rem] hover:scale-125 mr-8 savem'>Next</Button>
                    </div>
                </Form>
        },
        {
            key: '2',
            label: `Company Details`,
            children: 
                <Form layout='vertical' onFinish={onFinalCompletion} initialValues={job}>
                    <hr />
                        <div className='flex items-center justify-center font-mo text-sm'>Basic Details</div>
                    <hr />
                    <Row>
                        <Col lg={8} sm={24} className='ml-[2rem]'>
                            <Form.Item name="company" label="Company Name" rules={[{required: true}]}>
                                <Input />
                            </Form.Item>
                        </Col>
                        <Col lg={8} sm={24} className='ml-[12rem] '>
                            <Form.Item name="email" label="Contact Email" rules={[{required: true}]}>
                                <Input type='email' />
                            </Form.Item>
                        </Col>
                        <Col lg={8} sm={24} className='ml-[18rem]'>
                            <Form.Item name="phoneNumber" label="Contact Number" rules={[{required: true}]}>
                                <Input />
                            </Form.Item>
                        </Col>
                    </Row>
                    <div className='mb-5'>&nbsp;</div>
                    <hr />
                        <div className='flex items-center justify-center font-mo text-sm'>Company Description</div>
                    <hr />
                    <Row>
                        <Col lg={15} sm={24} className='ml-[2rem]'>
                            <Form.Item name="companyDescription" label="About Company" rules={[{required: true}]}>
                                <TextArea rows={2} placeholder='Start by telling about your company worklife, day-to-day operations, values etc...'/>
                            </Form.Item>
                        </Col>
                    </Row>
                    <div className='mb-5'>&nbsp;</div>
                    <hr />
                    <div className='flex justify-between'>
                        <Button onClick={() => {setActiveTab("1")}} className='font-comf font-bold text-sm hover:scale-125 ml-8 prevm'>Previous Section</Button>
                        <Button htmlType="submit" className='font-comf font-bold text-sm hover:scale-125 mr-8 savem'>Update Job profile</Button>
                    </div>
                </Form>
        },
    ];

    return (
        <div>
            <DefaultLayout>
                <Tabs defaultActiveKey="1" items={items} activeKey={activeTab}/>
            </DefaultLayout>
        </div>
    )
}

export default EditJob;