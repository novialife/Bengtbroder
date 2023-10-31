import React from 'react';
import './App.css';
import Header from './components/ExploreView/Header';
import Explore from './components/ExploreView/Explore';
import { Route, Routes } from 'react-router-dom';
import Details from './components/DetailsView/Details';
import About from './components/AboutView/About';

function App() {
  return (
    <div className='App'>
      <Header />
      <Routes>
        <Route path='/' element={<Explore />} />
        <Route path='/details' element={<Details />} />
        <Route path='/about' element={<About />} />
      </Routes>
    </div>
  );
}

export default App;
