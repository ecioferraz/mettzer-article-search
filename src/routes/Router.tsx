import React from 'react';
import { Route, Routes } from 'react-router-dom';
import { FavoriteArticles, Home } from '../pages';

export default function Router() {
  return (
    <Routes>
      <Route
        path='/'
        element={ <Home /> }
      />
      <Route
        path='/favorites'
        element={ <FavoriteArticles /> }
      />
    </Routes>
  );
}
