import React, { useState } from 'react';
import './App.css';
import Navbar from './components/SidebarData/Navbar';
import {
  BrowserRouter as Router,
  Route,
  Routes
} from 'react-router-dom';
import Home from './pages/Home';
import New from './pages/New';
import Edit from './pages/Edit';
import Delete from './pages/Delete';


function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Routes>
          <Route path='/' exact element={<Home />} />
          <Route path='/new' exact element={<New/>} />
          <Route path='/edit' exact element={<Edit/>} />
          <Route path='/delete' exact element={<Delete/>} />
        </Routes>
      </Router>
    </>
  );
}

export default App;