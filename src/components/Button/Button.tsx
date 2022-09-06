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
  const handleButtonName = () => {
    switch (name) {
    case 'fav':
      return <AiFillStar color='#FFF38C' />;
    case 'unfav':
      return <AiOutlineStar />;
    default:
      return name;
    }
  };

  return (
    <button
      className={className}
      disabled={disabled}
      name={name}
      onClick={handleClick}
      type={type}
    >
      {handleButtonName()}
    </button>
  );
}
