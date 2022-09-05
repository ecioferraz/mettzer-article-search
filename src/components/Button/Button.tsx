import React from 'react';
import { AiFillStar, AiOutlineStar } from 'react-icons/ai';
import IButton from './IButton';

export default function Button({
  className,
  disabled,
  handleClick,
  name,
  type,
}: IButton) {
  const handleButtonName = name === 'fav'
    ? <AiFillStar color='#FFF38C' /> : <AiOutlineStar />;

  return (
    <button
      className={className}
      disabled={disabled}
      name={name}
      onClick={handleClick}
      type={type}
    >
      {handleButtonName}
    </button>
  );
}
