import React from "react";
import '../App.css';

const List = ({ contents }) => {
    if (!contents || contents.length === 0) return <p>No hay productos en estos momentos</p>

    return (
        <div>
            <h4>Productos disponibles</h4>
            <table>
                <tr>
                    <th style={{ padding: '0 4em' }}>Id</th>
                    <th style={{ padding: '0 4em' }}>Nombre</th>
                    <th style={{ padding: '0 4em' }}>Precio</th>
                </tr>

                {contents.map(({id, name, price}) => (
                    <tr>
                        <td style={{ padding: '0 4em' }}>{id}</td>
                        <td style={{ padding: '0 4em' }}>{name}</td>
                        <td style={{ padding: '0 4em' }}>{price}</td>
                    </tr>
                ))}
            </table>
        </div>
    )
}

export default List;