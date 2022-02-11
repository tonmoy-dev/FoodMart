import React from 'react';

const Blog = () => {
    const [singless, setSingless] = useState([])

    useEffect(() => {
        fetch('http://localhost:5000/products')
            .then(res => res.json())
            .then(data => setSingless(data))
    }, [])
    return (
        <div>
            
        </div>
    );
};

export default Blog;