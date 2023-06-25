import React, { useState } from 'react';
import { putFetch } from '../../commons/ApiMethods';
import { Link } from 'react-router-dom';

function Edit({ setRefresh }) {
    const [editProduct_name, setEditProduct_name] = useState('')
    const [editProduct_price, setEditProduct_price] = useState('')
    const [idEdit, setIdEdit] = useState('')
    const [messageEdit, setMessageEdit] = useState('')

    const handleEdit = async (event) => {
        event.preventDefault()
        try {
            putFetch(`products/${idEdit}`, { product_name: editProduct_name, product_price: editProduct_price })
                .then(() => {
                    setEditProduct_name('');
                    setEditProduct_price('');
                    setIdEdit('');
                    setMessageEdit('Editado correctamente');
                    setRefresh(true);
                });
        } catch (error) {
            console.log(error)
        }
    }

    return (
        <div style={{ display: 'flex', gap: '10px', justifyContent: "center", marginTop: '10px' }}>
            <form onSubmit={handleEdit}>
                
                <div style={{ fontSize: '16px', fontWeight: "bold" }}>
                    <p>
                        Editar un producto
                    </p>
                </div>
                
                <div>
                    <input
                        type='numeric'
                        value={idEdit}
                        placeholder='ID del producto'
                        onChange={(e) => { setIdEdit(e.target.value); }}
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
                        value={editProduct_name}
                        placeholder='Nombre del producto'
                        onChange={(e) => { setEditProduct_name(e.target.value); }}
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
                        type='numeric'
                        value={editProduct_price}
                        placeholder='Precio'
                        onChange={(e) => { setEditProduct_price(e.target.value); }}
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

                <div>{messageEdit ? <p>{messageEdit}</p> : <br />}</div>
                <div style={{ display: 'flex', gap: '10px', justifyContent: "right", marginBottom: '10px' }}>
                    <button type='submit' style={{
                        borderRadius: "4px",
                        backgroundColor: "#33A8FF",
                        padding: '15px 15px',
                        border: "none",
                        fontWeight: "bold"
                    }}>Editar</button>

                </div>
            </form>
        </div>
    )

}
export default Edit;