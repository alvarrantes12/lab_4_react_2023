import React, { useState } from 'react';
import { deleteFetch } from '../../commons/ApiMethods';
import '../../index.css';

function Delete({ setRefresh }) {
  const [idDelete, setIdDelete] = useState('');
  const [messageDelete, setMessageDelete] = useState('');

  const handleDelete = async (event) => {
    try {
      deleteFetch(`products/${idDelete}`)
        .then(() => {
          setIdDelete('');
          setMessageDelete('Eliminado correctamente');
          setRefresh(true);
        });
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="new-form">
      <form onSubmit={handleDelete}>
        <h2>Eliminar productos</h2>
        <div>
          <input
            type="text"
            value={idDelete}
            placeholder="Número ID"
            onChange={(e) => { setIdDelete(e.target.value); }}
          />
        </div>
        <div>{messageDelete ? <p>{messageDelete}</p> : <br />}</div>
        <button type="submit">Eliminar</button>
      </form>
    </div>
  );
}

export default Delete;