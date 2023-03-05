import React from 'react';

const Msg = ({ text, date }) => {
  return (
    <>
      <div className='message-wrapper'>
        <div className='msg-fit'>
          <span className='date'>{date}</span>
          <p className='msg'>{text}</p>
        </div>

        {/* <div className='expand-icon'>
          <img
            src='https://img.icons8.com/ios-filled/50/F0FFFF/resize-diagonal.png'
            alt='>'
          />
        </div> */}
      </div>
    </>
  );
};

export default Msg;
