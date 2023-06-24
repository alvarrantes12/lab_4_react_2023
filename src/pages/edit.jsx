import React, { useState } from "react";
import { putFetch } from '../commons/ApiMethods';
import "./edit.css";
import 'bootstrap/dist/css/bootstrap.css';

function Edit({ setRefresh }) {
    const [nameEdit, setNameEdit] = useState('')
    const [idEdit, setIdEdit] = useState('')
    const [priceEdit, setPriceEdit] = useState('')
    const [message, setMessage] = useState('')
    const handleEdit = async (event) => {
        event.preventDefault()
        try {
            putFetch(`api/products/${idEdit}`, { name: nameEdit, price: priceEdit })
                .then(() => {
                    setIdEdit('')
                    setNameEdit('')
                    setPriceEdit('')
                    setMessage('Editado correctamente')
                })
        } catch (error) {
            console.log(error)
        }
    }

    return (
        <div className="edit-container">
            <h3>Editar Producto</h3>
            <form onSubmit={handleEdit}>
                <div className="form-group">
                    <input
                        className="form-control"
                        type="text"
                        value={idEdit}
                        placeholder="ID del producto"
                        onChange={(e) => { setIdEdit(e.target.value) }} />
                </div>
                <div className="form-group">
                    <input
                        className="form-control"
                        type="text"
                        value={nameEdit}
                        placeholder="Nuevo nombre del producto"
                        onChange={(e) => { setNameEdit(e.target.value) }} />
                </div>
                <div className="form-group">
                    <input
                        className="form-control"
                        type="text"
                        value={priceEdit}
                        placeholder="Nuevo precio del producto"
                        onChange={(e) => { setPriceEdit(e.target.value) }} />
                </div>
                <button className="btn" type="submit">Guardar cambios</button>
                <div>{message ? <p>{message}</p> : <br />}</div>
            </form>
        </div>
    )
}

export default Edit;