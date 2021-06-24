import { useChat } from 'context';
import { useResolved } from 'hooks';
import { ChatList, RailHeader, VideoChatModal } from 'components';
import { Loader } from 'semantic-ui-react';
import { Drawer, Button, Modal } from 'antd';
import { useState } from 'react';
import ModalVideo from 'react-modal-video';
// import 'node_modules/react-modal-video/scss/modal-video.scss';

import {
  WechatOutlined,
  ContactsOutlined,
  VideoCameraOutlined,
  HomeOutlined,
  CreditCardOutlined,
  CustomerServiceOutlined,
} from '@ant-design/icons';
import { Link } from 'react-router-dom';

export const LeftRail = () => {
  const { myChats, createChatClick } = useChat();
  const chatsResolved = useResolved(myChats);
  const [visible, setVisible] = useState(false);
  const [videoModalVisible, setVideoModalVisible] = useState(false);

  const [showModal, setShowModal] = useState(false);

  const openModal = () => {
    setShowModal(prev => !prev);
  };

  const [isOpen, setOpen] = useState(false);

  return (
    <>
      <div className="left-rail">
        <Button type="primary" onClick={() => setVisible(true)}>
          <WechatOutlined />
        </Button>

        <div>
          <VideoChatModal showModal={showModal} setShowModal={setShowModal} />
        </div>

        <Button type="primary" onClick={openModal}>
          <VideoCameraOutlined />
        </Button>

        <Drawer
          closable={false}
          visible={visible}
          onClose={() => setVisible(false)}
          placement="left"
        >
          <RailHeader />
          {chatsResolved ? (
            <>
              {!!myChats.length ? (
                <div className="chat-list-container">
                  <ChatList />
                </div>
              ) : (
                <div className="chat-list-container no-chats-yet">
                  <h3>No Chats Yet</h3>
                </div>
              )}

              <button className="create-chat-button" onClick={createChatClick}>
                Create Chat
              </button>
            </>
          ) : (
            <div className="chats-loading">
              <Loader active size="huge" />
            </div>
          )}
        </Drawer>
      </div>
    </>
  );
};
