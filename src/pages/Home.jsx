import React, { useState} from 'react';
import Index from '../components/Products/index'
import New from '../components/Products/new'
import Edit from '../components/Products/edit'
import Delete from '../components/Products/delete'


function Home() {

  const [refresh, setRefresh] = useState(true);

  return (
    <div className='dark-style'>
      <div style={{ display: 'flex' ,marginLeft: '40px',marginRight: '40px'}}>
      <New setRefresh={setRefresh} />
      <div style={{ marginLeft: '40px',marginTop: '40px' }}></div> {/* Espacio entre los componentes */}
      <Edit setRefresh={setRefresh} />
      <div style={{ marginLeft: '40px',marginTop: '40px'}}></div> {/* Espaciado */}
      <Delete setRefresh={setRefresh} />
      </div>
      
      <div style={{ marginBottom: '40px' }}></div> {/* Espaciado */}
      <Index refresh={refresh} setRefresh={setRefresh} />
    </div>
  );
}
export default Home;