import React, { useState } from 'react';
import { postFetch } from '../../commons/ApiMethods';
import { Link } from 'react-router-dom';

function New({ setRefresh }) {
    const [product_name, setProduct_name] = useState('');
    const [product_price, setProuct_price] = useState('');
    const [message, setMessage] = useState('');

    const handleSubmit = async (event) => {
        event.preventDefault()
        try {
            postFetch('products', { product_name: product_name, product_price: product_price})
                .then(() => {
                    setProduct_name('');
                    setProuct_price('');
                    setMessage('Producto creado correctamente');
                    setRefresh(true);
                })
        } catch (error) {
            console.error(error)
        }
    }

    return (
        <div style={{ display: 'flex', gap: '10px', justifyContent: "center", marginTop: '30px' }}>
            <form onSubmit={handleSubmit}>

                <div style={{ fontSize: '16px', fontWeight: 'bold' }}>
                    <p>
                        Crear un nuevo producto
                    </p>
                </div>
                
                <div>
                    <input
                        type='text'
                        value={product_name}
                        placeholder='Nombre del producto'
                        onChange={(e) => { setProduct_name(e.target.value); }}
                        style={{
                            padding: '0.5em',
                            fontSize: '16px',
                            border: '1px solid lightgray',
                            borderRadius: '4px',
                            outline: 'none',
                            boxShadow: 'none',
                            width: '100%',
                            boxSizing: 'border-box',
                            marginTop: '10px'
                        }}
                    />
                </div>

                <div>
                    <input
                        type='text'
                        value={product_price}
                        placeholder='Precio'
                        onChange={(e) => { setProuct_price(e.target.value); }}
                        style={{
                            padding: '0.5em',
                            fontSize: '16px',
                            border: '1px solid lightgray',
                            borderRadius: '4px',
                            outline: 'none',
                            boxShadow: 'none',
                            width: '100%',
                            boxSizing: 'border-box',
                            marginTop: '10px'
                        }}
                    />
                </div>

                <div>{message ? <p>{message}</p> : <br />}</div>

                <div style={{ display: 'flex', gap: '10px', justifyContent: "right", marginBottom: '10px' }}>
                    <button type='submit' style={{
                        borderRadius: "4px",
                        backgroundColor: "#6BFF33",
                        padding: '15px 15px',
                        border: "none",
                        fontWeight: "bold"
                    }}>Crear</button>

                </div>

            </form>
        </div>
    );
}

export default New;