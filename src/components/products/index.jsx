import React, { useState, useEffect } from "react";
import { getFetch } from "../../commons/ApiMethods";
import WithLoadingState from '../../commons/WithLoadingState';
import List from '../../commons/List';

function Index({ refresh, setRefresh }) {
  const LoadingList = WithLoadingState(List)
  const [contents, setContents] = useState([])
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    if(!refresh) return
    setLoading(true)
    getFetch('products').then((data) => {
      setContents(data)
      setLoading(false)
    })
    setRefresh(false)
  }, [setContents, setLoading, refresh])

  return(
    <div className="index">
      <LoadingList isLoading={loading} contents={contents} />
    </div>
  )
}

export default Index;