import React, { useState} from 'react';
import {  putFetch } from '../../commons/ApiMethods';

function Edit ({setRefresh}) {
    const [nameEdit, setNameEdit] = useState('');
    const [priceEdit, setPriceEdit] = useState('');
    const [idEdit, setIdEdit] = useState('');
    const [messageEdit, setmessageEdit] = useState('');

    const handleEdit = async (event) => {
        event.preventDefault();
        try {
        putFetch(`products/${idEdit}`, {name: nameEdit, price: priceEdit})
            .then(() => {
            setNameEdit('');
            setIdEdit('');
            setPriceEdit('');
            setmessageEdit('Editado correctamente');
            setRefresh(true);
            });
        } catch (error) {
        console.log(error);
        }
    }
    return (
        <form onSubmit={handleEdit}>
        <div>
        <input 
          type='text'
          className='TextInput'
          value={idEdit}
          placeholder='Número id'
          onChange={(e) => {setIdEdit(e.target.value);}} />
        </div>

        <div>
        <input 
          type='text'
          className='TextInput'
          value={nameEdit}
          placeholder='Nuevo nombre de producto'
          onChange={(e) => {setNameEdit(e.target.value);}} />
        </div>
        
        <div>
        <input 
          type='text'
          className='TextInput'
          value={priceEdit}
          placeholder='Nuevo precio del producto'
          onChange={(e) => {setPriceEdit(e.target.value);}} />
        </div>

        {messageEdit ? 
            (<> <p >{messageEdit}</p><button type='submit' className='button'>Editar</button></>) : 
            (<button type='submit' className='button'>Editar</button>)}

      </form>
    );
}

export default Edit;