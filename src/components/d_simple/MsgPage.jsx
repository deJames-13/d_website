/* eslint-disable no-unused-vars */
import React from 'react';
import icon_expand from './img/expand_icon.png';
import Msg from './Msg';
import './MsgPage.css';

const MsgPage = ({ data }) => {
  return (
    <>
      <div className='page-wrapper'>
        <div className='header'>
          <h1>Mesages</h1>
        </div>
        <div className='contents'>
          {data.map((msg, idx) => {
            return <Msg text={msg.msg} date={msg.day} key={idx} />;
          })}
        </div>
      </div>
    </>
  );
};

export default MsgPage;
