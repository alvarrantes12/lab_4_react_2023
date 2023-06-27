import React, { useState } from 'react';
import { postFetch } from '../../commons/ApiMethods';

function New({ setRefresh }) {
  const [name, setName] = useState('');
  const [price, setPrice] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      postFetch('products', { name: name, price: price})
        .then((response) => {
          setName('');
          setPrice('');
          setMessage('Creado exitosamente');
          setRefresh(true);
        })

    }catch (error){
      console.log(error)
    }
  }

  return (
    <>
      <form onSubmit={handleSubmit}>
        <div style={{ marginBottom: '10px' }}>
          <input
            style={{ padding: '5px', marginRight: '10px' }}
            type="text"
            value={name}
            placeholder="Nombre del producto"
            onChange={(e) => { setName(e.target.value); }} />
        </div>

        <div style={{ marginBottom: '10px' }}>
          <input
            style={{ padding: '5px', marginRight: '10px' }}
            type="text"
            value={price}
            placeholder="Precio del producto"
            onChange={(e) => { setPrice(e.target.value); }} />
        </div>
        <div>{message ? <p>{message}</p> : <br />}</div>
        <button
          style={{ padding: '5px 10px', backgroundColor: 'blue', color: 'white', border: 'none' }}
          type="submit">
          Crear
        </button>
      </form>
    </>
  )
}

export default New;