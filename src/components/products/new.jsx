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
            postFetch('products', { product_name: product_name, product_year: product_price})
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
        <div style={{ display: 'flex', gap: '10px', justifyContent: "center", marginTop: '10px' }}>
            <form onSubmit={handleSubmit}>

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

                <div style={{ display: 'flex', gap: '10px', justifyContent: "center", marginTop: '10px' }}>
                    <button type='submit' style={{
                        borderRadius: "4px",
                        backgroundColor: "#00C851",
                        padding: '15px 15px',
                        border: "none",
                        fontWeight: "bold"
                    }}>Aceptar</button>

                    <Link to="/">
                        <button style={{
                            borderRadius: "4px",
                            backgroundColor: "#FF4D4D",
                            padding: '15px 15px',
                            border: "none",
                            fontWeight: "bold"
                        }} >Atrás</button>
                    </Link>
                </div>

            </form>
        </div>
    );
}

export default New;