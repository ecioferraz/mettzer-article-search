import { MouseEventHandler } from 'react';

interface IButton {
  className: string;
  disabled?: boolean;
  handleClick?: MouseEventHandler<HTMLButtonElement>;
  name: string;
  type: 'button' | 'submit';
}

export default IButton;
