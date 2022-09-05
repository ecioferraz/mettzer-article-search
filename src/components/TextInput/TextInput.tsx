import React from 'react';
import ITextInput from './ITextInput';

export default function TextInput({
  className,
  handleChange,
  minLength,
  name,
  placeholder,
  value,
}: ITextInput) {
  return (
    <label htmlFor={name}>
      <input
        className={className}
        id={name}
        min={minLength}
        name={name}
        onChange={handleChange}
        placeholder={placeholder}
        type='text'
        value={value}
      />
    </label>
  );
}
