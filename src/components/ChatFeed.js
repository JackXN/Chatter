import React from 'react'
import MyMessage from './MyMessage';
import OtherMessage from './OtherMessage';
import MessageForm from './MessageForm';

function ChatFeed(props) {

const  { chats, activeChat, userName, messages} = props;

const chat = chats && chats[activeChat];

// console.log(chat,userName, messages)


const renderMessages = () => {
    const keys = Object.keys(messages);
console.log(keys);

return keys.map((key, index) => {
    const message = messages[key]
    //If there are any messages make sure to find the last message
    const lastMesageKey = index === 0 ? null : keys[index - 1 ]
    const isMyMessage = userName === message.sender.username;

    return (
        <div key={`msg_${index}`} style={{width:'100%'}}>

        </div>
    )
})


}
renderMessages()

    return (
        <div>
            ChatFeed
        </div>
    )
}

export default ChatFeed
