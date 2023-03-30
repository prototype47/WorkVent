import React, { useState } from 'react';
import DefaultLayout from '../components/DefaultLayout';
import { Row, Col, Form, Input, Button, Tabs } from 'antd';
import { useDispatch } from 'react-redux';
import { updateUser } from '../redux/actions/userActions';

const { TextArea } = Input;
function Profile() {

    const [personalInfo, setPersonalInfo] = useState();
    const [educationalInfo, setEducationalInfo] = useState();
    const [spInfo, setSPInfo] = useState();
    const [activeTab, setActiveTab] = useState("1");
    const dispatch = useDispatch();

    function onPIsubmit(values){
        setPersonalInfo(values);
        console.log(values);
        setActiveTab("2");
    }
    function onEdusubmit(values){
        setEducationalInfo(values);
        console.log(values);
        setActiveTab("3");
    }
    function onSPsubmit(values){
        setSPInfo(values);
        console.log(values);
        setActiveTab("4");
    }
    function onFinalsubmit(values){
        const finalObj = {...personalInfo, ...educationalInfo, ...spInfo, ...values};
        console.log(finalObj);
        dispatch(updateUser(finalObj));
    }

    const user = JSON.parse(localStorage.getItem('user'));

    const items = [
        {
            key: '1',
            label: `Personal Info`,
            children: 
                <Form layout='vertical' className='mt-2' onFinish={onPIsubmit} initialValues={user}>
                    <div className='flex items-center justify-center font-mo text-sm mt-[-1rem]'>*Complete this section to proceed further*</div>
                    <hr />
                    <Row>
                        <Col lg={8} sm={24} className='ml-[2rem]'>
                            <Form.Item label='First name' required rules={[{required: true}]} name='firstName'>
                                <Input className='capitalize'/>
                            </Form.Item>
                        </Col>
                        <Col lg={8} sm={24} className='ml-[12rem]'>
                            <Form.Item label='Last name' required rules={[{required: true}]} name='lastName'>
                                <Input className='capitalize'/>
                            </Form.Item>
                        </Col>
                        <Col lg={8} sm={24} className='ml-[2rem]'>
                            <Form.Item label='Email Address' required rules={[{required: true}]} name='email'>
                                <Input />
                            </Form.Item>
                        </Col>
                        <Col lg={8} sm={24} className='ml-[12rem]'>
                            <Form.Item label='Registration Number' required rules={[{required: true}]} name='RegistrationNumber'>
                                <Input className='uppercase'/>
                            </Form.Item>
                        </Col>
                        <Col lg={8} sm={24}  className='ml-[2rem]'>
                            <Form.Item label='Mobile Number' required rules={[{required: true}]} name='mobileNumber'>
                                <Input />
                            </Form.Item>
                        </Col>
                        <Col lg={8} sm={24} className='ml-[12rem]'>
                            <Form.Item label='Portfolio URL' rules={[{required: false}]} name='Portfolio'>
                                <Input />
                            </Form.Item>
                        </Col>
                        <Col lg={8} sm={24} className='ml-[2rem]'>
                            <Form.Item label='LinkedIN URL' rules={[{required: false}]} name='LinkedIn'>
                                <Input />
                            </Form.Item>
                        </Col>
                        <Col lg={8} sm={24} className='ml-[12rem]'>
                            <Form.Item label='GitHub URL' required rules={[{required: true}]} name='Github'>
                                <Input />
                            </Form.Item>
                        </Col>
                        <Col lg={8} sm={24} className='ml-[2rem]'>
                            <Form.Item label='Tell us something about you' required rules={[{required: true}]} name='about'>
                                <TextArea rows={5} />
                            </Form.Item>
                        </Col>
                        <Col lg={8} sm={24} className='ml-[12rem]'>
                            <Form.Item label='Address' required rules={[{required: true}]} name='address'>
                                <TextArea rows={5} />
                            </Form.Item>
                        </Col>
                    </Row>  
                    <div className='ml-[24rem] mb-5'>
                        <Button htmlType="submit" className='text-sm font-bold font-comf hover:scale-125 savem'>Save and move</Button>
                    </div>
                </Form>
        },
        {
            key: '2',
            label: `Education`,
            children: 
                <Form initialValues={user} layout='vertical' onFinish={onEdusubmit}>
                    <div className='flex items-center justify-center font-mo text-sm mt-[-0.5rem]'>*Complete this section to proceed further*</div>
                    <hr />
                    <Row>
                        <Col lg={24} sm={24}>
                            <Form.List name="education">
                                {(education, {add, remove}) => (
                                    <div className='ml-[2rem]'>
                                        {education.map((field, index) => (
                                            <div className='flex'>
                                                <Form.Item required rules={[{required: true}]} {...field} label="Education" className='w-[60%]'>
                                                    <Input rows={3} />
                                                </Form.Item>
                                                <div className='flex items-center justify-center flex-col ml-[5rem] mt-4'>
                                                    <Button onClick={() => {add()}} className='addm'>Add more</Button>
                                                    {index !== 0 && <Button onClick={() => {remove(index)}} className='del'>Delete</Button>}
                                                </div>
                                            </div>
                                        ))}
                                    </div>
                                )}
                            </Form.List>
                        </Col>
                    </Row>
                    <div className='ml-[24rem]'>
                        <Button onClick={() => {setActiveTab("1")}} className='font-comf font-bold text-sm hover:scale-125 ml-[-22rem] prevm'>Previous Section</Button>
                        <Button htmlType="submit" className='font-comf font-bold text-sm hover:scale-125 ml-[29.7rem] savem'>Save and move</Button>
                    </div>
                </Form>
        },
        {
            key: '3',
            label: `Skills and Projects`,
            children: 
                <Form initialValues={user} layout='vertical' onFinish={onSPsubmit}>
                    <div className='flex items-center justify-center font-mo text-sm mt-[-0.5rem]'>*Complete this section to proceed further*</div>
                    <hr />
                    <Row>
                        <Col lg={24} sm={24}>
                            <Form.List name="skills">
                                {(skills, {add, remove}) => (
                                    <div className='ml-[2rem]'>
                                        {skills.map((field, index) => (
                                            <div className='flex'>
                                                <Form.Item required rules={[{required: true}]} {...field} label="Skill" className='w-[73%]'>
                                                    <TextArea rows={3} />
                                                </Form.Item>
                                                <div className='flex items-center justify-center flex-col mt-4 ml-[5rem]'>
                                                    <Button onClick={() => {add()}} className='addm'>Add more</Button>
                                                    {index !== 0 && <Button onClick={() => {remove(index)}} className='del'>Delete</Button>}
                                                </div>
                                            </div>
                                        ))}
                                    </div>
                                )}
                            </Form.List>
                        </Col>
                        <Col lg={24} sm={24}>
                            <Form.List name="projects">
                                {(projects, {add, remove}) => (
                                    <div className='ml-[2rem]'>
                                        {projects.map((field, index) => (
                                            <div className='flex'>
                                                <Form.Item required rules={[{required: true}]} {...field} label="Project Description" className='w-[30%]'>
                                                    <TextArea rows={3} />
                                                </Form.Item>
                                                <div className='flex items-center ml-[2rem] justify-center mt-4 flex-col'>
                                                    <Button onClick={() => {add()}} className='addm'>Add more</Button>
                                                    {index !== 0 && <Button onClick={() => {remove(index)}} className='del'>Delete</Button>}
                                                </div>
                                                <Col lg={10} sm={24} className='ml-[4rem] mt-4'>
                                                    <Form.Item label='Project link (Can be a GitHub repo link or a Deployed link)' required rules={[{required: true}]} name='projectLink'>
                                                        <Input rows={5} />
                                                    </Form.Item>
                                                </Col>
                                            </div>
                                        ))}
                                    </div>
                                )}
                            </Form.List>
                        </Col>
                    </Row>
                    <div className='ml-[24rem]'>
                        <Button onClick={() => {setActiveTab("2")}} className='font-comf font-bold text-sm hover:scale-125 ml-[-22rem] prevm'>Previous Section</Button>
                        <Button htmlType="submit" className='font-comf font-bold text-sm hover:scale-125 ml-[36rem] savem'>Save and move</Button>
                    </div>
                </Form>
        },
        {
            key: '4',
            label: `Experience`,
            children: 
                <Form initialValues={user} layout='vertical' onFinish={onFinalsubmit}>
                    <Row>
                        <Col lg={24} sm={24}>
                            <Form.List name="Internship">
                                {(Internship, {add, remove}) => (
                                    <div className='ml-[2rem]'>
                                        {Internship.map((field, index) => (
                                            <div className='flex'>
                                                <Form.Item {...field} label="Internship Details (if any)" className='w-[60%]'>
                                                    <TextArea rows={3} />
                                                </Form.Item>
                                                <div className='flex items-center justify-center flex-col ml-[5rem] mt-4'>
                                                    <Button onClick={() => {add()}} className='addm'>Add more</Button>
                                                    {index !== 0 && <Button onClick={() => {remove(index)}} className='del'>Delete</Button>}
                                                </div>
                                            </div>
                                        ))}
                                    </div>
                                )}
                            </Form.List>
                        </Col>
                        <Col lg={8} sm={24} className='ml-[2rem]'>
                            <Form.Item label='Resume link (Must be accessible to all)' required rules={[{required: true}]} name='ResumeLink'>
                                <Input rows={5} />
                            </Form.Item>
                        </Col>
                    </Row>
                    <div className='ml-[24rem]'>
                        <Button onClick={() => {setActiveTab("3")}} className='font-comf font-bold text-sm hover:scale-125 ml-[-22rem] prevm'>Previous Section</Button>
                        <Button htmlType="submit" className='font-comf font-bold text-sm hover:scale-125 ml-[31.5rem]'>Submit</Button>
                    </div>
                </Form>
        },
    ];

    return (
        <div>
            <DefaultLayout>
                {/* <Tabs defaultActiveKey="1" items={items} /> */}
                <Tabs defaultActiveKey="1" items={items} activeKey={activeTab} />
            </DefaultLayout>
        </div>
    )
}

export default Profile;