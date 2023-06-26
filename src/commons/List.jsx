import React from "react";

const List = ({ contents }) => {
  if (!contents || contents.length === 0) return <p>No hay contenidos</p>;

  return (
    <div>
      <h4 style={{ margin: "10px" }}>Lista de Productos</h4>
      <table style={{ width: "100%", borderCollapse: "collapse" }}>
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

const tableHeaderStyle = {
  backgroundColor: "#f2f2f2",
  padding: "8px",
  textAlign: "center", // Alineación centrada para los encabezados
};

const tableCellStyle = {
  padding: "8px",
  textAlign: "center",
};

export default List;
