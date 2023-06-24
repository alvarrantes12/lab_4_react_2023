import React, { useState } from "react";
import { deleteFetch } from "../../commons/ApiMethods";

function Delete({ setRefresh }) {
    const [idDelete, setIdDelete] = useState('')
    const [messageDelete, setMessageDelete] = useState('')

    const handleDelete = async (event) => {
        event.preventDefault()
        try {
            deleteFetch(`products/${idDelete}`)
                .then(() => {
                    setIdDelete('')
                    setMessageDelete('Eliminado correctamente')
                    setRefresh(true)
                });
        } catch (error) {
            console.log(error)
        }
        
    }


    return (
        <>
            <h1>Eliminar</h1>
            <form onSubmit={handleDelete}>
                <div>
                    <input
                        type="text"
                        value={idDelete}
                        placeholder="ID del producto"
                        onChange={(e) => { setIdDelete(e.target.value) }} />
                </div>
                <div>{messageDelete ? <p>{messageDelete}</p> : <br />}</div>
                <button className="btn-delete" type="submit">Eliminar</button>
            </form></>
    )
}


export default Delete;