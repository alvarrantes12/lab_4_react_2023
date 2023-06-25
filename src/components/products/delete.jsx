import React, { useState } from 'react';
import { deleteFetch } from '../../commons/ApiMethods';
import { Link } from 'react-router-dom';

function Delete({ setRefresh }) {
    const [idDelete, setIdDelete] = useState('')
    const [messageDelete, setMessageDelete] = useState('')

    const handleDelete = async (event) => {
        event.preventDefault()
        try {
            deleteFetch(`products/${idDelete}`)
                .then(() => {
                    setIdDelete('');
                    setMessageDelete('Eliminado correctamente');
                    setRefresh(true);
                })
        } catch (error) {
            console.log('error')
        }
    }

    return (
        <div style={{ display: 'flex', gap: '10px', justifyContent: "center", marginTop: '10px' }}>
            <form onSubmit={handleDelete}>
                
                <div style={{ fontSize: '16px', fontWeight: "bold" }}>
                    <p>
                        Eliminar un producto
                    </p>
                </div>
                
                <div>
                    <input
                        type='numeric'
                        value={idDelete}
                        placeholder='ID del producto'
                        onChange={(e) => { setIdDelete(e.target.value); }}
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

                <div>{messageDelete ? <p>{messageDelete}</p> : <br />}</div>
                <div style={{ display: 'flex', gap: '10px', justifyContent: "right", marginBottom: '10px' }}>
                    <button type='submit' style={{
                        borderRadius: "4px",
                        backgroundColor: "#FF4D4D",
                        padding: '15px 15px',
                        border: "none",
                        fontWeight: "bold"
                    }}>Eliminar</button>
                </div>
            </form>
        </div>
    )
}

export default Delete;