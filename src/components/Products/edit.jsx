import React, { useState } from 'react';
import { putFetch } from '../../commons/ApiMethods';

function Edit({ setRefresh }) {
  const [nameEdit, setNameEdit] = useState('');
  const [priceEdit, setPriceEdit] = useState('');
  const [idEdit, setIdEdit] = useState('');
  const [messageEdit, setMessageEdit] = useState('');

  const handleEdit = async (event) => {
    event.preventDefault();
    try {
      putFetch(`products/${idEdit}`, { name: nameEdit, price: priceEdit })
        .then(() => {
          setNameEdit('');
          setPriceEdit('');
          setIdEdit('');
          setMessageEdit('Editado exitosamente');
          setRefresh(true);
        })
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <>
      <form onSubmit={handleEdit}>

        <div style={{ marginBottom: '10px' }}>
          <input
            style={{ padding: '5px', marginRight: '10px' }}
            type="text"
            value={idEdit}
            placeholder="ID del producto"
            onChange={(e) => { setIdEdit(e.target.value); }} />
        </div>
        <div style={{ marginBottom: '10px' }}>
          <input
            style={{ padding: '5px', marginRight: '10px' }}
            type="text"
            value={nameEdit}
            placeholder="Nombre del producto"
            onChange={(e) => { setNameEdit(e.target.value); }} />
        </div>
        <div style={{ marginBottom: '10px' }}>
          <input
            style={{ padding: '5px', marginRight: '10px' }}
            type="text"
            value={priceEdit}
            placeholder="Precio del producto"
            onChange={(e) => { setPriceEdit(e.target.value); }} />
        </div>
        <div>{messageEdit ? <p>{messageEdit}</p> : <br />}</div>
        <button
          style={{ padding: '5px 10px', backgroundColor: 'blue', color: 'white', border: 'none' }}
          type="submit">
          Editar
        </button>
      </form>
    </>
  )
}

export default Edit;