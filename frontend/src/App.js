import React from 'react';
import { useState } from 'react';
import Home from './Home';
import Details from './Details';
import { BrowserRouter,Form,Route,Routes } from 'react-router-dom';

function App() {

  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path='/Home' element={<Home/>}/>
          <Route path='/calculate' element={<Details/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
