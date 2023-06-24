import React, { useState } from 'react';
import Edit from '../components/products/edit';

function EditProduct() {
    const [refresh, setRefresh] = useState(true);
    return (
        <div>
            <Edit setRefresh={setRefresh} />
        </div>
    );
}

export default EditProduct;