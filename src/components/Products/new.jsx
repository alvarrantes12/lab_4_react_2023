import React, { useState } from 'react';
import { postFetch } from '../../commons/ApiMethods';
import { useNavigate } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';


function New () {
    const [name, setName] = useState('');
    const [price, setPrice] = useState('');
    const [message, setMessage] = useState('');

    const navigate = useNavigate();

    const handleSubmit = async (event) => {
        event.preventDefault();
        try{
          postFetch('products', {name: name, price: price})
            .then((response) => {
                setMessage('Creado con exito');
                setTimeout(() => {
                    navigate('/');
                }, 2000);
            })
        }catch(error){
          console.log(error);
        }
    }

    return(
        <>
            <h1 style={{ marginLeft: '10px', marginTop: '10px' }}>Crear Producto</h1>
            <form onSubmit={handleSubmit}>
                <div className="form-group mx-4">
                    <div className="d-inline-block w-25">
                        <label>Nombre:</label>
                        <input 
                            autoFocus
                            className="form-control"
                            type = "text" 
                            value = {name} 
                            placeholder='Nombre del producto' 
                            onChange={(e) => { setName(e.target.value); }} />
                        <br/>
                        <label>Precio:</label>
                        <input 
                            autoFocus
                            className="form-control"
                            type = "text" 
                            value = {price} 
                            placeholder='Precio del producto' 
                            onChange={(e) => { setPrice(e.target.value); }} />
                        <br/>
                        <div>{message ? <p>{message}</p> : <br />}</div>
                        <a className='btn btn-danger' href='/' style={{ display: 'inline-block', marginRight: '10px' }}>Volver al Menu</a>
                        <button  className='btn btn-primary' type= 'submit' style={{ display: 'inline-block', marginLeft: '10px' }}>Crear</button>
                    </div>          
                </div>
            </form>
        </>
    )
}

export default New;
