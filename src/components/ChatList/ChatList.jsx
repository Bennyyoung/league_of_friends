import { useChat } from 'context';
import { ChatAvatar } from 'components';
import { Icon } from 'semantic-ui-react';
import { joinUsernames, notMe } from 'helpers';

export const ChatList = () => {
  const {
    myChats,
    chatConfig,
    selectedChat,
    selectChatClick,
    deleteChatClick,
  } = useChat();

  return (
    <div className="chat-list">
      {myChats.map((currentChat, index) => (
        <div
          className={`chat-list-item ${
            selectedChat?.id === currentChat.id ? 'selected-chat-item' : ''
          }`}
          key={index}
        >
          <div
            onClick={() => selectChatClick(currentChat)}
            className="chat-list-item-content"
          >
            {currentChat.people.length === 1 ? (
              <>
                <Icon circular inverted color="violet" name="user cancel" />
                <div className="chat-list-preview">
                  <div className="preview-username">No One Added Yet</div>
                </div>
              </>
            ) : currentChat.people.length === 2 ? (
              <>
                <ChatAvatar
                  username={notMe(chatConfig, currentChat)}
                  chat={currentChat}
                />

                <div className="chat-list-preview">
                  <div className="preview-username">
                    {notMe(chatConfig, currentChat)}
                  </div>
                  <div className="preview-message">
                    {currentChat.last_message.attachments.length
                      ? `${currentChat.last_message.sender.username} sent an attachment`
                      : currentChat.last_message.text.slice(0, 50) + '...'}
                  </div>
                </div>
              </>
            ) : (
              <>
                <Icon circular inverted color="brown" name="users" />

                <div className="preview-username">
                  {joinUsernames(currentChat.people, chatConfig.userName).slice(
                    0,
                    50,
                  ) + '...'}
                </div>
                <div className="preview-message">
                  {currentChat.last_message.attachments.length
                    ? `${currentChat.last_message.sender.username} sent an attchment`
                    : currentChat.last_message.text.slice(0, 50) + '...'}
                </div>
              </>
            )}
          </div>

          <div
            onClick={() => deleteChatClick(currentChat)}
            className="chat-item-delete"
          >
            <Icon name="delete" />
          </div>
        </div>
      ))}
    </div>
  );
};
