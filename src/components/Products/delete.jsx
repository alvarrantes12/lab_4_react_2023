import React, { useState } from 'react';
import { deleteFetch } from '../../commons/ApiMethods';

function Delete({ setRefresh }) {
  const [idDelete, setIdDelete] = useState('');
  const [messageDelete, setMessageDelete] = useState('');

  const handleDelete = async (event) => {
    event.preventDefault();
    try {
      deleteFetch(`products/${idDelete}`)
        .then(() => {
          setIdDelete('');
          setMessageDelete('Borrado exitosamente');
          setRefresh(true);
        })
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <>
      <form onSubmit={handleDelete}>

        <div style={{ marginBottom: '10px' }}>
          <input
            style={{ padding: '5px', marginRight: '10px' }}
            type="text"
            value={idDelete}
            placeholder="ID del producto"
            onChange={(e) => { setIdDelete(e.target.value); }} />
        </div>
        <div>{messageDelete ? <p>{messageDelete}</p> : <br />}</div>
        <button
          style={{ padding: '5px 10px', backgroundColor: 'blue', color: 'white', border: 'none' }}
          type="submit">
          Eliminar
        </button>
      </form>
    </>
  )
}

export default Delete;