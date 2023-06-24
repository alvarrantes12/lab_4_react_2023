import React, { useState } from "react";
import { deleteFetch } from "../../commons/ApiMethods";
import "./delete.css";

function Delete({ setRefresh }) {
  const [idDelete, setIdDelete] = useState('');
  const [message, setMessage] = useState('');

  const handleDelete = async (event) => {
    event.preventDefault();
    try {
      deleteFetch(`products/${idDelete}`)
        .then(() => {
          setIdDelete('');
          setMessage('Eliminado correctamente');
          setRefresh(true);
        });
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="delete-container">
      <h3>Eliminar un producto</h3>
      <form onSubmit={handleDelete}>
        <div>
          <input
            type="text"
            value={idDelete}
            placeholder="ID del producto"
            onChange={(e) => { setIdDelete(e.target.value); }} />
        </div>
        <div>{message ? <p>{message}</p> : <br />}</div>
        <button className="btn-red" type="submit">Eliminar</button>
      </form>
    </div>
  );
}

export default Delete;
