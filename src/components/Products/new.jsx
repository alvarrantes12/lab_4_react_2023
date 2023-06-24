import React, { useState } from 'react';
import { postFetch } from '../../commons/ApiMethods';

function New({ setRefresh }) {
    const [name, setName] = useState('')
    const [price, setPrice] = useState('')
    const [message, setMessage] = useState('')

    const handleSubmit = async (event) => {
        event.preventDefault();
        try {
            postFetch('products', {name: name, price: price})
            .then((response) => {
                setName('');
                setPrice('');
                setMessage('Creado correctamente')
                setRefresh(true);
            })
        } catch (error) {
            console.log(error);
        }
    }

    return (
        <>
            <form onSubmit={handleSubmit}>
                <div>
                    <input
                    type='text'
                    value={name}
                    placeholder='Nombre'
                    onChange={(e) => { setName(e.target.value); }} />
                </div>
                <div>
                    <input
                    type='text'
                    value={price}
                    placeholder='Precio'
                    onChange={(e) => { setPrice(e.target.value); }} />
                </div>
                <div>{message ? <p>{message}</p> : <br />}</div>
                <button type='submit'>Crear</button>
            </form>
        </>
    )
}

export default New;