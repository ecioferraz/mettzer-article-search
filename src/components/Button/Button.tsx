import React from 'react';
import {
  AiFillStar,
  AiOutlineArrowLeft,
  AiOutlineArrowRight,
  AiOutlineSearch,
  AiOutlineStar,
} from 'react-icons/ai';
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
    case 'search':
      return <AiOutlineSearch />;
    case 'previous':
      return <AiOutlineArrowLeft />;
    case 'next':
      return <AiOutlineArrowRight />;
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
