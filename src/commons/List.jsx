import React from "react";

const List = ({ contents }) => {
    if (!contents || contents.length === 0) return <p>No se ha guardado ningun producto</p>;

    return (
        <div style={{ margin: "20px" }}>
          <h3 style={{ marginBottom: "10px" }}>Lista de Productos:</h3>
          <table style={{ borderCollapse: "collapse", width: "70%", border: "2px dashed black", margin: "0 auto", marginTop: "20px" }}>
            <thead>
              <tr>
                <th style={{ padding: "0.5em", borderBottom: "2px dashed black", backgroundColor: "#2EC4B6", color: "white" }}>Numero identificador</th>
                <th style={{ padding: "0.5em", borderBottom: "2px dashed black", backgroundColor: "#2EC4B6", color: "white" }}>Nombre del Producto</th>
                <th style={{ padding: "0.5em", borderBottom: "2px dashed black", backgroundColor: "#2EC4B6", color: "white" }}>Precio del Producto</th>
              </tr>
            </thead>
            <tbody>
              {contents.map(({ id, name, price }) => (
                <tr key={id}>
                  <td style={{ padding: "0.5em", borderBottom: "2px dashed black", textAlign: "center", color: "lightblue"  }}>{id}</td>
                  <td style={{ padding: "0.5em", borderBottom: "2px dashed black", textAlign: "center", fontWeight: "bold" }}>{name}</td>
                  <td style={{ padding: "0.5em", borderBottom: "2px dashed black", textAlign: "center" }}>{price}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      );
      
};

export default List;