import React from 'react';

const Info = () => {
  return (
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
            <strong>18</strong> years old
          </div>
        </div>
        <div>
          <strong>1st</strong> year college
        </div>
      </div>
    </div>
  );
};

export default Info;
