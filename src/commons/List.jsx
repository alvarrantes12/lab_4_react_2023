import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link } from 'react-router-dom';
import Delete from '../components/Products/delete';
import '../components/Products/products.css';

const List = ({ contents, setRefresh }) => {
    if (!contents || contents.length === 0) return <p>No hay contenidos</p>
    
    return (
        <div>
            <h4>Estos son los datos disponibles</h4>
            <Link to={`/create`} className="btn btn-danger">Crear</Link>
            <table className="table table-striped-columns">
                <thead>
                    <tr>
                    <th style={{padding: "0 4em 0 4em"}}>Id</th>
                    <th style={{padding: "0 4em 0 4em"}}>Nombre</th>
                    <th style={{padding: "0 4em 0 4em"}}>Precio</th>
                    </tr>
                </thead>
                <tbody>
                    {contents.map(({id, name, price}) => (
                    <tr>
                        <td>{id}</td>
                        <td>{name}</td>
                        <td>{price}</td>
                        <td>
                            <div className="btn-group">
                                <Link to={`/edit/${id}`} className="btn btn-primary btn-sm create-button mx-2">Editar</Link>
                                <Delete setRefresh={setRefresh} idDelete={id} className="mx-2"/>
                            </div>
                        </td>
                    </tr>
                ))}
                </tbody>
            </table>
        </div>
    )
}

export default List;
