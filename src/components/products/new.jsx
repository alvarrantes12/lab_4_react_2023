import React, { useState } from 'react';
import { postFetch } from '../../commons/ApiMethods';
import { Link, useNavigate } from 'react-router-dom';

function New({ setRefresh }) {
    const [name, setName] = useState('');
    const [price, setPrice] = useState('');
    const [message, setMessage] = useState('');
    const navigate = useNavigate();

    const handleSubmit = async (event) => {
        event.preventDefault();
        try {
            postFetch('products', { name: name, price: price })
                .then(() => {
                    setName('');
                    setPrice('');
                    setMessage('Se creo el producto');
                    setRefresh(true);
                    setTimeout(() => {
                        navigate('/');
                    }, 1000);
                })
        } catch (error) {
            console.log(error)
        }
    }

    return (
        <div style={{ display: 'flex', justifyContent: 'center' }}>
            <form onSubmit={handleSubmit} style={{ border: '1px solid #ccc', padding: '20px', borderRadius: '5px', marginTop: '50px' }}>
                <h2 style={{ fontSize: '1.4em' }}>Crear Producto</h2>
                <div style={{ marginTop: '10px' }}>
                    <input
                        type='text'
                        value={name}
                        placeholder='Nombre del producto'
                        onChange={(e) => { setName(e.target.value) }}
                        style={{ fontSize: '1.2em', padding: '8px', borderRadius: '10px' }}
                    />
                </div>
                <div style={{ marginTop: '10px' }}>
                    <input
                        type='number'
                        inputMode='numeric'
                        value={price}
                        placeholder='Precio del producto'
                        onChange={(e) => { setPrice(e.target.value) }}
                        style={{ fontSize: '1.2em', padding: '8px', borderRadius: '10px' }}
                    />
                </div>
                <div style={{ marginTop: '14px' }}>{message ? <p>{message}</p> : <br />}</div>
                <button type='submit' style={{
                    backgroundColor: '#DE5B6D',
                    color: 'black',
                    padding: '10px 20px',
                    border: 'none',
                    borderRadius: '5px',
                    marginRight: '10px',
                    fontWeight: 'bold'
                }}>Crear</button>
                <Link to="/" style={{ marginLeft: '40px' }}>
                    <button style={{
                        backgroundColor: '#E9765B',
                        color: 'black',
                        padding: '10px 20px',
                        border: 'none',
                        borderRadius: '5px',
                        fontWeight: 'bold'
                    }}>Volver</button>
                </Link>
            </form>
        </div>
    );
};

export default New;