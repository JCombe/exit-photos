import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import Dashboard from './Pages/Dashboard/Dashboard';
import HorizNavBar from './Pages/NavBars/HorizNavBar/HorizNavBar';
import VertNavBar from './Pages/NavBars/VertNavBar/VertNavBar';
import Workspace from './Pages/Workspace/Workspace';

function App() {
  return (
    <BrowserRouter>
      <div className='flex'>
        <VertNavBar />
        <div className='flex flex-col p-6 w-full'>
          <HorizNavBar />

          <Routes>
            <Route path='/' element={<Dashboard />} />
            <Route path='/workspace' element={<Workspace />} />
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
