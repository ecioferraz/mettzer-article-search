import React from 'react';
import ITextCard from './ITextCard';

export default function TextCard({
  as: Tag = 'span',
  className,
  text,
}: ITextCard) {
  return <Tag className={className}>{text}</Tag>;
}
