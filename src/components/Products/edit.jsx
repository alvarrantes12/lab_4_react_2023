import React, { useState} from 'react';
import { putFetch } from '../../commons/ApiMethods';

function Edit({setRefresh}){
 const [nameEdit, setNameEdit] = useState('')
 const [idEdit, setIdEdit] = useState('')
 const [priceEdit, setPriceEdit] = useState('')
 const [messageEdit, setMessageEdit] = useState('')

 const handleEdit = async (event) => {
    event.preventDefault();
    try{
      putFetch(`products/${idEdit}`, { name: nameEdit, price: priceEdit })
      .then(() => {
        setNameEdit('');
        setIdEdit('');
        setPriceEdit('');
        setMessageEdit('Editado correctamente');
        setRefresh(true);
      })
    } catch(error){
      console.log(error)
  }
  }

 return (
   <>
    <form onSubmit={handleEdit}>
        <div>
        <input style ={{margin: "4px", height: "20px"}}
          type='text'
          value = {idEdit}
          placeholder='número de id'
          onChange={(e) => {setIdEdit(e.target.value);}} />
        </div>

        <div>
        <input style ={{margin: "4px", height: "20px"}}
          type='text'
          value = {nameEdit}
          placeholder='nombre del producto'
          onChange={(e) => {setNameEdit(e.target.value);}} />
        </div>

        <div>
           <input style ={{margin: "4px", height: "20px"}}
             type='number'
             value = {priceEdit}
             placeholder='precio producto'
             onChange={(e) => {setPriceEdit(parseInt(e.target.value));}} />
           </div>

        <div>{messageEdit ? <p>{messageEdit}</p> : <br />}</div>
        <button type ='submit' style ={{margin: "8px", height: "25px"}}> Editar </button>
      </form>
   </>
 )
}

export default Edit;