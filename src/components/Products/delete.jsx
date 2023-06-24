import React, { useState } from "react";
import { deleteFetch } from "../../commons/ApiMethods";

function Delete({ setRefresh }) {
  const [idDelete, setIdDelete] = useState('');
  const [message, setMessage] = useState('');

  const handleDelete = async (event) => {
    event.preventDefault();
    try {
      deleteFetch(`products/${idDelete}`)
        .then(() => {
          setIdDelete('');
          setMessage('Se eliminó correctamente');
          setRefresh(true);
        });
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div style={{ backgroundColor: '#5c4e3b', color: '#030000', display: 'flex',
    flexDirection: 'column', alignItems: 'center', fontSize: '20px'}}>
      
      <h2 style={{ marginTop: '25px', marginBottom: '10px', textAlign: 'center' }}>Eliminar producto</h2>
      <form onSubmit={handleDelete}>
        <div style={{marginBottom: '4px'}}>
          <input
            type="text"
            value={idDelete}
            placeholder="Número ID del producto"
            onChange={(e) => {setIdDelete(e.target.value);}}
            style={{backgroundColor: '#e6e2d3', color: '#030000' , padding: '10px', border: 'none',  width: '300px' }}
          />
        </div>
        <div>{message ? <p>{message}</p> : <br />}</div>
        <div style={{display: 'flex', justifyContent: 'center'}}>
        <button type='submit' style={{ backgroundColor: '#a18e75', color: '#030000', padding: '15px 20px', border: 'none', marginBottom:'7px',marginTop:'2px' }}>Eliminar</button>
        </div>
      </form>
    </div>
  );
}

export default Delete;