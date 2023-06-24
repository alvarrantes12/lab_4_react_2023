import React, { useState } from 'react';
import { postFetch } from '../../commons/ApiMethods';

function New({ setRefresh }) {
  const [name, setName] = useState('');
  const [price, setPrice] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      postFetch('products', { name: name, price: price })
        .then(() => {
          setName('');
          setPrice('');
          setMessage('Creado correctamente');
          setRefresh(true);
        });
    } catch (error) {
      console.log(error);
    }
  };


  return (
    <div style={{
      backgroundColor: '#c4b7a6', color: '#030000', display: 'flex',
      flexDirection: 'column', alignItems: 'center', fontSize: '20px'
    }}>
      <form onSubmit={handleSubmit}>
        <h2 style={{ marginTop: '25px', marginBottom: '15px', textAlign: 'center' }}>Crear un producto</h2>

        <div style={{ marginBottom: '10px', justifyContent: 'center', alignItems: 'center'}}>
          <input
            type='text'
            value={name}
            placeholder='Nombre del producto'
            onChange={(e) => { setName(e.target.value) }}
            style={{backgroundColor: '#e6e2d3', color: '#030000' , padding: '10px', border: 'none',  width: '300px' }}
          />
        </div>

        <div style={{ marginBottom: '10px', justifyContent: 'center',alignItems: 'center' }}>
          <input
            type='numeric'
            value={price}
            placeholder='Precio del producto'
            onChange={(e) => { setPrice(e.target.value) }}
            style={{ backgroundColor: '#e6e2d3', color: '#030000', padding: '10px', border: 'none', width: '300px'  }}
          />
        </div>
        <div>{message ? <p>{message}</p> : <br />}</div>
        <div style={{ display: 'flex', justifyContent: 'center' }}>
          <button type='submit' style={{ backgroundColor: '#a18e75', color: '#030000', padding: '15px 20px', borderRadius: '5px', border: 'none', marginBottom:'7px' }}>Crear</button>
        </div>
      </form>
    </div>
  );
}

export default New;