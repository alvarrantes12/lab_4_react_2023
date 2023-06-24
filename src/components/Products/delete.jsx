import React, { useState } from 'react';
import { deleteFetch } from '../../commons/ApiMethods';

function Delete({ setRefresh }) {
    const [idDelete, setIdDelete] = useState('')
    const [messageDelete, setMessageDelete] = useState('')

    const handleDelete = async (event) => {
        event.preventDefault();
        try {
            deleteFetch(`products/${idDelete}`)
                .then(() => {
                    setIdDelete('');
                    setMessageDelete('Eliminado correctamente');
                    setRefresh(true);
                })
        } catch (error) {
            console.log(error)
        }
    }

    return (
        <>
            <h3>Eliminar Producto</h3>
            <form onSubmit={handleDelete}>
                <div>
                    <input
                        type='text'
                        value={idDelete}
                        placeholder='ID del producto'
                        onChange={(e) => { setIdDelete(e.target.value); }} />
                </div>
                <div>
                    <div>{messageDelete ? <p>{messageDelete}</p> : <br></br>}</div>
                    <button className="btn-red" type='submit'>Eliminar</button>
                </div>
            </form></>
    )
}

export default Delete;