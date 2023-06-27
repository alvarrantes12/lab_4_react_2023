import React from "react";

const List = ({ contents }) => {
  if (!contents || contents.length === 0) return <p>No hay contenidos</p>;

  const listContainerStyle = {
    margin: "10px",
  };

  const listTitleStyle = {
    margin: "10px",
  };

  const listTableStyle = {
    width: "100%",
    borderCollapse: "collapse",
  };

  const tableHeaderStyle = {
    backgroundColor: "#f2f2f2",
    padding: "8px",
    textAlign: "center",
  };

  const tableCellStyle = {
    padding: "8px",
    textAlign: "center",
  };

  return (
    <div style={listContainerStyle}>
      <h4 style={listTitleStyle}>Lista de Productos</h4>
      <table style={listTableStyle}>
        <thead>
          <tr>
            <th style={tableHeaderStyle}>Id</th>
            <th style={tableHeaderStyle}>Nombre</th>
            <th style={tableHeaderStyle}>Precio</th>
          </tr>
        </thead>
        <tbody>
          {contents.map(({ id, name, price }) => (
            <tr key={id}>
              <td style={tableCellStyle}>{id}</td>
              <td style={tableCellStyle}>{name}</td>
              <td style={tableCellStyle}>{price}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default List;