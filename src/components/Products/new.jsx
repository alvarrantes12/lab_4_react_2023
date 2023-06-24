import React, { useState } from "react";
import { postFetch } from "../../commons/ApiMethods";

function New({ setRefresh }) {
  const [name, setName] = useState("");
  const [price, setPrice] = useState("");
  const [supermarket_id, setSupermarket_id] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = async (event) => {
    event.preventDefault();
    console.log(name)
    try {
      postFetch("products", {
        name: name,
        price: price,
        supermarket_id: supermarket_id,
      }).then((response) => {
        setName("");
        setPrice("");
        setMessage("Creado correctamente");
        setRefresh(true);
      });
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <div>
          <h4 style={{ marginBottom: "0px", marginTop: "0px" }}>
            Crear Producto
          </h4>
          <input
            type="text"
            value={name}
            placeholder="Nombre Producto"
            onChange={(e) => {
              setName(e.target.value);
            }}
          />
        </div>

        <div>
          <input
            type="text"
            value={price}
            placeholder="Precio"
            onChange={(e) => {
              setPrice(e.target.value);
            }}
          />
        </div>
        <div>
          <input
            type="number"
            value={supermarket_id}
            placeholder="Id del Supermercado"
            onChange={(e) => {
              setSupermarket_id(e.target.value);
            }}
          />
        </div>

        <div>{message ? <p>{message}</p> : <br />}</div>
        <button type="submit"> Crear </button>
      </form>
    </>
  );
}

export default New;
