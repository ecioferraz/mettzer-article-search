import React from 'react';
import ITextCard from './ITextCard';

export default function TextCard({
  as: Tag = 'span',
  text,
  className,
}: ITextCard) {
  return <Tag className={className}>{text}</Tag>;
}
