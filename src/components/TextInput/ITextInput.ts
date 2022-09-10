import { ChangeEvent } from 'react';

interface ITextInput {
  className: string;
  handleChange: (event: ChangeEvent<HTMLInputElement>) => void;
  minLength?: string;
  name: string;
  placeholder: string;
  value: string;
}

export default ITextInput;
