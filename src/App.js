import React from 'react';
import Navbar from './components/SidebarData/Navbar';
import {
  BrowserRouter as Router,
  Route,
  Routes
} from 'react-router-dom';
import Home from './pages/Home';
import Create from './pages/Create';
import Edit from './pages/Edit';

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Routes>
          <Route path='/' exact element={<Home />} />
          <Route path='/create' exact element={<Create />} />
          <Route path='/edit/:id' exact element={<Edit />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;