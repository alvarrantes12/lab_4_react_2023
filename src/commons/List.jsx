import React from 'react';
import Delete from '../components/Products/delete';
import 'bootstrap/dist/css/bootstrap.min.css';

const List = ({ contents,setRefresh }) => {

    if (!contents || contents.length === 0) return <p>No hay contenidos</p>
    return (
      <>
        <h1 style={{ marginLeft: '10px', marginTop: '10px' }}>Productos</h1>
        <a href="/create" className="btn btn-primary" style={{ marginLeft: '10px' }}>Crear</a>
        <table className="table table-striped">
          <thead>
            <tr>
              <th scope="col">Id</th>
              <th scope="col">Nombre</th>
              <th scope="col">Precio</th>
              <th></th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {contents.map(({ id, name, price}) => (
              <tr key={id}>
                <td>{id}</td>
                <td>{name}</td>
                <td>{price}</td>
                <td>
                  <a href={`/edit/${id}`} className="btn btn-success">Editar</a>
                </td>
                <td>
                  <Delete id={id} setRefresh={setRefresh}/>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </>
    )
}

export default List;