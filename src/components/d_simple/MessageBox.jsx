import React, { useState } from 'react';

const MessageBox = ({ sendMsg, onToggleMsg }) => {
  const [txtMsg, setTxtMsg] = useState('');
  const handleSubmit = (e) => {
    e.preventDefault();
    sendMsg(txtMsg);
    setTxtMsg('');
  };
  return (
    <form action='/' method='' className='message-box'>
      <textarea
        name='messagebox'
        placeholder='di nagana ung send button🥲'
        id='msgBox'
        autoComplete='off'
        spellCheck='off'
        cols={30}
        rows={5}
        value={txtMsg}
        maxLength='1000'
        onChange={(e) => {
          setTxtMsg(e.target.value);
        }}
      ></textarea>
      <div className='options'>
        <span className='btn ext' onClick={onToggleMsg}>
          Exit
        </span>
        <input
          type='submit'
          name='sendmsg'
          className='btn send'
          value={'Send'}
          onClick={handleSubmit}
        />
      </div>
    </form>
  );
};

export default MessageBox;
