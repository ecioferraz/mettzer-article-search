import React from 'react';
import IExternalLink from './IExternalLink';

export default function ExternalLink({ className, url, i }: IExternalLink) {
  return (
    <a
      className={className}
      href={url}
      target='_blank'
      rel="noreferrer noopener"
    >
      {`Link${i + 1}`}
    </a>
  );
}
