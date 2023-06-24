import React, { useState } from "react";
import { putFetch } from '../../commons/ApiMethods';

function Edit({ setRefresh }) {
    const [priceEdit, setPriceEdit] = useState('')
    const [idEdit, setIdEdit] = useState('')
    const [messageEdit, setMessageEdit] = useState('')

    const handleEdit = async (event) => {
        event.preventDefault()
        try {
            putFetch(`products/${idEdit}`, { price: priceEdit })
                .then(() => {
                    setPriceEdit('')
                    setIdEdit('')
                    setMessageEdit('Editado correctamente')
                    setRefresh(true)
                })
        } catch (error) {
            console.log(error)
        }
    }

    return (
        <div>
            <h1>Editar</h1>
            <form onSubmit={handleEdit}>
                <div>
                    <input
                        type="text"
                        value={idEdit}
                        placeholder="ID"
                        onChange={(e) => { setIdEdit(e.target.value) }} />
                </div>
                <div>
                    <input
                        type="numeric"
                        value={priceEdit}
                        placeholder="Precio nuevo"
                        onChange={(e) => { setPriceEdit(e.target.value) }} />
                </div>
                <div>{messageEdit ? <p>{messageEdit}</p> : <br />}</div>
                <button className="btn-edit" type="submit">Editar</button>
            </form>
        </div>
    )
}

export default Edit;