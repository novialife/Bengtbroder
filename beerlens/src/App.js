import React from 'react';
import './App.css';
import Header from './components/Header';
import Explore from './components/Explore';
import { Route, Routes } from 'react-router-dom';
import Details from './components/DetailsView/Details';

function App() {
  return (
    <div className='App'>
      <Header />
      <Routes>
        <Route path='/' element={<Explore />} />
        <Route path='/details' element={<Details />} />
      </Routes>
    </div>
  );
}

export default App;
