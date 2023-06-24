import React, { useState} from 'react';
import {  postFetch } from '../../commons/ApiMethods';


function New ({setRefresh}) {
    const [name, setName] = useState('');
    const [price, setPrice] = useState('');
    const [message, setMesage] = useState('');
  
    
    const handleSubmit = async (event) => {
      event.preventDefault();
      try {
        postFetch('products', {name: name, price: price})
        .then((response) => {
          setName('');
          setPrice('');
          setMesage('Creado correctamente');
          setRefresh(true);
        })
      }catch (error) {
        console.log(error)
  
      }
    }
  
    return (
      <>
      <div style={{ marginBottom: '20px' }} ></div> {/* Espaciado */}
        <form onSubmit={handleSubmit} >
        <div>
        <input 
            type='text'
            className='TextInput'
            value={name}
            placeholder='Nombre del producto'
            onChange={(e) => {setName(e.target.value);}} />
        </div>
    
        <div>
        <input 
            type='text'
            className='TextInput'
            value={price}
            placeholder='Precio'
            onChange={(e) => {setPrice(e.target.value);}} />
        </div>


        {message ? 
        (<> <p>{message}</p><button type='submit' className='button'>Crear</button></>) : 
        (<button type='submit' className='button'>Crear</button>)}
        
        
        </form>
      </>
      
    )
  
  }
  
  export default New;