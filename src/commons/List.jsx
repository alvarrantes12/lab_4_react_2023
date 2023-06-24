import React from "react";
import "./List.css";

const List = ({ contents }) => {
  return (
    <div className="list-container">
      <h4>Lista de Productos</h4>
      <table>
        <thead>
          <tr>
            <th>Id</th>
            <th>Nombre</th>
            <th>Precio</th>
          </tr>
        </thead>
        <tbody>
          {contents.map(({ id, name, price }) => (
            <tr key={id}>
              <td>{id}</td>
              <td>{name}</td>
              <td>{price}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default List;
