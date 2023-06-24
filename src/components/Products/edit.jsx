import React, { useState } from 'react';
import { putFetch } from '../../commons/ApiMethods';
import './products.css';
import { useNavigate, useParams } from 'react-router-dom';
import Swal from 'sweetalert2';
import { Link } from 'react-router-dom';

function Edit() {
  const [nameEdit, setNameEdit] = useState('');
  const [priceEdit, setPriceEdit] = useState('');
  const { id } = useParams();
  const navigate = useNavigate();

  const handleEdit = async (event) => {
    event.preventDefault();
    try {
      putFetch(`products/${id}`, { name: nameEdit, price: priceEdit}).then(() => {
        showSuccessAlert();
      });
    } catch (error) {
      console.log(error);
    }
  }

  const showSuccessAlert = () => {
    Swal.fire({
      title: 'Editado correctamente',
      icon: 'success',
      confirmButtonText: 'Aceptar',
    }).then(() => {
      navigate('/');
    });
  }

  return (
    <>
      <form onSubmit={handleEdit} className="centered-form">
        <div className="mb-3">
        <label htmlFor="productName" className="form-label">Nombre del producto</label>
        <input
          type="text"
          className="form-control"
          id="productName"
          value={nameEdit}
          onChange={(e) => setNameEdit(e.target.value)}
        />
        </div>
        <div className="mb-3">
          <label htmlFor="price" className="form-label">Precio</label>
          <input
            type="text"
            className="form-control"
            id="price"
            value={priceEdit}
            onChange={(e) => setPriceEdit(e.target.value)}
          />
        </div>
        <div className="btn-group">
          <div className="btn-container">
            <Link to={`/`} className="btn btn-success btn-sm create-button">Volver</Link>
          </div>
          <div className="btn-container">
            <button type="submit" className="btn btn-primary create-button">Editar</button>
          </div>
        </div>
      </form>
    </>
  )
}

export default Edit;
