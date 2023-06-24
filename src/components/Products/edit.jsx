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
    <div style={{ backgroundColor: '#826a4a', color: '#030000', display: 'flex',
    flexDirection: 'column', alignItems: 'center', fontSize: '20px'}}>
      
      <form onSubmit={handleEdit}>
      <h2 style={{ marginTop: '25px', marginBottom: '15px', textAlign: 'center' }}>Editar producto</h2>
      <div style={{ marginBottom: '10px', justifyContent: 'center', alignItems: 'center'}}>
          <input
            type="text"
            value={idEdit}
            placeholder="Id del producto "
            onChange={(e) => {
              setIdEdit(e.target.value);
            }}
            style={{backgroundColor: '#e6e2d3', color: '#030000' , padding: '10px', border: 'none',  width: '300px' }}
          />
        </div>
        <div style={{ marginBottom: '10px', justifyContent: 'center',alignItems: 'center' }}>
          <input
            type="text"
            value={nameEdit}
            placeholder="Nombre del producto"
            onChange={(e) => {
              setNameEdit(e.target.value);
            }}
            style={{  backgroundColor: '#e6e2d3', color: '#030000', padding: '10px', border: 'none', width: '300px' }}
          />
        </div>
        <div style={{ marginBottom: '10px', justifyContent: 'center',alignItems: 'center' }}>
          <input
            type="text"
            value={priceEdit}
            placeholder="Precio del producto"
            onChange={(e) => {
              setPriceEdit(e.target.value);
            }}
            style={{  backgroundColor: '#e6e2d3', color: '#030000', padding: '10px', border: 'none', width: '300px' }}
          />
        </div>
        <div>{messageEdit ? <p>{messageEdit}</p> : <br />}</div>
        <div style={{display: 'flex', justifyContent: 'center'}}>
        <button type='submit' style={{ backgroundColor: '#a18e75', color: '#030000', padding: '15px 20px', borderRadius: '5px', border: 'none', marginBottom:'7px' }}>Editar</button>
        </div>
      </form>
    </div>
  );
}

export default Edit;