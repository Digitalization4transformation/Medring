// components/Chat.js
import React, { useState } from 'react';
import addBtn from '../../assets/add-30.png'
import message from '../../assets/message.svg'
import send from '../../assets/send.svg'
import Chatprofile from '../../assets/medring.png'
import userIcon from '../../assets/bg-presentation3.jpg'
import './chatComp.css';

const Chat = () => {
  
  return (
    <body>
     <div className='chatContainer'>
      <div className="sideBar">
        <div className="upperSide">
            <img src="" alt="" className="logo" />
              {/* <div className=' logo'>Digi-Doc</div> */}
              <div className='brand'>Digi Dr.</div>
              <button type="button" className='midBtn'><img src={addBtn} alt="" className="addBtn" /> New chat</button>
            <div className="upperSideBottom">

              <button className="query">
                <img src={message} alt="" className="qImg" />
                   What is HIV/AIDS?
              </button>
              <button className="query">
                <img src={message} alt="" className="qImg" />
                  How do I prevent HIV/AIDS?
              </button>
              <button className="query">
                <img src={message} alt="" className="qImg" />
                   How do against HIV/AIDS?
              </button>

            </div>
        </div>
      </div>

        <div className="main">
          <div className="chatbox">

            <div className="chat">
             <img className='chatImg' src={userIcon} alt='chat' style={{width:"30px", height:"40px"}}/><p className="txt">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. 
              At expedita perspiciatis explicabo voluptate delectus eligendi 
              id aut facilis, perferendis ad. Nam dignissimos ullam autem fuga 
              sint in, laboriosam, ea optio iure porro, tempora quidem? Vel, 
              minus commodi. Perspiciatis amet ad totam, quae architecto neque 
              suscipit omnis officiis quibusdam saepe? Provident ut eaque animi 
              quibusdam esse consectetur et a iste omnis, voluptas maxime, eos 
              perferendis quod qui libero est dolore soluta! Illum recusandae, 
              alias, debitis eaque obcaecati antium nobis id.
             </p>
            </div>
            <div className="chat bot">
             <img className='chatImg' src={Chatprofile} alt='chat' style={{width:"30px", height:"30px"}} /><p className="txt">
             Lorem ipsum dolor sit amet consectetur adipisicing elit. 
              At expedita perspiciatis explicabo voluptate delectus eligendi 
              id aut facilis, perferendis ad. Nam dignissimos ullam autem fuga 
              sint in, laboriosam, ea optio iure porro, tempora quidem? Vel, 
              minus commodi. Perspiciatis amet ad totam, quae architecto neque 
              suscipit omnis officiis quibusdam saepe? Provident ut eaque animi 
              quibusdam esse consectetur et a iste omnis, voluptas maxime, eos 
              perferendis quod qui libero est dolore soluta! Illum recusandae, 
              alias, debitis eaque obcaecati et porro veniam magni ducimus at illo
               expedita ullam reiciendis assumenda 
             </p>
            </div>

          </div>

          <div className="chatFooter">
            <div className="inp">
                <input type="text" placeholder='Ask a question' className='placeholder-custom-color'/>
                <button className="send"><img src={send} alt="sendbtn" style={{width:"40px", height:"30px"}} /></button>
            </div>
          </div>
        </div>
      </div>
    </body>
  );
};

export default Chat;
