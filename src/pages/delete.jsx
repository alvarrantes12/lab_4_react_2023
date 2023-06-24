import React, { useState } from "react";
import { deleteFetch } from "../commons/ApiMethods";
import "./delete.css";
import 'bootstrap/dist/css/bootstrap.css';
function Delete({ setRefresh }) {
    const [idDelete, setIdDelete] = useState('');
    const [message, setMessage] = useState('');
    const handleDelete = async (event) => {
        event.preventDefault();
        try {
            deleteFetch(`api/products/${idDelete}`)
                .then(() => {
                    setIdDelete('');
                    setMessage('Eliminado correctamente');
                });
        } catch (error) {
            console.log(error);
        }
    };

    return (
        <div className="delete-container">
            <h3>Eliminar un Producto</h3>
            <form onSubmit={handleDelete}>
                <div className="form-group">
                    <input
                        className="form-control"
                        type="text"
                        value={idDelete}
                        placeholder="ID del Producto"
                        onChange={(e) => { setIdDelete(e.target.value); }} />
                </div>
                <div>{message ? <p>{message}</p> : <br />}</div>
                <button className="btn" type="submit">Eliminar</button>
            </form>
        </div>
    );
}

export default Delete;