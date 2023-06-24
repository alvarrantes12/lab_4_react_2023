import React from "react";

const List = ({ contents }) => {
    if (!contents || contents.length === 0) return <p>No hay productos</p>;

    return (
        <div style={{ margin: "20px" }}>
            <h3 style={{ marginBottom: "10px" }}>Estas son todos los productos actualmente:</h3>
            <table style={{ borderCollapse: "collapse", width: "70%", border: "1px solid black", margin: "0 auto", marginTop: "20px" }}>
                <thead>
                    <tr>
                        <th style={{ padding: "0.5em", borderBottom: "1px solid black", backgroundColor: "lightgray" }}>Identificador</th>
                        <th style={{ padding: "0.5em", borderBottom: "1px solid black", backgroundColor: "lightgray" }}>Nombre</th>
                        <th style={{ padding: "0.5em", borderBottom: "1px solid black", backgroundColor: "lightgray" }}>Precio</th>
                    </tr>
                </thead>
                <tbody>
                    {contents.map(({ id, name, price }) => (
                        <tr key={id}>
                            <td style={{ padding: "0.5em", borderBottom: "1px solid black", textAlign: "center" }}>{id}</td>
                            <td style={{ padding: "0.5em", borderBottom: "1px solid black", textAlign: "center" }}>{name}</td>
                            <td style={{ padding: "0.5em", borderBottom: "1px solid black", textAlign: "center" }}>{price}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default List;