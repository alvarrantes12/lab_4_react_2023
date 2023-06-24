import React, { useState } from 'react';
import { postFetch } from '../../commons/ApiMethods';

function New ({ setRefresh }) {
    const [productName, setProductName] = useState('');
    const [price, setPrice] = useState('');
    const [messages, setMessage] = useState('');

    const handleSubmit = async (event) => {
        event.preventDefault();
        try {
          postFetch('products', { product_name: productName, price: price })
          .then((response) => {
            setProductName('');
            setPrice('');
            setMessage('¡Producto creado!');
            setRefresh(true);
          })
    
        } catch (err) {
          console.log(err);
        }
    }

    return(
        <div>
            <form onSubmit={handleSubmit} style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
                <button type='submit' style={{ marginBottom: "1em", padding: "0.5em 1em", fontSize: "1em", backgroundColor: "lightgreen", border: "none", borderRadius: "4px", cursor: "pointer" }}>Crear Producto</button>
                <div style={{ marginBottom: "0.5em" }}>
                    <input type="text" value={productName} placeholder='Nombre (Producto)' onChange={(e) => { setProductName(e.target.value); }} style={{ padding: "0.5em", borderRadius: "4px", border: "1px solid lightgray" }} />
                </div>
                <div style={{ marginBottom: "0.5em" }}>
                    <input type="text" value={price} placeholder='Precio (Producto)' onChange={(e) => { setPrice(e.target.value); }} style={{ padding: "0.5em", borderRadius: "4px", border: "1px solid lightgray" }} />
                </div>
                <div>{messages ? <p>{messages}</p> : <br />}</div>
            </form>
        </div>
    )
}

export default New;