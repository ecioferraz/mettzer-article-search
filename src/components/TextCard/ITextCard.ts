import { ElementType, HTMLAttributes } from 'react';

interface ITextCard extends HTMLAttributes<HTMLOrSVGElement> {
  as?: ElementType;
  className: string;
  text: string;
}

export default ITextCard;
