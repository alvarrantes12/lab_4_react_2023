import React, { useState } from 'react';
import Delete from '../components/products/delete';

function DeleteProduct() {
  const [refresh, setRefresh] = useState(true);
  return (
    <div>
        <Delete setRefresh={setRefresh}/>
    </div>
  );
};

export default DeleteProduct;