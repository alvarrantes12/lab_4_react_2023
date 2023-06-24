import React from 'react';
import './App.css';
import Navbar from './components/SidebarData/Navbar';
import {
  BrowserRouter as Router,
  Route,
  Routes
} from 'react-router-dom';
import Home from './pages/Home';
import Index from './components/Products';
import Delete from './pages/delete';
import Edit from './pages/edit';
import New from './pages/new';

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Routes>
          <Route path='/' exact element={<Home />} />
          <Route path='/delete' exact element={<Delete />} />
          <Route path='/new' exact element={<New />} />
          <Route path='/index' exact element={<Index />} />
          <Route path='/edit' exact element={<Edit />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;