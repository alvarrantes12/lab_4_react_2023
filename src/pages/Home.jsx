import React, { useState } from 'react';
import Index from '../components/Products/index';
import New from '../components/Products/new';
import Edit from '../components/Products/edit';
import Delete from '../components/Products/delete';

function Home() {
  
  const [refresh, setRefresh] = useState(true);

  return (
    <div className=''>
      <Index refresh={refresh} setRefresh={setRefresh} />
      <New setRefresh={setRefresh} />
      <Edit setRefresh={setRefresh} />
      <Delete setRefresh={setRefresh} />
    </div>
  );
}

export default Home;