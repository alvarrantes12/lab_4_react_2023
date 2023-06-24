import React, { useState } from "react";
import { postFetch } from "../../commons/ApiMethods";
import "./buttons.css";
import "./form.css";


function New({ setRefresh }) {
  const [name, setName] = useState("");
  const [price, setPrice] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      postFetch("products", {
        name: name,
        price: price,
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
      <form className = "form-container" onSubmit={handleSubmit}>
        <div>
          <input className="form-input"
            type="text"
            value={name}
            placeholder="Nombre del producto"
            onChange={(e) => {
              setName(e.target.value);
            }}
          />
        </div>
        <div>
          <input className="form-input"
            type="text"
            value={price}
            placeholder="Precio del producto"
            onChange={(e) => {
              setPrice(e.target.value);
            }}
          />
        </div>
        <div>{message ? <p>{message}</p> : <br />}</div>
        <button type="submit" className="green-button">Crear producto</button>
      </form>
    </>
  );
}
export default New;