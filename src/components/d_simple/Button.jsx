import React from 'react';

const Button = ({ text, onToggleMsg }) => {
  return (
    <>
      <div>
        <div className='btn message' onClick={onToggleMsg}>
          {text}
        </div>
      </div>
    </>
  );
};

export default Button;
