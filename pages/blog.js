import React from 'react';
import Blog from '../src/Components/blog';
import AuthProvider from '../src/context/AuthProvider/AuthProvider';

const blog = () => {
    return (
        <div>
            <AuthProvider>
            <Blog></Blog>
            </AuthProvider>
        </div>
    );
};

export default blog;