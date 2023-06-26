import React from "react";

function WithLoadingState(Component) {
    return function WithLoadingState({isLoading, ...props}) {
        if (!isLoading) return <Component {...props} />;

        return (
            <div>
                <p>Cargando la informacion de los productos...</p>
            </div>
        );
    }
}

export default WithLoadingState;