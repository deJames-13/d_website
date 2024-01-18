import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const MessageBox = ({ sendMsg }) => {
  const [txtMsg, setTxtMsg] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();

    // sendMsg(txtMsg);
    setTxtMsg('');
  };
  return (
    <>
      <form action='/' method='' className='message-box'>
        <textarea
          name='messagebox'
          placeholder='ngl.link kuno :V'
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
          <Link to='/' className='btn ext'>
            Exit
          </Link>
          <input
            href='#msgBox'
            type='submit'
            name='sendmsg'
            className='btn send'
            value={'Send'}
            onClick={handleSubmit}
          />
        </div>
      </form>
    </>
  );
};

export default MessageBox;
