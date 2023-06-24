import React from 'react';
import '../components/SidebarData/List.css';

const List = ({ contents }) => {
    if(!contents || contents.length === 0) return <p>No hay contenidos disponibles</p>
    return (
        <div className="list-container"> 

            <h4>Datos disponibles</h4>
            <table>
                <tr>
                    <th>Id</th>
                    <th>Nombre</th>
                    <th>Precio</th>
                </tr>

                {contents.map(({id, name, price}) =>(
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
