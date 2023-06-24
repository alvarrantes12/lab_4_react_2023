import React from "react";
import './List.css';

const List = ({contents}) => {
    if(!contents || contents.length === 0)return <p>No hay contenido sobre los productos</p>

    return (
        <div>
            <h4 style={{margin: "4px", fontSize: "1em"}} >Estos son los datos disponibles</h4>
            <table className="list-table">
                <tr>
                    <th style={{padding: "0 4em 0 4em"}}>Identificador</th>
                    <th style={{padding: "0 4em 0 4em"}}>Nombre del producto</th>
                    <th style={{padding: "0 4em 0 4em"}}>Precio</th>
                </tr>

                {contents.map(({id, name, price}) => (
                    <tr>
                        <td>{id}</td>
                        <td>{name}</td>
                        <td>{price}</td>
                    </tr>
                ))}
            </table>
        </div>
    )
}
export default List;