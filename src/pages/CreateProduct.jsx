import React, { useState } from 'react';
import New from '../components/products/new';

function CreateProduct() {
    const [refresh, setRefresh] = useState(true);
    return (
        <div>
            <New setRefresh={setRefresh} />
        </div>
    );
}

export default CreateProduct;