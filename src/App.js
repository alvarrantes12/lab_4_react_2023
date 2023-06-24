import React, { useState } from 'react';
import './App.css';
import {
  BrowserRouter as Router,
  Route,
  Routes
} from 'react-router-dom';
import Home from './pages/Home';
import EditProduct from './pages/EditProduct';
import DeleteProduct from './pages/DeleteProduct';
import CreateProduct from './pages/CreateProduct';

function App() {
  return (
    <div>
      <Router>
        <Routes>
          <Route path='/' exact element={<Home />} />
          <Route path='/delete' exact element={<DeleteProduct/>} />
          <Route path='/edit' exact element={<EditProduct/>} />
          <Route path='/create' exact element={<CreateProduct/>} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
