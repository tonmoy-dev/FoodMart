import React from 'react';
import { useRouter } from 'next/router';
import useSWR from 'swr';

const Details = () => {
    const router = useRouter()
    const id = router.query.details;

    const fetcher = async () => {
        const response = await fetch(`https://blooming-dawn-18027.herokuapp.com/cycles`)
        const data = await response.json()
        return data
    }

    const { data, error } = useSWR('details',fetcher)
    if(error) return `An error has occured${error}`
    if(!data) return 'Loading'
    
    return (
        <div>
            <h1>details id {id}</h1>
            {
                data.map(p => <li key={p.product_id}>{p.name}--{p._id}</li>)
            }
        </div>
    );
};

export default Details;
