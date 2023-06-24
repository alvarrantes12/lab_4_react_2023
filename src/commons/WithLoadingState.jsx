import React from 'react'

function WithLoadingState (Component) {
    return function WithLoadingState({isLoading, ...props}){
        if (!isLoading) return <Component {...props} />

        return (
            <p>Un momento, su información esta siendo cargada...</p>
        );
    }
}
export default WithLoadingState;