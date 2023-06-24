import React, { useState } from 'react';
import { putFetch } from '../../commons/ApiMethods';

function Edit({setRefresh}) {
    const [nameEdit, setNameEdit] = useState('')
    const [idEdit, setIdEdit] = useState('')
    const [priceEdit, setPriceEdit] = useState('')
    const [messageEdit, setMessageEdit] = useState('')

    const handleEdit = async (event) => {
        event.preventDefault();
        try {
            putFetch(`products/${idEdit}`, { name: nameEdit, price: priceEdit})
            .then(() => {
                setNameEdit('');
                setPriceEdit('');
                setIdEdit('');
                setMessageEdit('Editado correctamente')
                setRefresh(true);
            })
        } catch (error) {
            console.log(error);
        }
    }

    return (
        <>
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
                    placeholder='Nombre'
                    onChange={(e) => { setNameEdit(e.target.value); }} />
                </div>
                <div>
                    <input
                    type='text'
                    value={priceEdit}
                    placeholder='Precio'
                    onChange={(e) => { setPriceEdit(e.target.value); }} />
                </div>
                <div>{messageEdit ? <p>{messageEdit}</p> : <br />}</div>
                <button type='submit'>Editar</button>
            </form>
        </>
    )
}

export default Edit;