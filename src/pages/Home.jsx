import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Index from '../components/products/index';

function Home() {
  const [refresh, setRefresh] = useState(true);
  return (
    <div>
      <Index refresh={refresh} setRefresh={setRefresh} />

      <div style={{ display: 'grid', justifyContent: 'center', gap: '20px', marginTop: '30px' }}>
  <Link to="/create" style={{ textDecoration: 'none' }}>
    <button
      style={{
        backgroundColor: '#9A9CEA',
        color: '#000000',
        padding: '15px 30px',
        border: 'none',
        borderRadius: '10px',
        fontWeight: 'bold'
      }}
    >
      Nuevo
    </button>
  </Link>
  <Link to="/edit" style={{ textDecoration: 'none' }}>
    <button
      style={{
        backgroundColor: '#A2B9EE',
        color: '#000000',
        padding: '15px 30px',
        border: 'none',
        borderRadius: '10px',
        fontWeight: 'bold'
      }}
    >
      Editar
    </button>
  </Link>
  <Link to="/delete" style={{ textDecoration: 'none' }}>
    <button
      style={{
        backgroundColor: '#A2DCEE',
        color: '#000000',
        padding: '15px 30px',
        border: 'none',
        borderRadius: '10px',
        fontWeight: 'bold'
      }}
    >
      Eliminar
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Home;