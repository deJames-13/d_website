import React from 'react';
import profile from './img/profile_img_400x400.jpg';

const Avatar = () => {
  return (
    <>
      <div className='avatar'>
        <img src={profile} alt='perseus_avatar' width='75' height='75' />
      </div>
    </>
  );
};

export default Avatar;
