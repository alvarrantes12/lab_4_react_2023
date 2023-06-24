import React, { useState } from "react";
import { postFetch } from '../commons/ApiMethods';
import "./new.css";
import 'bootstrap/dist/css/bootstrap.css';
function New({ setRefresh }) {
    const [name, setName] = useState('')
    const [price, setPrice] = useState('')
    const [message, setMessage] = useState('')
    const handleSubmit = async (event) => {
        event.preventDefault()
        try {
            postFetch('api/products', { name: name, price: price})
                .then((response) => {
                    setName('')
                    setPrice('')
                    setMessage('Creado con exito!')
                })
        } catch (error) {
            console.log(error)
        }
    }

    return (
        <div className="new-container">
            <h3>Crear un producto</h3>
            <form onSubmit={handleSubmit}>
                <div className="form-group">
                    <input
                        className="form-control"
                        type="text"
                        value={name}
                        placeholder="Nombre del producto"
                        onChange={(e) => { setName(e.target.value) }} />
                </div>
                <div className="form-group">
                    <input
                        className="form-control"
                        type="numeric"
                        value={price}
                        placeholder="Precio del producto"
                        onChange={(e) => { setPrice(e.target.value) }} />
                </div>
                <button className="btn" type="submit">Crear producto</button>
                <div>{message ? <p>{message}</p> : <br />}</div>
            </form>
        </div>
    )
}

export default New;