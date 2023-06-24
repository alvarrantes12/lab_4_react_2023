import React, { useState, useEffect } from 'react';
import WithLoadingState from '../../commons/WithLoadingState';
import List from '../../commons/List';
import { getFetch } from '../../commons/ApiMethods';

function Index({ refresh, setRefresh }) {
  const LoadingList = WithLoadingState(List);
  const [contents, setContents] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (!refresh) return;
    setLoading(true);
    getFetch('products').then((data) => {
      console.log(data);
      setContents(data);
      setLoading(false);
    });
    setRefresh(false);
  }, [setContents, setLoading, refresh]);

  return (
    <>
      <h2 style={{ margin: "4px" }}>Lista de Productos</h2>
      <LoadingList isLoading={loading} contents={contents} />
    </>
  );
}

export default Index;
