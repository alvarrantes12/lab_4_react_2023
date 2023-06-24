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
                    setMessage('Producto creado correctamente');
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
                        style={{ fontSize: '1.1em', padding: '5px', borderRadius: '3px' }}
                        onChange={(e) => { setName(e.target.value) }}
                    />
                </div>
                <div style={{ marginTop: '10px' }}>
                    <input
                        type='number'
                        inputMode='numeric'
                        value={price}
                        placeholder='Precio del producto'
                        style={{ fontSize: '1.1em', padding: '5px', borderRadius: '3px' }}
                        onChange={(e) => { setPrice(e.target.value) }}
                    />
                </div>
                <div style={{ marginTop: '14px' }}>{message ? <p>{message}</p> : <br />}</div>
                <button type='submit' style={{
                    backgroundColor: '#4CAF50',
                    color: 'white',
                    padding: '10px 20px',
                    border: 'none',
                    borderRadius: '5px',
                    marginRight: '10px',
                    fontWeight: 'bold'
                }}>Crear</button>
                <Link to="/" style={{ marginLeft: '40px' }}>
                    <button style={{
                        backgroundColor: '#f44336',
                        color: 'white',
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