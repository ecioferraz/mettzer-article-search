import React from 'react';
import { Link } from 'react-router-dom';
import IRedirectLink from './IRedirectLink';

export default function RedirectLink({
  className,
  name,
  path = '',
}: IRedirectLink) {
  return (
    <Link to={`/${path}`} className={className}>
      {name}
    </Link>
  );
}
