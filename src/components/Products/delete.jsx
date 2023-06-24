import React, {useState} from "react";
import { deleteFetch } from "../../commons/ApiMethods";
import './product.css';

function Delete ({setRefresh}){
    const[idDelete, setIdDelete] = useState('')
    const[messageDelete, setMessageDelete] = useState('')

    const handleDelete = async (event) => {
        event.preventDefault();
        try{
            deleteFetch(`products/${idDelete}`)
            .then(() => {
                setIdDelete('');
                setMessageDelete('Eliminado de manera correcta');
                setRefresh(true);
            })
        }catch(error){
            console.log(error)
        }
    }
    return (
        <div className = "delete-form">
            <form onSubmit={handleDelete}>
                <div>
                    <input 
                      type="text"
                      value = {idDelete}
                      placeholder="Número de barras"
                      onChange={(e) => {setIdDelete(e.target.value); }}
                    />
                </div>
                <div>{messageDelete ? <p>{messageDelete}</p> : <br />}</div>
                <button type='submit'>Eliminar</button>
            </form>
        </div>
    )
}

export default Delete;