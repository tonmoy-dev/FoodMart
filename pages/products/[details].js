import React from 'react';
import { useRouter } from 'next/router';

const Details = () => {
    const router = useRouter()
    const id = router.query.details;
    return (
        <div>
            <h1>Foodmart details id {id}</h1>
        </div>
    );
};

export default Details;
