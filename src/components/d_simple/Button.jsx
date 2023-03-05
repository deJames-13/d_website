import React from 'react';
import { Link } from 'react-router-dom';

const Button = ({ text, path }) => {
  return (
    <>
      <div>
        <Link to={path} className='btn message'>
          {text}
        </Link>
      </div>
    </>
  );
};

export default Button;
