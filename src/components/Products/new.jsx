import React, { useState } from "react";
import { postFetch } from '../../commons/ApiMethods';
import "./new.css";

function New({ setRefresh }) {
  const [name, setName] = useState('');
  const [price, setPrice] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      postFetch('products', { name: name, price: price })
        .then((response) => {
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
    <div className="new-container">
      <h3>Crear un producto</h3>
      <form onSubmit={handleSubmit}>
        <div>
          <input
            type="text"
            value={name}
            placeholder="Nombre del producto"
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        <div>
          <input
            type="number"
            value={price}
            placeholder="Precio del producto"
            onChange={(e) => setPrice(e.target.value)}
          />
        </div>
        <div>{message ? <p>{message}</p> : <br />}</div>
        <button className="btn-green" type="submit">Crear producto</button>
      </form>
    </div>
  );
}

export default New;
