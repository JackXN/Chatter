import React from 'react'

function MyMessage({message}) {
// is the message an image or text
if(message?.attachments?.lenth > 0) {
    return (
        <img
        src={message.attachments[0].file}
        alt='message-attachment'
        className='message-image'
        style={{float:'right'}}
        />
    )
}

    return (
        <div>
            My Message
        </div>
    )
}

export default MyMessage
