import { useChat } from 'context';
import { ChatAvatar } from 'components';
import { groupMessages } from 'helpers';
import { useScrollToBottom } from 'hooks';

export const MessageList = () => {
  const { selectedChat } = useChat();
  useScrollToBottom(selectedChat, 'chat-messages');

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
              <div className="message-author">{message[0].sender.username}</div>
            </div>

            <div className="message-content">
              {message.map((individualMessage, index) => (
                <div key={index}>
                  <div className="message-text">{individualMessage.text}</div>

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
