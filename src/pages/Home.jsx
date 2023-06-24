import React, { useState } from 'react';
import Index from '../components/Products/index';
import New from '../components/Products/new';
import Edit from '../components/Products/edit';
import Delete from '../components/Products/delete';
//import './Home.css';

function Home() {
  const [refresh, setRefresh] = useState(true)

  return(
    <div>
        <Index refresh={refresh} setRefresh={setRefresh}/>
        <div className='actions'>
          <New setRefresh={setRefresh}/>
          <Edit setRefresh={setRefresh}/>
          <Delete setRefresh={setRefresh}/>
        </div>

    </div>
  );

}

  

export default Home;