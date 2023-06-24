import React, { useState } from 'react';
import { postFetch } from '../../commons/ApiMethods';
import './products.css';
import { useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';
import { Link } from 'react-router-dom';

function New() {
  const [name, setName] = useState('');
  const [price, setPrice] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      postFetch('products', { name: name, price: price}).then(() => {
        showSuccessAlert();
      });
    } catch (error) {
      console.log(error);
    }
  }

  const showSuccessAlert = () => {
    Swal.fire({
      title: 'Creado correctamente',
      icon: 'success',
      confirmButtonText: 'Aceptar',
    }).then(() => {
      navigate('/');
    });
  }

  return (
    <>
      <form onSubmit={handleSubmit} className="centered-form">
        <div className="mb-3">
          <label htmlFor="productName" className="form-label">Nombre del producto</label>
          <input
            type="text"
            className="form-control"
            id="productName"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="price" className="form-label">Precio</label>
          <input
            type="text"
            className="form-control"
            id="price"
            value={price}
            onChange={(e) => setPrice(e.target.value)}
          />
        </div>
        <div className="btn-group">
          <div className="btn-container">
            <Link to={`/`} className="btn btn-success btn-sm create-button">Volver</Link>
          </div>
          <div className="btn-container">
            <button type="submit" className="btn btn-danger create-button">Crear</button>
          </div>
        </div>


      </form>
    </>
  )
}

export default New;
