import { Layout, Menu } from 'antd';
import 'antd/dist/antd.css';

import {
 UserOutlined,
 VideoCameraOutlined,
 UsergroupAddOutlined,
 HomeOutlined,
 IdcardFilled,
} from "@ant-design/icons";
import { Link } from "react-router-dom";
const { Header } = Layout;

export const NavBar = () => {
  return (
   <Layout clasName="layout">

    <Header>
      <div className="logo" />

      <Menu theme="dark" mode="horizontal">
        <Menu.Item key="1" icon={<HomeOutlined />}>
          <Link to="/">Home</Link>
        </Menu.Item>
        <Menu.Item key="2" icon={<IdcardFilled />}>
          <Link to="/about">About</Link>
        </Menu.Item>
        <Menu.Item key="3" icon={<VideoCameraOutlined />}>
          <a href="https://lof-video-chat.netlify.app/">Video Call</a>
        </Menu.Item>
        <Menu.Item key="4" icon={<VideoCameraOutlined />}>
          <Link to="/chat">Chat</Link>
        </Menu.Item>
        <Menu.Item key="5" icon={<UserOutlined />}>
          <Link to="/meet-the-team">Meet the Team</Link>
        </Menu.Item>
        <Menu.Item key="6" icon={<UsergroupAddOutlined />}>
          <Link to="/support-team">Contact Support Team</Link>
        </Menu.Item>
      </Menu>
    </Header>
   </Layout>
  );
};
