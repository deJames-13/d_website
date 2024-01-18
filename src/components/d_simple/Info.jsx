import { motion } from 'framer-motion';
import React from 'react';
import Avatar from './Avatar';
import Button from './Button';
const Info = () => {
  var myAge = new Date().getFullYear() - 2004;

  return (
    <>
      <div className='avatar-wrapper '>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{
            opacity: 1,
            scale: [1, 1.4, 1.4, 1, 1],
            rotate: [0, 0, 270, 270, 0],
            borderRadius: ['20%', '20%', '50%', '50%', '20%'],
          }}
          transition={{
            duration: 1.5,
          }}
        >
          <Avatar />
        </motion.div>
        <Button path='/message.me' text={'Message'} />
      </div>
      <div className='info-wrapper'>
        <div className='handle-wrapper'>
          <h2 className='username'>perseus</h2>
          <h3 className='handle'>@d_of_ten_fools</h3>
        </div>
        <div className='bio'>
          <i>journey before destination</i>
        </div>
        <div className='user-info'>
          <div className='my-age'>
            <div>
              <strong>{{ myAge }}</strong> years old
            </div>
          </div>
          <div>
            <strong>BSIT</strong> student
          </div>
        </div>
      </div>
    </>
  );
};

export default Info;
