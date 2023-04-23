import { Outlet } from "react-router-dom";
import { useState } from 'react';
import {
    MenuFoldOutlined,
    MenuUnfoldOutlined,
    LogoutOutlined,
} from '@ant-design/icons';
import { Layout, Button, theme, Image, Typography } from 'antd';
const { Title } = Typography;
const { Header, Sider, Content } = Layout;

import './Dashboard.css';
import image from '../../assets/logo_whatpass.png'
import { AppMenu } from "../../components/AppMenu/AppMenu";

export const Dashboard = () => {

    const [collapsed, setCollapsed] = useState(false);

    const {
        token: { colorBgContainer },
    } = theme.useToken();

    return (
        <div className="content">
            <Layout>
                <Sider theme="light" trigger={null} collapsible collapsed={collapsed}>
                    <div className='sidebar__image'>
                        <Image width={200} src={image} preview={false} />
                    </div>
                    <AppMenu />
                </Sider>
                <Layout>
                    <Header style={{ padding: 0, background: colorBgContainer }} className="title_dashboard">
                        <Button
                            type="text"
                            icon={collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
                            onClick={() => setCollapsed(!collapsed)}
                            style={{
                                fontSize: '16px',
                                width: 64,
                                height: 64,
                            }}
                        />
                        <div className="header_rigth_section">
                            <Title level={2}>José Galdámez</Title>
                            <LogoutOutlined className="close_session" />
                        </div>
                    </Header>
                    <Content className="content_dashboard" >
                        <Outlet />
                    </Content>
                </Layout>
            </Layout>
        </div>
    );
};
