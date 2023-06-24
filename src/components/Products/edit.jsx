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
      putFetch(`products/${idEdit}`, {name: nameEdit, price: priceEdit}).then(() => {
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
    <div style={{display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column', backgroundColor: '#643843', color: '#E7CBCB'}}>
      <form onSubmit={handleEdit}>
        <h2 style={{marginBottom: '10px', marginTop: '20px'}}>Editar productos</h2>
        <div style={{marginBottom: '10px'}}>
          <input
            type="text"
            value={idEdit}
            placeholder="ID"
            onChange={(e) => {
              setIdEdit(e.target.value);
            }}
            style={{padding: '10px', borderRadius: '5px', border: 'none', outline: 'none', backgroundColor: '#F5EFEF', color: '#643843'}}
          />
        </div>
        <div style={{marginBottom: '10px'}}>
          <input
            type="text"
            value={nameEdit}
            placeholder="Producto"
            onChange={(e) => {
              setNameEdit(e.target.value);
            }}
            style={{padding: '10px', borderRadius: '5px', border: 'none', outline: 'none', backgroundColor: '#F5EFEF', color: '#643843'}}
          />
        </div>
        <div style={{marginBottom: '10px'}}>
          <input
            type="text"
            value={priceEdit}
            placeholder="Precio"
            onChange={(e) => {
              setPriceEdit(e.target.value);
            }}
            style={{padding: '10px', borderRadius: '5px', border: 'none', outline: 'none', backgroundColor: '#F5EFEF', color: '#643843'}}
          />
        </div>
        <div>{messageEdit ? <p>{messageEdit}</p> : <br />}</div>
        <div style={{display: 'flex', justifyContent: 'center'}}>
          <button type="submit" style={{padding: '10px 20px', borderRadius: '5px', border: 'none', outline: 'none', backgroundColor: '#E7CBCB', color: '#643843', cursor: 'pointer'}}>Editar</button>
        </div>
      </form>
    </div>
  );
}

export default Edit;