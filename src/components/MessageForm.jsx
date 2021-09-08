import React, {useState} from 'react'
import {sendMessage, isTyping} from 'react-chat-engine';
import {AiOutlineSend as Send, AiOutlinePicture as Picture} from 'react-icons/ai';



function MessageForm(props) {
const [value, setValue] = useState('');
const {chatId, creds} = props;

const handleSubmit = (e) => {
e.preventDefault();
const text = value.trim();
if(text.length > 0) sendMessage(creds,chatId,{ text });
setValue('');
}

const handleChange = (e) => {
    setValue(e.target.value);
    isTyping(props, chatId);
}


const handleUpload = (e) => {


}


    return (
        <form className='message-form' onSubmit={handleSubmit}>
            <input
            className='message-input'
            placeholder='Send a message...'
            value={value}
            onChange={handleChange}
            onSubmit={handleSubmit} 
            />
            <label htmlFor='upload-button'>
                <span className='image-button'>
                <Picture className='picture-icon'/>
                </span>
            </label>
            <input
            type='file'
            multiple={false}
            id='upload-button'
            style={{display:'none'}}
            onChange={handleUpload}
            />
           
        </form>
    )
}

export default MessageForm
