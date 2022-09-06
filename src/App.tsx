import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import './App.css';
import Router from './routes/Router';
import { Header } from './templates';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header />
        <Router />
      </BrowserRouter>
    </div>
  );
}

export default App;
