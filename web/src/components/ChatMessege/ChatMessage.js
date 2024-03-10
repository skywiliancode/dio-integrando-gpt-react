import React from "react";
import './ChatMessage.css'
import Avatar from "../../assets/avatar";
// User (User / chatGPT)
// messege - aonde vai estar o prompt



const ChatMessage = ({ message }) => {
  return (
    <div className={
      `chat-messege ${message.user === 'gpt' && 'chatgpt'}`}>
      <div className="chat-messege-center">
        <div className={`avatar ${message.user === 'gpt' && 'chatgpt'}`}>
          {message.user === 'gpt' && (<Avatar></Avatar>)}
        </div>
        <div className="message">
          {message.messege}
        </div>
      </div>
    </div>
  )
}

export default ChatMessage
