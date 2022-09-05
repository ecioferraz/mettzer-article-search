import React from 'react';
import { RedirectLink } from '../../components';

export default function Header() {
  return (
    <header>
      <nav>
        <RedirectLink
          className='home-link'
          name='Home'
        />
        <RedirectLink
          className='favorites-link'
          name='Favorites'
          path='favorites'
        />
      </nav>
    </header>
  );
}
