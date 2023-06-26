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
                setMessageDelete('Se ha eliminado el producto');
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
                    backgroundColor: '#FFA0B6',
                    color: 'black',
                    padding: '12px 24px',
                    border: '2px solid black',
                    borderRadius: '10px',
                    fontWeight: 'bold',
                    marginRight: '10px',
            
                }}>Eliminar</button>
                <Link to="/" style={{ marginLeft: '30px' }}>
                    <button style={{
                       backgroundColor: '#00906F',
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

export default Delete;