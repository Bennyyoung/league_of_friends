import { useState, useEffect, createRef, useRef } from 'react';
import { useChat } from 'context';
import { Icon } from 'semantic-ui-react';
import { sendMessage } from 'react-chat-engine';
import { ImageUpload, Audio, Emoji } from 'components';
import { Modal, Button } from 'antd';
import { SmileOutlined } from '@ant-design/icons';

export const ChatInput = () => {
  const { chatConfig, selectedChat } = useChat();
  const [chatInputText, setChatInputText] = useState('');
  const [imageModalOpen, setImageModalOpen] = useState(false);
  const inputRef = useRef(null);
  const refFromCreateRef = createRef();
  const [message, setMessage] = useState('');
  const [showEmojis, setShowEmojis] = useState();
  const [cursorPosition, setCursorPosition] = useState();

  const [image, setImage] = useState();
  const [visible, setVisible] = useState(false);

  // const pickEmoji = (e, { emoji }) => {
  //   const ref = refFromCreateRef.current;
  //   ref.focus();
  //   const start = message.substring(0, ref.selectionStart);
  //   const end = message.substring(ref.selectionStart);
  //   const text = start + emoji + end;
  //   setMessage(text);
  //   setCursorPosition(start.length + emoji.length);
  // };

  const handleChange = e => {
    setMessage(e.target.value);
  };

  // const handleShowEmojis = () => {
  //   refFromCreateRef.current.focus();
  //   setShowEmojis(!showEmojis);
  // };

  const sendChatMessage = () => {
    if (selectedChat && chatInputText) {
      setChatInputText('');
      sendMessage(chatConfig, selectedChat.id, {
        text: chatInputText,
        files: [],
      });
    }
  };

  const onFileAttach = file => {
    setImage(file);
    setImageModalOpen(true);
  };

  // useEffect(() => {
  //   refFromCreateRef.current.selectionEnd = cursorPosition;
  // }, [cursorPosition]);

  return (
    <>
      <div className="chat-controls">
        <div
          onClick={() => {
            const input = inputRef.current;
            if (input) {
              input.value = '';
              input.click();
            }
          }}
          className="attachment-icon"
        >
          <Icon name="attach" color="grey" />
        </div>
        <Button
          type="primary"
          onClick={() => {
            setVisible(true);
          }}
        >
          <SmileOutlined />
        </Button>
        <Modal
          style={{ bottom: 20 }}
          visible={visible}
          width={306}
          height={200}
          onOk={() => setVisible(false)}
          onCancel={() => setVisible(false)}
        >
            <Emoji style={{alignItems: 'center'}} />
          
        </Modal>
        {/* <div><Audio /></div> */}
        <input
          value={chatInputText}
          className="chat-input"
          placeholder="Send a message"
          onKeyPress={e => {
            if (e.key === 'Enter') {
              sendChatMessage();
            }
          }}
          onChange={e => setChatInputText(e.target.value)}
        />
        <div onClick={sendChatMessage} className="send-message-icon">
          <Icon name="send" color="grey" />
        </div>
      </div>

      <input
        type="file"
        ref={inputRef}
        className="file-input"
        accept="image/jpeg, image/png"
        onChange={e => {
          const file = e.target?.files?.[0];
          if (file) {
            onFileAttach(file);
          }
        }}
      />

      {imageModalOpen && !!image && (
        <ImageUpload
          file={image}
          onSubmit={() => {
            sendMessage(
              chatConfig,
              selectedChat.id,
              {
                text: chatInputText,
                files: [image],
              },
              () => {
                setImage(null);
                setChatInputText('');
              },
            );
          }}
          close={() => setImageModalOpen(false)}
        />
      )}
    </>
  );
};
