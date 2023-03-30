import React, { useState } from 'react'
import { Input, Modal, Form, Select, Button} from 'antd';
import { FilterOutlined } from '@ant-design/icons';
import { useDispatch } from 'react-redux';
import { searchJobs, sortJobs } from '../redux/actions/jobActions';

const { Search } = Input;
const { Option } = Select;
function Filter() {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const dispatch = useDispatch();
    const showModal = () => {
        setIsModalOpen(true);
    };
    const handleOk = () => {
        setIsModalOpen(false);
    };
    const handleCancel = () => {
        setIsModalOpen(false);
    };
    function sort(values){
        dispatch(sortJobs(values))
        handleCancel();
    }
    return (
        <div className="flex">
            <Search onSearch={(value)=>{dispatch(searchJobs(value))}} className='w-[15rem] mt-[0.7rem]' placeholder='Search'/>
            <FilterOutlined onClick={showModal} />
            <Modal title="Select filters" footer={false} open={isModalOpen} onOk={handleOk} onCancel={handleCancel} closable={false}>
                <Form layout='vertical' onFinish={sort}>
                    <Form.Item name='category' label='Category'>
                        <Select>
                            <Option value={0}>Super Dream Offer</Option>
                            <Option value={1}>Dream Offer</Option>
                            <Option value={2}>Regular Offer</Option>
                            <Option value={3}>Software Roles</Option>
                            <Option value={4}>Hardware Roles</Option>
                        </Select>
                    </Form.Item>
                    <Form.Item name='eligiblity' label='Eligibility'>
                        <Select>
                            <Option value={0}>Above 9.5 CGPA</Option>
                            <Option value={1}>Above 9 CGPA</Option>
                            <Option value={2}>Above 8.5 CGPA</Option>
                            <Option value={3}>Above 8 CGPA</Option>
                            <Option value={4}>Above 7.5 CGPA</Option>
                            <Option value={5}>Above 7 CGPA</Option>
                            <Option value={5}>Below 7 CGPA</Option>
                        </Select>
                    </Form.Item>
                    <Button htmlType='submit'>Filter</Button>
                </Form>
            </Modal>
        </div>
    )
}

export default Filter
