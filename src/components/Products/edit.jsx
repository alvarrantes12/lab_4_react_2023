import React, { useState } from 'react';
import { putFetch } from '../../commons/ApiMethods';
import './product.css';


function Edit({setRefresh}) {
  const [idEdit, setIdEdit] = useState('')
  const [nameEdit, setNameEdit] = useState('')
  const [priceEdit, setPriceEdit] = useState('')
  const [messageEdit, setMessageEdit] = useState('')

  const handleEdit = async (event) => {
    event.preventDefault();
    try {
      putFetch(`products/${idEdit}`, { name: nameEdit, price: priceEdit })
        .then(() => {
          setIdEdit('');
          setNameEdit('');
          setPriceEdit('')
          setMessageEdit('Se a editado el nombre y el precio');
          setRefresh(true);
        })
    } catch (error) {
      console.log(error)
    }
  }

  return (
    <div className="edit-form">
      <form onSubmit={handleEdit}>
        <div>
          <input
            type='text'
            value={idEdit}
            placeholder='Número de barras'
            onChange={(e) => { setIdEdit(e.target.value); }} />
        </div>
        <div>
          <input
            type='text'
            value={nameEdit}
            placeholder='Nuevo nombre del producto'
            onChange={(e) => { setNameEdit(e.target.value); }} />
        </div>

        <div>
          <input
            type='numeric'
            value={priceEdit}
            placeholder='Nuevo precio del precio'
            onChange={(e) => { setPriceEdit(e.target.value); }} />
        </div>

        <div>{messageEdit ? <p>{messageEdit}</p> : <br />}</div>
        <button type='submit'>Editar</button>
      </form>
    </div>
  )
  
}

export default Edit;