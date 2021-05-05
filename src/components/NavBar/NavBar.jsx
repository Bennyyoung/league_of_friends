import { Layout, Menu } from 'antd';
import 'antd/dist/antd.css';

import {
 ContactsOutlined,
 VideoCameraOutlined,
 UsergroupAddOutlined,
 HomeOutlined,
 IdcardFilled,
 WechatOutlined,
 PhoneOutlined
} from "@ant-design/icons";
import { Link } from "react-router-dom";
const { Header } = Layout;

export const NavBar = () => {
  return (
   <Layout clasName="layout">

    <Header>
      <div className="logo" />

      <Menu theme="dark" mode="horizontal">
        <Menu.Item key="1" icon={<HomeOutlined  />}>
          <Link to="/"></Link>
        </Menu.Item>
        <Menu.Item key="2" icon={<WechatOutlined />}>
          <Link to="/chat"></Link>
        </Menu.Item>
        <Menu.Item key="3" icon={<VideoCameraOutlined />}>
          <a href="https://lof-video-chat.netlify.app/"></a>
        </Menu.Item>
        <Menu.Item key="4" icon={<ContactsOutlined />}>
          <Link to="/about"></Link>
        </Menu.Item>
        <Menu.Item key="5" icon={<UsergroupAddOutlined />}>
          <Link to="/meet-the-team"></Link>
        </Menu.Item>
        <Menu.Item key="6" icon={<PhoneOutlined />}>
          <Link to="/support-team"></Link>
        </Menu.Item>
      </Menu>
    </Header>
   </Layout>
  );
};
