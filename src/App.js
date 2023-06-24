import React from 'react';
import './App.css';
import {
  BrowserRouter as Router,
  Route,
  Routes
} from 'react-router-dom';

import Home from './pages/Home';
import CreateProduct from './pages/CreateProduct';
import EditProduct from './pages/EditProduct';
import DeleteProduct from './pages/DeleteProduct';

function App() {
  return (
    <div>
      <Router>
        <Routes>
          <Route path='/' exact element={<Home />} />
          <Route path='/create' exact element={<CreateProduct />} />
          <Route path='/edit' exact element={<EditProduct />} />
          <Route path='/delete' exact element={<DeleteProduct />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
