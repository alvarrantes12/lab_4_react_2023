import React from "react";

function WithLoadingState(Component) {
  return function WithLoadingState({ isLoading, ...props }) {
    if (!isLoading) return <Component {...props} />;

    return (
      <div style={{ textAlign: "center", marginTop: "50px" }}>
        <h1>Cargando información...</h1>
      </div>
    );
  };
}

export default WithLoadingState;