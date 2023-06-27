import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Index from '../components/Products/index';

function Home() {
  const [refresh, setRefresh] = useState(true);

  return (
    <div className='' style={{ textAlign: 'center' }}>
      <h2 style={{ margin: '10px' }}>Inicio</h2>
      <Index refresh={refresh} setRefresh={setRefresh} />

      <div style={{ margin: '10px' }}>
        <Link to="/new">
          <button style={buttonStyle}>Crear</button>
        </Link>
        <Link to="/edit">
          <button style={buttonStyle}>Editar</button>
        </Link>
        <Link to="/delete">
          <button style={buttonStyle}>Eliminar</button>
        </Link>
      </div>

    </div>
  );
}

const buttonStyle = {
  margin: '5px',
  padding: '8px 16px',
  backgroundColor: '#4CAF50',
  color: 'white',
  border: 'none',
  borderRadius: '4px',
  cursor: 'pointer',
};

export default Home;