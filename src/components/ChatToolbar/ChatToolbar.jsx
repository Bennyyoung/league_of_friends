import { useState } from 'react';
import { Link } from 'react-router-dom';
import { useChat } from 'context';
import { joinUsernames } from 'helpers';
import { Icon } from 'semantic-ui-react';
import { SearchUsers } from 'components';

export const ChatToolbar = () => {
  const { selectedChat, chatConfig } = useChat();
  const [searching, setSearching] = useState(false);

  return (
    <>
      {/* <Link to="/chat">
        <Icon className="arrow alternate circle left outline icon" style={{float: 'left'}}/>
      </Link> */}
      <div className="chat-toolbar">
        <div className="chat-header-text">
          {joinUsernames(selectedChat.people, chatConfig.userName).slice(
            0,
            100,
          )}
        </div>

        <div className="add-user-icon">
          <Icon
            color="grey"
            name="user plus"
            onClick={() => setSearching(true)}
          />
        </div>
      </div>

      <SearchUsers visible={searching} closeFn={() => setSearching(false)} />
    </>
  );
};
