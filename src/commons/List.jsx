import React from "react";

const List = ({ contents }) => {

    if(!contents || contents.length == 0) return <p>No hay productos</p>

    return (
        <div>
            <h4>Estos son los productos disponibles</h4>
            <table>
                <tr>
                    <th>ID</th>
                    <th style={{padding:" 0 4em 0 4em"}}>Nombre</th>
                    <th style={{padding:" 0 4em 0 4em"}}>Precio</th>
                </tr>

                {contents.map(({ id, name, price}) => (
                    <tr>
                        <td>{id}</td>
                        <td style={{padding: " 0 4em 0 4em"}}>{name}</td>
                        <td style={{padding: " 0 4em 0 4em"}}>{price}</td>
                    </tr>
                ))}
            </table>
        </div>
    )
}

export default List;