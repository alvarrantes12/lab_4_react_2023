import React from 'react';

const List = ({ contents }) => {
    if (!contents || contents.length === 0) return <p>No hay contenido</p>
    return (
        <div style={{ marginTop: "2em" }}>
        <h4>Productos Disponibles</h4>
        <table style={{ borderCollapse: "collapse", width: "40%" }}>
            <thead>
            <tr>
                <th style={{ padding: "0 1em", borderBottom: "1px solid black", alignItems: "center" }}>ID</th>
                <th style={{ padding: "0 1em", borderBottom: "1px solid black", alignItems: "center"}}>Producto</th>
                <th style={{ padding: "0 1em", borderBottom: "1px solid black", alignItems: "center"}}>Precio</th>
            </tr>
            </thead>
            <tbody>
            {contents.map(({ product_id, product_name, price }) => (
                <tr key={product_name}>
                <td style={{ padding: "0 1em", borderBottom: "1px solid black", alignItems: "center"}}>{product_id}</td>
                <td style={{ padding: "0 1em", borderBottom: "1px solid black", alignItems: "center"}}>{product_name}</td>
                <td style={{ padding: "0 1em", borderBottom: "1px solid black", alignItems: "center"}}>{price}</td>
                </tr>
            ))}
            </tbody>
        </table>
        </div>
    )
}

export default List;