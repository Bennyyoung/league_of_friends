import { useChat } from 'context';
import { useResolved } from 'hooks';
import { ChatList, RailHeader } from 'components';
import { Loader } from 'semantic-ui-react';
import { Drawer, Button } from 'antd';
import { useState } from 'react';

export const LeftRail = () => {
  const { myChats, createChatClick } = useChat();
  const chatsResolved = useResolved(myChats);
  const [visible, setVisible] = useState(false);
  // const [placement, setPlacement] = useState('left')

  // onChange = (e) => {
  //  setPlacement({

  //   placement: e.target.value
  //  })
  // }

  return (
    <>
      <div className="left-rail">
      <Button type="primary" onClick={() => setVisible(true)}>
        >>
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
