import React, { useState } from 'react';
import { deleteFetch } from '../../commons/ApiMethods';

function Delete ({setRefresh}) {
    const [idDelete, setIdDelete] = useState('')
    const [messageDelete, setMessageDelete] = useState('')

    const handleEdit = async (event) => {
        event.preventDefault();
        try {
            deleteFetch(`products/${idDelete}`)
            .then(() => {
                setIdDelete('');
                setMessageDelete('Eliminado correctamente')
                setRefresh(true);
            })
        } catch (error) {
            console.log(error);
        }
    }

    return (
        <>
            <form onSubmit={handleEdit}>
                <div>
                    <input
                    type='text'
                    value={idDelete}
                    placeholder='ID del Producto'
                    onChange={(e) => { setIdDelete(e.target.value); }} />
                </div>
                <div>{messageDelete ? <p>{messageDelete}</p> : <br />}</div>
                <button type='submit'>Eliminar</button>
            </form>
        </>
    )
}

export default Delete;