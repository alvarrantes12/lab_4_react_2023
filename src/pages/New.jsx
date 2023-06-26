import React, { useState } from 'react';
import New from '../components/Products/new';

function NewProduct() {
  const [refresh, setRefresh] = useState(true);

  return (
    <div style={{ textAlign: 'center' }}>
      <h2 style={{ margin: '10px' }}>Crear Nuevo Producto</h2>
      <New setRefresh={setRefresh} />
    </div>
  );
}

export default NewProduct;
