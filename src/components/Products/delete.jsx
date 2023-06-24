import React, { useState } from 'react';
import { deleteFetch } from '../../commons/ApiMethods';

function Delete({ setRefresh }) {

	const [idDelete, setIdDelete] = useState('');
	const [messageDelete, setMessageDelete] = useState('');

	const handleDelete = async (event) => {
		event.preventDefault();
		try {
			deleteFetch(`products/${idDelete}`)
				.then(() => {
					setIdDelete('')
					setMessageDelete('Eliminado Correctamente')
					setRefresh(true);
				})
		}
		catch (error) {
			console.log(error)
		}
	}
	return (
		<div className="Background1">
			<form onSubmit={handleDelete}>
				<div style={{ margin: "4px" }}>
					<h4 style={{ marginBottom: '0px', marginTop: '0px' }}>Eliminar Producto</h4>
					<input
						type="text"
						value={idDelete}
						placeholder="Id del producto"
						onChange={(e) => { setIdDelete(e.target.value) }} />
				</div>
				<button type="submit" style={{ margin: "4px" }}>Eliminar</button>
				<div style={{ margin: "4px" }}>{messageDelete ? <p>{messageDelete}</p> : <br />}</div>
			</form>
		</div>
	)
}
export default Delete;