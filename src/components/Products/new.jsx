import React, { useState } from 'react';
import { postFetch } from '../../commons/ApiMethods';

function New({ setRefresh }) {

	const [name, setName] = useState('');
	const [price, setPrice] = useState('');
	const [message, setMessage] = useState('');

	const handleSubmit = async (event) => {
		event.preventDefault();
		try {
			postFetch('products', { name: name, price: price })
				.then((response) => {
					setName('');
					setPrice('');
					setMessage('Creado correctamente');
					setRefresh(true);
				})

		} catch (error) {
			console.log(error);
		}
	}

	return (
		<>
			<div className="Background1">
				<form onSubmit={handleSubmit}>
					<div style={{ margin: "4px" }}>
						<h4 style={{ marginBottom: '0px', marginTop: '0px' }}>Crear Producto</h4>
						<input
							type="text"
							value={name}
							placeholder="Nombre del producto"
							onChange={(e) => { setName(e.target.value) }} />
					</div>
					<div style={{ margin: "4px" }}>
						<input
							type="number"
							value={price}
							placeholder="Precio"
							onChange={(e) => { setPrice(e.target.value) }} />
					</div>
					<button type="submit" style={{ margin: "4px" }}>Crear</button>
					<div style={{ margin: "4px" }}>{message ? <p>{message}</p> : <br />}</div>
				</form>
			</div>
		</>
	)
}

export default New;