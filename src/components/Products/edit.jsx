import React, { useState, useEffect  } from 'react';
import { putFetch, getFetch } from '../../commons/ApiMethods';
import { useNavigate, useParams  } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';


function Edit () {
    
    const { id } = useParams();

    const [idEdit, setIdEdit] = useState('');
    const [nameEdit, setNameEdit] = useState('');
    const [priceEdit, setPriceEdit] = useState('');
    
    const [messageEdit, setMessageEdit] = useState('');

    const navigate = useNavigate();

    useEffect(() => {
        try {
          getFetch(`products/${id}`).then((data) => {
            setIdEdit(data.product.id);
            setNameEdit(data.product.name);
            setPriceEdit(data.product.price);
          });
        } catch (error) {
          console.log(error);
        }
    }, [id]);

    const handleEdit = async (event) =>{
        event.preventDefault();
        try{
        await putFetch(`products/${idEdit}`, {name: nameEdit , price: priceEdit})
        .then(() => {
            setMessageEdit('Editado correctamente');
            setTimeout(() => {
                navigate('/');
            }, 2000);
        })
        }catch(error){
        console.log(error)
        }
    }

    return(
        <>
            <h1 style={{ marginLeft: '10px', marginTop: '10px' }}>Editar Producto</h1>
            <form onSubmit={handleEdit}>
                <div className="form-group mx-4">
                    <div className="d-inline-block w-25">
                        <label>Nombre:</label>
                        <input 
                            autoFocus
                            className="form-control"
                            type = "text" 
                            value = {nameEdit} 
                            placeholder='Nuevo nombre del producto' 
                            onChange={(e) => { setNameEdit(e.target.value); }} />
                        <br/>
                        <label>Precio:</label>
                        <input 
                            autoFocus
                            className="form-control"
                            type = "text" 
                            value = {priceEdit} 
                            placeholder='Nuevo precio del producto' 
                            onChange={(e) => { setPriceEdit(e.target.value); }} />
                        <br/>
                        <div>{messageEdit ? <p>{messageEdit}</p> : <br />}</div>
                        <a className='btn btn-danger' href='/' style={{ display: 'inline-block', marginRight: '10px' }}>Volver al Menu</a>
                        <button className='btn btn-success' type= 'submit' style={{ display: 'inline-block', marginLeft: '10px' }}>Editar</button>
                    </div>          
                </div>
            </form>
      </>
    )
}

export default Edit;