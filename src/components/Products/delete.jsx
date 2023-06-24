import React, { useState } from 'react';
import { deleteFetch } from '../../commons/ApiMethods';

function Delete ({ setRefresh }) {
    const [idDelete, setIdDelete] = useState('');
    const [messageDelete, setMessageDelete] = useState('');

    const handleDelete = async (event) => {
        event.preventDefault();
        try {
          deleteFetch(`products/${idDelete}`)
            .then(() => {
              setIdDelete('');
              setMessageDelete('¡Producto Eliminado!');
              setRefresh(true);
            });
        } catch (error) {
          console.log(error);
        }
    }

    return (
        <div>
            <form onSubmit={handleDelete} style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
                <button type='submit' style={{ marginBottom: "1em", padding: "0.5em 1em", fontSize: "1em", backgroundColor: "red", border: "none", borderRadius: "4px", cursor: "pointer" }}>Eliminar Producto</button>
                <div style={{ marginBottom: "0.5em" }}>
                    <input type="text" value={idDelete} placeholder='ID (Producto)' onChange={(e) => { setIdDelete(e.target.value); }} style={{ padding: "0.5em", borderRadius: "4px", border: "1px solid lightgray" }} />
                </div>
                <div>{messageDelete ? <p>{messageDelete}</p> : <br />}</div>
            </form>
        </div>
    )
}

export default Delete;