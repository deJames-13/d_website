// eslint-disable-next-line no-unused-vars
import React, { useEffect, useState } from 'react';
import {} from 'react-router-dom';
import Button from './Button';
import Info from './Info';
import './Main.css';
import MessageBox from './MessageBox';
import profile from './profile_img_400x400.jpg';
const API_URL = 'http://127.0.0.1:8000/msg/message/';

const Main = () => {
  const [showMsgBox, setShowMsgBox] = useState(false);

  const postMsg = async (d) => {
    await fetch(API_URL, {
      method: 'POST',
      headers: {
        'Content-type': 'application/json',
      },
      body: JSON.stringify(d),
    }).catch((err) => {
      console.log(err.message);
    });
  };

  const onSend = async (txt) => {
    if (txt.trim() === '') {
      return;
    }
    const date = `${new Date().toLocaleDateString()} ${new Date().toLocaleTimeString()}`;
    const newData = { msg: txt, day: date };
    await postMsg(newData);
  };

  return (
    <>
      <div className='App'>
        <div className='main'>
          <div className='container dark'>
            <div className='avatar-wrapper'>
              <div className='avatar'>
                <img
                  src={profile}
                  alt='perseus_avatar'
                  width='75'
                  height='75'
                />
              </div>
              {!showMsgBox && (
                <Button
                  text={'Message'}
                  onToggleMsg={() => {
                    setShowMsgBox(!showMsgBox);
                  }}
                />
              )}
            </div>
            {showMsgBox ? (
              <MessageBox
                sendMsg={onSend}
                onToggleMsg={() => {
                  setShowMsgBox(!showMsgBox);
                }}
              />
            ) : (
              <Info />
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default Main;
