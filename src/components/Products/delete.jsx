import React, { useState } from "react";
import { deleteFetch } from "../../commons/ApiMethods";
import "./buttons.css";
import "./form.css";

function Delete({ setRefresh }) {
  const [idDelete, setIdDelete] = useState("");
  const [messageDelete, setMessageDelete] = useState("");
  const handleDelete = async (event) => {
    event.preventDefault();
    try {
      deleteFetch(`products/${idDelete}`).then(() => {
        setIdDelete("");
        setMessageDelete("Producto eliminado exitosamente");
        setRefresh(true);
      });
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <form className = "form-container" onSubmit={handleDelete}>
      <div>
        <input className="form-input"
          type="text"
          value={idDelete}
          placeholder="Número id del producto a eliminar"
          onChange={(e) => {
            setIdDelete(e.target.value);
          }}
        />
      </div>

      <div>{messageDelete ? <p>{messageDelete}</p> : <br />}</div>
      <button type="submit" className="red-button">Eliminar producto </button>
    </form>
  );
}
export default Delete;