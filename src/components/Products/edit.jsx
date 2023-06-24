import React, { useState } from "react";
import { putFetch } from "../../commons/ApiMethods";
import "./buttons.css";
import "./form.css";


function Edit({ setRefresh }) {
  const [nameEdit, setNameEdit] = useState("");
  const [priceEdit, setPriceEdit] = useState("");
  const [idEdit, setIdEdit] = useState("");
  const [messageEdit, setMessageEdit] = useState("");

  const handleEdit = async (event) => {
    event.preventDefault();
    try {
      putFetch(`products/${idEdit}`, { name: nameEdit, price: priceEdit }).then(() => {
        setIdEdit("");
        setNameEdit("");
        setPriceEdit("");
        setMessageEdit("Se edito correctamente el producto");
        setRefresh(true);
      });
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <form className = "form-container" onSubmit={handleEdit}>
      <div>
        <input className="form-input"
          type="text"
          value={idEdit}
          placeholder="Número id del producto"
          onChange={(e) => {
            setIdEdit(e.target.value);
          }}
        />
      </div>
      <div>
        <input className="form-input"
          type="text"
          value={nameEdit}
          placeholder="Nuevo nombre del producto"
          onChange={(e) => {
            setNameEdit(e.target.value);
          }}
        />
      </div>
      <div>
        <input className="form-input"
          type="text"
          value={priceEdit}
          placeholder="Nuevo precio del producto"
          onChange={(e) => {
            setPriceEdit(e.target.value);
          }}
        />
      </div>
      <div>{messageEdit ? <p>{messageEdit}</p> : <br />}</div>
      <button type="submit" className="blue-button">Editar producto</button>
    </form>
  );
}
export default Edit;