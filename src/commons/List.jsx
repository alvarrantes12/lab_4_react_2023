import React from "react";
import "../../src/list.css";

const List = ({ contents }) => {
    if (!contents || contents.length === 0) return <p>No cuenta con contenidos actualmente</p>

    return (
        <div>
            <h4 className="title">Estos son todos los datos disponibles de sus productos</h4>
            <table className= "table">
                <tr>
                    <th>ID</th>
                    <th>Nombre</th>
                    <th>Precio</th>
                </tr>

                {contents.map(({id,name, price}) => (
                    <tr key= {id}>
                        <th>{id}</th>
                        <th>{name}</th>
                        <th>{price}</th>
                    </tr>
                ))}
            </table>
        </div>
    )
}
export default List;