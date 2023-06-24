import React, { useState } from 'react';
import { putFetch } from '../../commons/ApiMethods';
import '../../index.css'; 

function Edit({ setRefresh }) {
  const [nameEdit, setNameEdit] = useState('');
  const [priceEdit, setPriceEdit] = useState('');
  const [idEdit, setIdEdit] = useState('');
  const [messageEdit, setMessageEdit] = useState('');

  const handleEdit = async (event) => {
    event.preventDefault();
    try {
      putFetch(`products/${idEdit}`, { name: nameEdit, price: priceEdit }).then(() => {
        setNameEdit('');
        setIdEdit('');
        setPriceEdit('');
        setMessageEdit('Editado correctamente');
        setRefresh(true);
      });
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="edit-form">
      <form onSubmit={handleEdit}>
        <h2>Editar productos</h2>
        <div>
          <input
            type="text"
            value={idEdit}
            placeholder="Identificacion del Producto"
            onChange={(e) => {
              setIdEdit(e.target.value);
            }}
          />
        </div>
        <div>
          <input
            type="text"
            value={nameEdit}
            placeholder="Nombre del Producto"
            onChange={(e) => {
              setNameEdit(e.target.value);
            }}
          />
        </div>
        <div>
          <input
            type="text"
            value={priceEdit}
            placeholder="Precio del Producto"
            onChange={(e) => {
              setPriceEdit(e.target.value);
            }}
          />
        </div>
        <div>{messageEdit ? <p>{messageEdit}</p> : <br />}</div>
        <div>
          <button type="submit">Editar</button>
        </div>
      </form>
    </div>
  );
}

export default Edit;
