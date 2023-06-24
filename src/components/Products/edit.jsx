import React, { useState } from 'react';
import { putFetch } from '../../commons/ApiMethods';

function Edit({ setRefresh }) {
    const [nameEdit, setNameEdit] = useState('')
    const [idEdit, setIdEdit] = useState('')
    const [messageEdit, setMessageEdit] = useState('')

    const handleEdit = async (event) => {
        event.preventDefault();
        try {
            putFetch(`products/${idEdit}`, { name: nameEdit })
                .then(() => {
                    setNameEdit('');
                    setIdEdit('');
                    setMessageEdit('Editado correctamente');
                    setRefresh(true);
                })
        } catch (error) {
            console.log(error)
        }
    }

    return (
        <>
            <h3>Editar Producto</h3>
            <form onSubmit={handleEdit}>
                <div>
                    <input
                        type='text'
                        value={idEdit}
                        placeholder='ID del producto'
                        onChange={(e) => { setIdEdit(e.target.value); }} />
                </div>
                <div>
                    <input
                        type='text'
                        value={nameEdit}
                        placeholder='Nuevo nombre del producto'
                        onChange={(e) => { setNameEdit(e.target.value); }} />
                </div>
                <div>
                    <div>{messageEdit ? <p>{messageEdit}</p> : <br></br>}</div>
                    <button className="btn-green" type='submit'>Editar</button>
                </div>
            </form>
        </>
    )
}

export default Edit;