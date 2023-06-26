import React, { useState } from 'react';
import Edit from '../components/Products/edit';

function EditProduct() {
  const [refresh, setRefresh] = useState(true);

  return (
    <div style={{ textAlign: 'center' }}>
      <h2 style={{ margin: '10px' }}>Editar Producto</h2>
      <Edit setRefresh={setRefresh} />
    </div>
  );
}

export default EditProduct;
