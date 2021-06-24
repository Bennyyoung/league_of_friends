import { useChat } from 'context';
import { ChatAvatar } from 'components';
import { groupMessages } from 'helpers';
import { useScrollToBottom } from 'hooks';
import Moment from 'react-moment';

export const MessageList = () => {
  const { selectedChat, myChats } = useChat();
  useScrollToBottom(selectedChat, 'chat-messages');

  // const isFirstMessageByUser = selectedChat.

  return (
    <div className="chat-messages">
      {!!selectedChat.messages.length ? (
        groupMessages(selectedChat.messages).map((message, index) => (
          <div key={index} className="chat-message">
            <div className="chat-message-header">
              <ChatAvatar
                className="message-avatar"
                username={message[0].sender.username}
                chat={selectedChat}
              />
              <div className="message-author">
                {message[0].sender.username}
                {/* {console.log("message"+message[0].sender)} */}
                {/* {console.log("i'm from last message" + lastMessage)} */}
              </div>
            </div>

            <div className="message-content">
              {message.map((individualMessage, index) => (
                <div key={index}>
                  
                  <div
                    className="message-text"
                    style={{
                      float:
                        individualMessage.text === message[0].last_message
                          ? 'left'
                          : 'right',
                    }}
                  >
                    { 
                    console.log("myChats from msg list:" + myChats)}
                    {Object.keys(myChats).forEach(prop =>
                    console.log('looped my chats: ' + prop),
                  )}
                    {individualMessage.text}
                    <div style={{fontSize: "12px", color: "#7a7f9a"}}>
                    🕑 <Moment format={'HH:mm'}>
                      { message[0].created}
                      </Moment>
                    </div>
                  </div>

                  {/* {console.log("I'm a message sender: " + message[0].sender.username)}
                  {console.log("I'm a message first: " + message)} */}
                  {Object.keys(message[0]).forEach(prop =>
                    console.log('looped object: ' + prop),
                  )}
                  {console.log("lastmessage"+message.last_message)}

                  {!!individualMessage.attachments.length && (
                    <img
                      className="message-image"
                      src={individualMessage.attachments[0].file}
                      alt={individualMessage.id + '-attachment'}
                    />
                  )}
                </div>
              ))}
            </div>
          </div>
        ))
      ) : (
        <div className="no-messages-yet">No messages yet</div>
      )}
    </div>
  );
};
