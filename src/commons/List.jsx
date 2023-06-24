import React from 'react'

const List = ({ contents }) => {
	if (!contents || contents.length === 0) return <p>No hay contenidos</p>
	return (
		<div>
			<table>
				<tr>
					<th style={{ padding: "0 4em 0 1em" }}>Id</th>
					<th style={{ padding: "0 4em 0 1em" }}>Nombre</th>
					<th style={{ padding: "0 4em 0 1em" }}>Precio</th>
				</tr>
				{contents.map(({ id, name, price }) => (
					<tr>
						<td style={{ padding: "0 4em 0 1em" }}>{id}</td>
						<td style={{ padding: "0 4em 0 1em" }}>{name}</td>
						<td style={{ padding: "0 4em 0 1em" }}>{"₡ " + price}</td>
					</tr>
				))}
			</table>
			<br />
		</div>
	);
};
export default List;