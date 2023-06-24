import React, { useState } from 'react';
import { putFetch } from '../../commons/ApiMethods';

function Edit({ setRefresh }) {
    const [productNameEdit, setProductNameEdit] = useState('');
    const [priceEdit, setPriceEdit] = useState('');
    const [idEdit, setIdEdit] = useState('');
    const [messageEdit, setMessageEdit] = useState('');

    const handleEdit = async (event) => {
        event.preventDefault();
        try {
          putFetch(`products/${idEdit}`, {product_name: productNameEdit, price: priceEdit})
            .then(() => {
              setProductNameEdit('');
              setPriceEdit('')
              setIdEdit('');
              setMessageEdit('¡Producto Editado!');
              setRefresh(true);
            });
        } catch (error) {
          console.log(error);
        }
    }

    return(
        <div>
            <form onSubmit={handleEdit} style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
                <button type='submit' style={{ marginBottom: "1em", padding: "0.5em 1em", fontSize: "1em", backgroundColor: "lightblue", border: "none", borderRadius: "4px", cursor: "pointer" }}>Editar Producto</button>
                <div style={{ marginBottom: "0.5em" }}>
                    <input type="text" value={idEdit} placeholder='ID (Producto)' onChange={(e) => { setIdEdit(e.target.value); }} style={{ padding: "0.5em", borderRadius: "4px", border: "1px solid lightgray" }} />
                </div>
                <div style={{ marginBottom: "0.5em" }}>
                    <input type="text" value={productNameEdit} placeholder='Nombre nuevo (Producto)' onChange={(e) => { setProductNameEdit(e.target.value); }} style={{ padding: "0.5em", borderRadius: "4px", border: "1px solid lightgray" }} />
                </div>
                <div style={{ marginBottom: "0.5em" }}>
                    <input type="text" value={priceEdit} placeholder='Nuevo precio (Producto)' onChange={(e) => { setPriceEdit(e.target.value); }} style={{ padding: "0.5em", borderRadius: "4px", border: "1px solid lightgray" }} />
                </div>
                <div>{messageEdit ? <p>{messageEdit}</p> : <br />}</div>
            </form>
        </div>
    )
}

export default Edit;