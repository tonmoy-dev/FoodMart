import { useEffect, useState } from 'react';

const Create = () => {
    const [singles, setSingles] = useState([])

    useEffect(() => {
        fetch('http://localhost:5000/products')
            .then(res => res.json())
            .then(data => setSingles(data))
    }, [])
    return (
        <div>
            <h2>fdfd</h2>
        </div>
    );
};

export default create;