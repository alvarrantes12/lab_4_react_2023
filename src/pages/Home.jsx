import React, { useState } from 'react';
import Index from '../components/Products/index';
import NewProduct from '../components/Products/new';
import EditProduct from '../components/Products/edit';
import DeleteProduct from '../components/Products/delete';

function Home() {
  const [refresh, setRefresh] = useState(true);
  return (
    <div className="">
      <Index refresh={refresh} setRefresh={setRefresh} />

      <NewProduct setRefresh={setRefresh} />
      <EditProduct setRefresh={setRefresh} />
      <DeleteProduct setRefresh={setRefresh} />
    </div>
  );
}

export default Home;