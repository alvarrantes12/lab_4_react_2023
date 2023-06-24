import React, { useState } from 'react';
import { deleteFetch } from '../../commons/ApiMethods';
import { Link, useNavigate } from 'react-router-dom';

function Delete({ setRefresh }) {
    const [idDelete, setIdDelete] = useState('');
    const [messageDelete, setMessageDelete] = useState('');
    const navigate = useNavigate();

    const handleDelete = async (event) => {
        event.preventDefault()
        try {
            deleteFetch(`products/${idDelete}`).then(() => {
                setIdDelete('');
                setMessageDelete('Eliminado correctamente');
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
            <form onSubmit={handleDelete} style={{ border: '1px solid #ccc', padding: '20px', borderRadius: '5px', marginTop: '50px' }}>
                <h2 style={{ fontSize: '1.4em' }}>Borrar producto</h2>
                <div style={{ marginTop: '10px' }}>
                    <input
                        type='number'
                        inputMode='numeric'
                        value={idDelete}
                        placeholder='Numero de id'
                        style={{ fontSize: '1.1em', padding: '5px', borderRadius: '3px' }}
                        onChange={(e) => { setIdDelete(e.target.value) }} />
                </div>
                <div>{messageDelete ? <p>{messageDelete}</p> : <br />}</div>
                <button type='submit' style={{
                    backgroundColor: '#4CAF50',
                    color: 'white',
                    padding: '10px 20px',
                    border: 'none',
                    borderRadius: '5px',
                    marginRight: '10px',
                    fontWeight: 'bold'
                }}>Eliminar</button>
                <Link to="/" style={{ marginLeft: '30px' }}>
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

export default Delete;