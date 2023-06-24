import React from "react";

const List = ({ contents }) => {

    if (!contents || contents.length === 0) return <p style={{ display: 'flex', gap: '10px', justifyContent: "center", marginTop: '10px' }}>No hay productos</p>

    return (

        <div style={{ display: 'flex', gap: '10px', justifyContent: "center", marginTop: '10px' }}>
            <table>
                <tr>
                    <th style={{ padding: "1em", backgroundColor: "lightgray" }}>Nombre del Producto</th>
                    <th style={{ padding: "1em", backgroundColor: "lightgray" }}>Precio</th>
                </tr>

                <tbody>
                    {contents.map(({ id, product_name, product_price }) => (
                        <tr>
                            <td style={{ padding: "1em", backgroundColor: "#E8E8E8", textAlign: "center", fontWeight: "bold" }} >{product_name}</td>
                            <td style={{ padding: "1em", backgroundColor: "#E8E8E8", textAlign: "center", fontWeight: "bold" }} >{product_price}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );

}

export default List;