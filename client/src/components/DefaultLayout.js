import { MenuFoldOutlined, MenuUnfoldOutlined, LogoutOutlined, OrderedListOutlined, PlusCircleOutlined, CheckSquareOutlined, UserOutlined, HomeOutlined, VideoCameraOutlined } from '@ant-design/icons';
import { Layout, Menu, theme } from 'antd';
import { Footer } from 'antd/es/layout/layout';
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Filter from './Filter';

const { Header, Sider, Content } = Layout;
const DefaultLayout = (props) => {

    const [collapsed, setCollapsed] = useState(false);
    const { token: { colorBgContainer }, } = theme.useToken();
    const { children } = props;
    const logout = () => {
        localStorage.removeItem('user');
        window.location.reload();
    }
    const user = JSON.parse(localStorage.getItem('user'));

    return (
        <Layout>
            <Sider trigger={null} collapsible collapsed={collapsed} width={280} style={{ padding: 0, top: 0, position: 'sticky', overflow: 'auto', height: '100%' }}>
                <div className="p-0 m-0 text-3xl tracking-widest text-center text-white cursor-pointer logo font-prism outline">
                    {collapsed ? <h1 className='mt-2 mb-7'>WV</h1> : <h1 className='mt-2 mb-7'>WorkVent</h1>}
                </div>
                <Menu
                    theme="dark"
                    mode="inline"
                    defaultSelectedKeys={[window.location.pathname]}
                    items={[
                        {
                            key: '/',
                            icon: <HomeOutlined style={{fontSize: '19px', marginTop: '-7px'}} />,
                            label: <Link to='/' className='text-lg font-comf'>Home</Link>,
                        },
                        {
                            key: '/profile',
                            icon: <UserOutlined style={{fontSize: '19px', marginTop: '-7px'}} />,
                            label: <Link to='/profile' className='text-lg font-comf'>Profile</Link>,
                        },
                        {
                            key: '/postjobs',
                            icon: <PlusCircleOutlined style={{fontSize: '19px', marginTop: '-7px'}} />,
                            label: <Link to='/postjobs' className='text-lg font-comf'>Post Jobs</Link>,
                        },
                        {
                            key: '/posted',
                            icon: <OrderedListOutlined style={{fontSize: '19px', marginTop: '-7px'}} />,
                            label: <Link to='/posted' className='text-lg font-comf'>Posted Jobs</Link>,
                        },
                        {
                            key: '/appliedjobs',
                            icon: <CheckSquareOutlined style={{fontSize: '19px', marginTop: '-7px'}} />,
                            label: <Link to='/appliedjobs' className='text-lg font-comf'>Applied Jobs</Link>,
                        },
                        {
                            key: '/mockinter',
                            icon: <VideoCameraOutlined style={{fontSize: '19px', marginTop: '-7px'}} />,
                            label: <Link to='/mockinter' className='text-lg font-comf'>Take Interview</Link>,
                        },
                        {
                            key: '/logout',
                            icon: <LogoutOutlined style={{fontSize: '19px', marginTop: '-7px'}} />,
                            label: <Link onClick={logout} className='text-lg font-comf'>Logout</Link>,
                        }
                    ]}
                />
                <Footer className='bg-[#001529] text-gray-500 p-0 ml-[-0.35rem] text-center text-[0.6rem] mt-[8rem] font-mo'>
                    {collapsed ? <h3 className='ml-1'>©️ WV 2023 v1.0</h3> : <h3>©️ 2023 | Powered by WorkVent <br /> | v1.0</h3>}
                </Footer>
            </Sider>
            <Layout className="site-layout">
                <Header
                    style={{
                        padding: 0,
                        background: colorBgContainer,
                        position: 'sticky',
                        overflow: 'hidden',
                        top: 0,
                        zIndex: 9999,
                    }}
                >
                    <div className='flex justify-between'>
                        <div>
                            {React.createElement(collapsed ? MenuUnfoldOutlined : MenuFoldOutlined, {
                                className: 'trigger',
                                onClick: () => setCollapsed(!collapsed),
                            })}
                        </div>
                        <div>
                            <Filter style={{fontSize: '19px', marginTop: '-7px'}} />
                        </div>
                        <div>
                          <h2 className="mr-4 mt-3 font-jos text-2xl"><b>{user.username}</b></h2>
                        </div>
                    </div>
                </Header>
                <Content
                    style={{
                        margin: '24px 16px',
                        padding: 24,
                        minHeight: 280,
                        background: colorBgContainer,
                    }}>
                    {children}
                </Content>
            </Layout>
        </Layout>
    );
};

export default DefaultLayout;
