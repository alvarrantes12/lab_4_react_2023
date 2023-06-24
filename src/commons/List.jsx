import React from 'react';
import '../../src/index.css'

const List = ({ contents }) => {

  if (!contents || contents.length === 0) return <h1>No hay contenido</h1>
  return (
    <div>
      <h4>Estos son los contenidos disponibles</h4>
      <table >
        <tr>
           <th style={{padding: "0 4em 0 4em"}}>Identificador</th>
           <th style={{padding: "0 4em 0 4em"}}>Nombre</th>
           <th style={{padding: "0 4em 0 4em"}}>Precio</th>
        </tr>

        {contents.map(({id, name, price }) => (
          <tr>
            <td style={{padding: "0 4em 0 4em"}}>{id}</td>
            <td style={{padding: "0 4em 0 4em"}}>{name}</td>
            <td style={{padding: "0 4em 0 4em"}}>{price}</td> 
          </tr>
        ))
        }


      </table>


    </div >
  )
}
export default List