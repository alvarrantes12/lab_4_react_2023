import React, { useState, useEffect } from 'react';
import List from '../../commons/List';
import WithLoadingState from '../../commons/WithLoadingStates';
import { getFetch } from '../../commons/ApiMethods';

function Index({refresh, setRefresh}) {
    const LoadingList = WithLoadingState(List);
    const [contents, setContents] = useState([]);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        if (!refresh) return
        setLoading(true);
        getFetch('products').then((data) => {
            setContents(data)
            setLoading(false);
        });
        setRefresh(false);
    }, [setContents, setLoading, refresh]);

    return (
        <div>
            <LoadingList contents={contents} loading={loading} />
        </div>
    )
}

export default Index;