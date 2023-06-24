import React from 'react';

const List = ({ contents }) => {

    if (!contents || contents.length === 0) return <p>No hay productos agregados</p>

    return (
        <div>
            <h2>Productos disponibles</h2>
            <table>
                <tr>
                    <th style={{ padding: "0 4em 0 4em" }}>Id</th>
                    <th style={{ padding: "0 4em 0 4em" }}>Producto</th>
                    <th style={{ padding: "0 4em 0 4em" }}>Precio</th>
                </tr>

                {contents.map(({ id, name, price }) => (
                    <tr>
                        <td style={{ padding: "0 4em 0 4em" }}>{id}</td>
                        <td style={{ padding: "0 4em 0 4em" }}>{name}</td>
                        <td style={{ padding: "0 4em 0 4em" }}>{price}</td>
                    </tr>
                ))}
            </table>
        </div>
    )
}

export default List;