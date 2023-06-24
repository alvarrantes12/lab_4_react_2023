import React, { useState } from 'react';
import Create from '../components/products/create';

function CreateProduct() {
    const [refresh, setRefresh] = useState(true);
    return (
        <div>
            <Create setRefresh={setRefresh} />
        </div>
    );
}

export default CreateProduct;
