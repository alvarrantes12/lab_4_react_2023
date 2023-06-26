import React, { useState } from "react";
import { postFetch } from '../../commons/ApiMethods';

function New({ setRefresh }) {
  const [name, setName] = useState('')
  const [price, setPrice] = useState('')
  const [message, setMessage] = useState('')

  const handleSubmit = async (event) => {
    event.preventDefault()
    try {
      postFetch('products', {name: name, price: price})
        .then((response) => {
          setName('')
          setPrice('')
          setMessage('Creado correctamente!')
          setRefresh(true)
        })
    } catch (error) {
      console.log(error)
    }
  }

  return(
    <div className="new">
      <h3>Crear un producto</h3>
      <form onSubmit={handleSubmit}>
        <div>
          <input
            type="text"
            value={name}
            placeholder="Nombre del producto"
            onChange={(e) => {setName(e.target.value)}}/>
        </div>
        <div>
          <input
            type="text"
            value={price}
            placeholder="Precio del producto"
            onChange={(e) => {setPrice(e.target.value)}}/>
        </div>
        <div>{message ? <p>{message}</p> : <br />}</div>
        <button className="new-button" type="submit">Crear Producto</button>
      </form>
    </div>
  )
}

export default New;