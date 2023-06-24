import React from 'react';

const List = ({ contents }) => {

  if(!contents || contents.lenght === 0) return <p>No hay Datos</p>

  return (
    <div style={{marginTop: '10px'}}>
      <h4 style={{display: 'flex', justifyContent: 'center', alignItems: 'center', marginBottom: '10px', color: '#E7CBCB'}}>Datos Disponibles</h4>
      <table style={{width: '100%', borderCollapse: 'collapse'}}>
        <thead>
          <tr>
            <th style={{padding: '4px', borderBottom: '1px solid #E7CBCB', color: '#E7CBCB'}}>Id</th>
            <th style={{padding: '4px', borderBottom: '1px solid #E7CBCB', color: '#E7CBCB'}}>Nombre</th>
            <th style={{padding: '4px', borderBottom: '1px solid #E7CBCB', color: '#E7CBCB'}}>Precio</th>
          </tr>
        </thead>
        <tbody>
          {contents.map(({ id, name, price }) => (
            <tr key={id}>
              <td style={{padding: '4px', borderBottom: '1px solid #E7CBCB'}}>{id}</td>
              <td style={{padding: '4px', borderBottom: '1px solid #E7CBCB'}}>{name}</td>
              <td style={{padding: '4px', borderBottom: '1px solid #E7CBCB'}}>{price}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default List;