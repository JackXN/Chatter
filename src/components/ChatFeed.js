import React from "react";
import MyMessage from "./MyMessage";
import OtherMessage from "./OtherMessage";
import MessageForm from "./MessageForm";

function ChatFeed(props) {
  const { chats, activeChat, userName, messages } = props;

  const chat = chats && chats[activeChat];

  // console.log(chat,userName, messages)

  const renderMessages = () => {
    const keys = Object.keys(messages);
    console.log(keys);

    return keys.map((key, index) => {
      const message = messages[key];
      //If there are any messages make sure to find the last message
      const lastMesageKey = index === 0 ? null : keys[index - 1];
      const isMyMessage = userName === message.sender.username;

      return (
        <div key={`msg_${index}`} style={{ width: "100%" }}>
          <div className="message-block">
            {isMyMessage ? <MyMessage message={message}/> : <OtherMessage message={message} lastMessage={messages}  />}
          </div>
          <div
            className="read-receipts"
            style={{
              marginRight: isMyMessage ? "18px" : "0px",
              marginLeft: isMyMessage ? "0px" : "68px",
            }}
          >
            read-receipts
          </div>
        </div>
      );
    });
  };





if(!chat) return 'Loading';


  return (
    <div className="chat-feed">
      <div className="chat-container">
        <div className="chat-title"></div>
      {chat ?.title}
      </div>
      <div className='chat-subtitle'>
          {chat.people.map((person) => `${person.person.username}`)}
      </div>
      {renderMessages()}
      <div style={{height: '100px'}}/>
      <div className='message-form-container'>
          <MessageForm {...props} chatId={activeChat}/>
      </div>
    </div>
  );
}

export default ChatFeed;
