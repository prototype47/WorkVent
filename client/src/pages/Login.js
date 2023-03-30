import React from 'react';
import { Row, Col, Form, Input, Button } from 'antd';
import { useDispatch } from 'react-redux';
import { loginUser } from '../redux/actions/userActions';
import { Link } from 'react-router-dom';
import AOS from 'aos';
import 'aos/dist/aos.css';
AOS.init();

function Login() {

    const dispatch = useDispatch();

    function login(values)
    {
        dispatch(loginUser(values));
    }

    return (
        <div className='login'>
            <div>&nbsp;</div>
            <div>&nbsp;</div>
            <div>&nbsp;</div>
            <div>&nbsp;</div>
            <div>&nbsp;</div>
            <Row justify='center' className='flex items-center'>
                <Col lg={6}><h1 className='font-aso text-8xl text-center head1 text-white p-5 mr-2 tracking-wider ml-[-3rem] border-t-emerald-500' data-aos="fade-up">Work</h1></Col>
                <Col lg={9} sm={24} className="p-10 shadow-3xl rounded-2xl border-red-400 border-2 ">
                    <h1 className='font-mo'>Login</h1>
                    <hr />
                    <Form layout='vertical' onFinish={login}>
                        <Form.Item placeholder="Username" label="Username" name="username" rules={[{required: true}]}>
                            <Input />
                        </Form.Item>
                        <Form.Item placeholder="Password" label="Password" name="password" rules={[{required: true}]}>
                            <Input type="password"/>
                        </Form.Item>
                        <div className='flex justify-between'>
                            <Button htmlType="submit" className='text-sm font-bold font-comf hover:scale-110'>Login</Button><br/>
                        </div>
                        <div className='flex justify-end mb-[-1rem]'>
                            <Link to='/register' className='mt-5 text-sm font-mo hover:underline duration-300'>Not a WorkVent user? <br/> Click here to register</Link>
                        </div>
                    </Form>
                </Col>
                <Col lg={6}><h1 className='font-aso text-8xl text-center head2 text-white tracking-wider ml-2 border-t-yellow-500' data-aos="fade-down">Vent</h1></Col>
            </Row>
        </div>
    )
}

export default Login