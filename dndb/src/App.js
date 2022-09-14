import './App.css';
import Home from './pages/home';
import ShowItems from './pages/items';
import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

export default function App() {
  return (
    <div className="App">
      <ShowItems/>
    </div>
  );
}

