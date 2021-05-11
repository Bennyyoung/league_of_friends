import { useEffect } from 'react';
import { ChatProvider } from 'context';
import 'semantic-ui-css/semantic.min.css';
import { useAuth, useResolved } from 'hooks';
import {
  Home,
  Login,
  Signup,
  Chat,
  About,
  MeetTheTeam,
  ContactSupportTeam,
  VideoChat,
  Donations,
  UserProfile
} from 'components';
import { Route, Switch, useHistory } from 'react-router-dom';
import { Loader, Segment, Image, Dimmer } from 'semantic-ui-react';
import { Layout } from 'antd';

import { useSpring, useTransition, animated } from '@react-spring/web';

export const App = () => {
  const history = useHistory();
  const { authUser } = useAuth();
  const authResolved = useResolved(authUser);

  const styles = useSpring({
    loop: true,
    from: { rotateZ: 0 },
    to: { rotateZ: 180 },
  });

  useEffect(() => {
    if (authResolved) {
      history.push(!!authUser ? '/chat' : '/login');
    }
  }, [authResolved, authUser, history]);

  return authResolved ? (
    <ChatProvider authUser={authUser}>
      <div>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/chat" component={Chat} />
          <Route path="/login" component={Login} />
          <Route path="/signup" component={Signup} />
          <Route path="/about" component={About} />
          {/* <Route path="/video-call" component={VideoChat} /> */}
          <Route path="/meet-the-team" component={MeetTheTeam} />
          <Route path="/support-team" component={ContactSupportTeam} />
          <Route path="/donate" component={Donations} />
          <Route path="/user-profile" component={UserProfile} />


        </Switch>
      </div>
    </ChatProvider>
  ) : (
    // <Segment
    //   style={{
    //     top: '50%',
    //     left: '50%',
    //     margin: '0',
    //     position: 'absolute',
    //     msTransform: 'translate(-50%, -50%)',
    //     transform: 'translate(-50%, -50%)',
    //     background:
    //       'linear-gradient(90deg,#7554a0 7%,#7554a0 17%,#6a5fa8 29%,#6367ae 44%,#5774b8 66%,#4687c6 83%,#2ca3db 96%,#16bced 100%,#00d4ff 0)',
    //     width: '250rem',
    //     height: '50rem',
    //   }}
    // >
    //   <Dimmer active>
    //     <Loader size="massive" active>
    //       Loading
    //     </Loader>
    //   </Dimmer>

    //   <Image src="/images/wireframe/short-paragraph.png" />
    // </Segment>

    <Segment
      style={{
        backgroundColor: '#121212',
        height: '50rem',
      }}
    >
      <animated.div
        style={{
          width: 80,
          height: 80,
          top: '50%',
          left: '50%',
          margin: '0',
          position: 'absolute',
          msTransform: 'translate(-50%, -50%)',
          transform: 'translate(-50%, -50%)',
          backgroundColor: '#46e891',

          borderRadius: 16,
          ...styles,
        }}
      />
    </Segment>
  );
};
