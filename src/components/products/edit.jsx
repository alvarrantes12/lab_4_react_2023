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
                setMessageEdit('Se ha editado el producto');
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
                        onChange={(e) => { setIdEdit(e.target.value) }}
                        style={{ fontSize: '1.2em', padding: '8px', borderRadius: '10px' }} />

                </div>
                <div style={{ marginTop: '10px' }}>
                    <input
                        type='text'
                        value={nameEdit}
                        placeholder='Nombre Modificado del Producto'
                        onChange={(e) => { setNameEdit(e.target.value) }}                        
                        style={{ fontSize: '1.2em', padding: '8px', borderRadius: '10px' }} />

                </div>
                <div style={{ marginTop: '10px' }}>
                    <input
                        type='number'
                        inputMode='numeric'
                        value={priceEdit}
                        placeholder='Precio Modificado del Producto'
                        onChange={(e) => { setPriceEdit(e.target.value) }}  
                        style={{ fontSize: '1.2em', padding: '8px', borderRadius: '10px' }} /> 

                </div>
                <div>{messageEdit ? <p>{messageEdit}</p> : <br />}</div>
                <button type='submit' style={{
                    backgroundColor: '#72C9BF',
                    color: 'black',
                    padding: '12px 24px',
                    border: '2px solid black',
                    borderRadius: '10px',
                    marginRight: '10px',
                    fontWeight: 'bold'
                }}>Editar</button>
                <Link to="/" style={{ marginLeft: '40px' }}>
                    <button style={{
                       backgroundColor: '#AED688',
                       color: 'black',
                       padding: '12px 24px',
                       border: '2px solid black',
                       borderRadius: '10px',
                       fontWeight: 'bold'
                      }}>Volver</button>
                </Link>
            </form>
        </div>
    )
}

export default Edit;