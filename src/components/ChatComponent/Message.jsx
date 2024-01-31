// components/Message.js
import React from 'react';
import './chatComp.css'


const Message = ({ text, sender, timestamp }) => (
  <div className={`message ${sender === 'user' ? 'user' : 'bot'}`}>
    <div className="message-content">{text}</div>
    <div className="message-timestamp">{timestamp}</div>
  </div>
);

export default Message;
