import React, { useState } from "react";
import { postFetch } from '../../commons/ApiMethods';

function New({ setRefresh }) {
    const [name, setName] = useState('')
    const [price, setPrice] = useState('')
    const [message, setMessage] = useState('')

    const handleSubmit = async (event) => {
        event.preventDefault()
        try {
            postFetch('products', { name: name, price: price})
                .then((response) => {
                    setName('')
                    setPrice('')
                    setMessage('Creado correctamente')
                    setRefresh(true)
                })
        } catch (error) {
            console.log(error)
        }
    }

    return (
        <>
        <h1>Agregar</h1>
            <form onSubmit={handleSubmit}>
                <div>
                    <input
                        type="text"
                        value={name}
                        placeholder="Nombre del producto"
                        onChange={(e) => { setName(e.target.value) }} />
                </div>
                <div>
                    <input
                        type="numeric"
                        value={price}
                        placeholder="Precio del producto"
                        onChange={(e) => { setPrice(e.target.value) }} />
                </div>
                <div>{message ? <p>{message}</p> : <br></br>}</div>
                <button className="btn-green" type="submit">Agregar</button>
            </form></>
    )
}

export default New;