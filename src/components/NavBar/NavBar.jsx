import { Layout, Menu } from 'antd';
import 'antd/dist/antd.css';

import {
 ContactsOutlined,
 VideoCameraOutlined,
 UsergroupAddOutlined,
 HomeOutlined,
 IdcardFilled,
 WechatOutlined,
 PhoneOutlined,
 CreditCardOutlined,
 CustomerServiceOutlined
} from "@ant-design/icons";
import { Link } from "react-router-dom";
const { Header } = Layout;

export const NavBar = () => {
  return (
   <Layout className="layout">

    <Header style={{ position: 'sticky', zIndex: 1, width: '100%' }}>
      <div className="logo" />

      <Menu theme="dark" mode="horizontal">
        <Menu.Item key="1" icon={<HomeOutlined  />}>
          <Link to="/"></Link>
        </Menu.Item>
        <Menu.Item key="2" icon={<WechatOutlined />}>
          <Link to="/chat"></Link>
        </Menu.Item>
        <Menu.Item key="3" icon={<VideoCameraOutlined />}>
          <Link to="/video-call"></Link>
        </Menu.Item>
        <Menu.Item key="5" icon={<ContactsOutlined />}>
          <Link to="/meet-the-team"></Link>
        </Menu.Item>
        <Menu.Item key="6" icon={<CustomerServiceOutlined />}>
          <Link to="/support-team"></Link>
        </Menu.Item>
        <Menu.Item key="7" icon={<CreditCardOutlined />}>
          <Link to="/donate"></Link>
        </Menu.Item>
        {/* <Menu.Item key="7" icon={<IdcardFilled />}>
          <Link to="/user-profile"></Link>
        </Menu.Item> */}
      </Menu>
    </Header>
   </Layout>
  );
};
