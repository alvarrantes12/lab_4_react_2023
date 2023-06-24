import React, { useState } from 'react';
import { putFetch } from '../../commons/ApiMethods';
import { Link, useNavigate } from 'react-router-dom';

function Edit({setRefresh}) {
    const [nameEdit, setNameEdit] = useState('');
    const [idEdit, setIdEdit] = useState('');
    const [priceEdit, setPriceEdit] = useState('');
    const [messageEdit, setMessageEdit] = useState('');
    const navigate = useNavigate();

    const handleEdit = async (event) => {
        event.preventDefault()
        try {
            putFetch(`products/${idEdit}`, { name: nameEdit, price:  priceEdit}).then(() => {
                setNameEdit('');
                setIdEdit('');
                setPriceEdit('')
                setMessageEdit('Editado correctamente');
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
            <form onSubmit={handleEdit} style={{ border: '1px solid #ccc', padding: '20px', borderRadius: '5px', marginTop: '50px' }}>
                <h2 style={{ fontSize: '1.4em' }}>Editar producto</h2>            
                <div style={{ marginTop: '10px' }}>
                    <input
                        type='number'
                        inputMode='numeric'
                        value={idEdit}
                        placeholder='Numero de id'
                        style={{ fontSize: '1.1em', padding: '5px', borderRadius: '3px' }}
                        onChange={(e) => { setIdEdit(e.target.value) }} />
                </div>
                <div style={{ marginTop: '10px' }}>
                    <input
                        type='text'
                        value={nameEdit}
                        placeholder='Nuevo nombre del producto'
                        style={{ fontSize: '1.1em', padding: '5px', borderRadius: '3px' }}
                        onChange={(e) => { setNameEdit(e.target.value) }} />
                </div>
                <div style={{ marginTop: '10px' }}>
                    <input
                        type='number'
                        inputMode='numeric'
                        value={priceEdit}
                        placeholder='Nuevo precio del producto'
                        style={{ fontSize: '1.1em', padding: '5px', borderRadius: '3px' }}
                        onChange={(e) => { setPriceEdit(e.target.value) }} />
                </div>
                <div>{messageEdit ? <p>{messageEdit}</p> : <br />}</div>
                <button type='submit' style={{
                    backgroundColor: '#4CAF50',
                    color: 'white',
                    padding: '10px 20px',
                    border: 'none',
                    borderRadius: '5px',
                    marginRight: '10px',
                    fontWeight: 'bold'
                }}>Editar</button>
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
    )
}

export default Edit;