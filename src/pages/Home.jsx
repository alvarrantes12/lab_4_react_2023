import React, { useState } from 'react';
import Index from '../components/products';
import New from '../components/products/new';
import Edit from '../components/products/edit';
import Delete from '../components/products/delete';

function Home() {
  const [refresh, setRefresh] = useState(true)

  return (
    <div className='home'>
      <Index refresh={refresh} setRefresh={setRefresh}/>
      <New setRefresh={setRefresh}/>
      <Edit setRefresh={setRefresh}/>
      <Delete setRefresh={setRefresh}/>
    </div>
  );
}

export default Home;