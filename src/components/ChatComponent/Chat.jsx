// components/Chat.js
import React, { useState } from 'react';
import Message from './Message';
import './chatComp.css';

const Chat = () => {
  const [messages, setMessages] = useState([
    { text: 'Hello!', sender: 'user', timestamp: '12:01 PM' },
    { text: 'Hi there!', sender: 'bot', timestamp: '12:02 PM' },
    // Add more messages as needed
  ]);

  const [newMessage, setNewMessage] = useState('');

  const sendMessage = () => {
    if (newMessage.trim() === '') {
      return; // Don't send empty messages
    }

    const userMessage = { text: newMessage, sender: 'user', timestamp: new Date().toLocaleTimeString() };
    setMessages([...messages, userMessage]);

    // Simulate bot response (you can replace this with actual API call)
    setTimeout(() => {
      const botResponse = { text: 'I am a bot.', sender: 'bot', timestamp: new Date().toLocaleTimeString() };
      setMessages([...messages, botResponse]);
    }, 1000);

    // Clear the input field after sending the message
    setNewMessage('');
  };

  return (
    <div className="chat-container">
      <div className="chat-messages">
        {messages.map((message, index) => (
          <Message key={index} {...message} />
        ))}
      </div>
      <div className="chat-input">
        <input
          type="text"
          placeholder="Type your message..."
          value={newMessage}
          onChange={(e) => setNewMessage(e.target.value)}
          onKeyPress={(e) => e.key === 'Enter' && sendMessage()}
        />
        <button className=' bg-blue-500 text-white mt-3 py-3 px-5 rounded-md' onClick={sendMessage}>Send</button>
      </div>
    </div>
  );
};

export default Chat;
