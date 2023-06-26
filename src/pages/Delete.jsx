import React, { useState } from 'react';
import Delete from '../components/Products/delete';

function DeleteProduct() {
  const [refresh, setRefresh] = useState(true);

  return (
    <div style={{ textAlign: 'center' }}>
      <h2 style={{ margin: '10px' }}>Eliminar Producto</h2>
      <Delete setRefresh={setRefresh} />
    </div>
  );
}

export default DeleteProduct;