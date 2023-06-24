import React, { useState} from 'react';
import { postFetch} from '../../commons/ApiMethods';

function New ({setRefresh}){
    const [name, setName] = useState('')
    const [price, setPrice] = useState('')
    const [message, setMessage] = useState('')
     
    const handleSubmit = async (event) => {
       event.preventDefault();
       try {
         postFetch('products', {name: name, price: price})
          .then((response) => {
             setName('');
             setPrice('');
             setMessage('Creado correctamente');
             setRefresh(true)
         })
       } catch (error){
         console.log(error)
       }
     }
   
     return (
       <>
        <form onSubmit={handleSubmit}>
           <div>
           <input style ={{margin: "4px", height: "20px"}}
             type='text'
             value = {name}
             placeholder='nombre producto'
             onChange={(e) => {setName(e.target.value);}} />
           </div>
   
           <div>
           <input style ={{margin: "4px", height: "20px"}}
             type='number'
             value = {price}
             placeholder='precio producto'
             onChange={(e) => {setPrice(parseInt(e.target.value));}} />
           </div>
           <div>{message ? <p>{message}</p> : <br />}</div>
           <button type ='submit' style ={{margin: "8px", height: "25px"}}> Crear </button>
         </form>
       </>
     )
   }
   
   export default New;