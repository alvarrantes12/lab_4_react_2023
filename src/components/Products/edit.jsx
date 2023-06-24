import React, { useState } from 'react';
import { putFetch } from '../../commons/ApiMethods';

function Edit({ setRefresh }) {

	const [nameEdit, setNameEdit] = useState('');
	const [priceEdit, setPriceEdit] = useState('');
	const [idEdit, setIdEdit] = useState('');
	const [messageEdit, setMessageEdit] = useState('');

	const handleEdit = async (event) => {
		event.preventDefault();
		try {
			putFetch(`products/${idEdit}`, { name: nameEdit, price: priceEdit })
				.then(() => {
					setNameEdit('');
					setPriceEdit('');
					setIdEdit('');
					setMessageEdit('Editado correctamente');
					setRefresh(true);
				});
		}
		catch (error) {
			console.log(error)
		}
	}

	return (
		<div className='Background2'>

			<form onSubmit={handleEdit}>
				<div style={{ margin: "4px" }}>
					<h4 style={{ marginBottom: '0px', marginTop: '0px' }}>Editar Producto</h4>
					<input
						type="text"
						value={idEdit}
						placeholder="Id del producto"
						onChange={(e) => { setIdEdit(e.target.value) }} />
				</div>
				<div style={{ margin: "4px" }}>
					<input
						type="text"
						value={nameEdit}
						placeholder="Nuevo nombre del producto"
						onChange={(e) => { setNameEdit(e.target.value) }} />
				</div>
				<div style={{ margin: "4px" }}>
					<input
						type="number"
						value={priceEdit}
						placeholder="Nuevo precio del producto"
						onChange={(e) => { setPriceEdit(e.target.value) }} />
				</div>
				<button type="submit" style={{ margin: "4px" }}>Editar</button>
				<div style={{ margin: "4px" }}>{messageEdit ? <p>{messageEdit}</p> : <br />}</div>
			</form>
		</div>
	)
}
export default Edit;