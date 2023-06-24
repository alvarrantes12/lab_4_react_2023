import React, { useState} from 'react';
import { deleteFetch } from '../../commons/ApiMethods';

function Delete ({setRefresh}){
 const[idDelete, setIdDelete] = useState('')
 const [messageDelete, setMessageDelete] = useState('')
  
    const handleDelete = async (event) => {
      event.preventDefault();
      try{
        deleteFetch(`products/${idDelete}`)
        .then(() => {
          setIdDelete('');
          setMessageDelete('Eliminado correctamente');
          setRefresh(true);
        })
      } catch(error){
        console.log(error)
    }
    }

    return(
        <>
        <form onSubmit={handleDelete}>
        <div>
        <input  style ={{margin: "4px", height: "20px"}}
          type='text'
          value = {idDelete}
          placeholder='id del producto a eliminar'
          onChange={(e) => {setIdDelete(e.target.value);}} />
        </div>

        <div>{messageDelete ? <p>{messageDelete}</p> : <br />}</div>
        <button type ='submit' style ={{margin: "8px", height: "25px"}}> Eliminar </button>
      </form>
        </>
    )
   
}

export default Delete;