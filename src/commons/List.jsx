import React from "react";

const List = ({ contents }) => {

    if (!contents || contents.length === 0) return <p style={{ display: 'flex', gap: '10px', justifyContent: "center", marginTop: '10px' }}>No hay productos</p>

    return (

        <div style={{ display: 'flex', gap: '10px', justifyContent: "center", marginTop: '10px' }}>
            <table>
                <tr>
                    <th style={{ padding: "1em", backgroundColor: "#6E0092", fontWeight: "bold", color: "white" }}>ID</th>
                    <th style={{ padding: "1em", backgroundColor: "#6E0092", fontWeight: "bold", color: "white"  }}>Nombre del Producto</th>
                    <th style={{ padding: "1em", backgroundColor: "#6E0092", fontWeight: "bold", color: "white"  }}>Precio</th>
                </tr>

                <tbody>
                    {contents.map(({ id, product_name, product_price }) => (
                        <tr>
                            <td style={{ padding: "1em", backgroundColor: "#F6C9FF", textAlign: "center"}} >{id}</td>
                            <td style={{ padding: "1em", backgroundColor: "#F6C9FF", textAlign: "center"}} >{product_name}</td>
                            <td style={{ padding: "1em", backgroundColor: "#F6C9FF", textAlign: "center"}} >{product_price}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );

}

export default List;