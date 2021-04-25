import { Menu, Icon, Header } from 'semantic-ui-react';
import { Link } from 'react-router-dom';

export const NavBar = () => {
  return (
    <>
      <Menu inverted style={{backgroundColor: '#001529'}} widths={3}>
        <Link to="/">
          <Menu.Item>
            <Icon name="home" />
            {/* Home */}
          </Menu.Item>
        </Link>
        <Link to="/about">
          <Menu.Item>
            <Icon name="user" />
            {/* About */}
          </Menu.Item>
        </Link>
        <a href="https://lof-video-chat.netlify.app/">
          <Menu.Item>
            <Icon name="video camera" />
            {/* Video Call */}
          </Menu.Item>
        </a>
        <Link to="/chat">
          <Menu.Item>
            <Icon name="chat" />
            {/* Chat */}
          </Menu.Item>
        </Link>
        <Link to="/meet-the-team">
          <Menu.Item>
            <Icon name="users" />
            {/* Meet the Team */}
          </Menu.Item>
        </Link>
        <Link to="/support-team">
          <Menu.Item>
            <Icon name="talk" />
            {/* Contact Support Team */}
          </Menu.Item>
        </Link>
      </Menu>
    </>
  );
};
