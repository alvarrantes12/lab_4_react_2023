import React, { useState } from 'react';
import { postFetch } from '../../commons/ApiMethods';

function New({ setRefresh }) {
    const [name, setName] = useState('')
    const [price, setPrice] = useState('')
    const [message, setMessage] = useState('')

    const handleSubmit = async (event) => {
        event.preventDefault();
        try {
            postFetch('products', { name: name, price: price })
                .then((Response) => {
                    setName('');
                    setPrice('');
                    setMessage('Agregado correctamente')
                    setRefresh(true)
                })

        } catch (error) {
            console.log(error)
        }

    }

    return (
        <>
            <h3>Agregar Producto</h3>
            <form onSubmit={handleSubmit}>
                <div>
                    <input
                        type='text'
                        value={name}
                        placeholder='Nombre del producto'
                        onChange={((e) => { setName(e.target.value); })} />
                </div>
                <div>
                    <input
                        type='text'
                        value={price}
                        placeholder='Precio del producto'
                        onChange={((e) => { setPrice(e.target.value); })} />
                </div>
                <div>
                    <div>{message ? <p>{message}</p> : <br></br>}</div>
                    <button className="btn-green" type='submit'>Agregar</button>
                </div>
            </form>
        </>
    )
}

export default New;