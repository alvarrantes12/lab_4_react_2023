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
          setMessage('Producto creados correctamente');
          setRefresh(true);
        });
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div style={{display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column', backgroundColor: '#643843', color: '#E7CBCB' }}>
      <form onSubmit={handleSubmit}>
        <h2 style={{marginBottom: '10px', marginTop: '20px'}}>Crear producto</h2>
        <div style={{marginBottom: '10px', justifyContent: 'center'}}>
          <input
            type='text'
            value={name}
            placeholder='Producto'
            onChange={(e) => {setName(e.target.value)}}
            style={{padding: '10px', borderRadius: '5px', border: 'none', outline: 'none', backgroundColor: '#F5EFEF', color: '#643843'}}
          />
        </div>
        <div style={{marginBottom: '10px', justifyContent: 'center'}}>
          <input
            type='numeric'
            value={price}
            placeholder='Precio'
            onChange={(e) => {setPrice(e.target.value)}}
            style={{padding: '10px', borderRadius: '5px', border: 'none', outline: 'none', backgroundColor: '#F5EFEF', color: '#643843'}}
          />
        </div>
        <div>{message ? <p>{message}</p> : <br />}</div>
        <div style={{display: 'flex', justifyContent: 'center'}}>
          <button type='submit' style={{padding: '10px 20px', borderRadius: '5px', border: 'none', outline: 'none', backgroundColor: '#E7CBCB', color: '#643843', cursor: 'pointer'}}>Crear</button>
        </div>
      </form>
    </div>
  );
}

export default New;
