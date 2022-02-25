import React from 'react';
import Category from '../Category/Category';

const SideBar = () => {
    return (
        <div className="mt-10  w-64  sidebar-style">
            {/* <h1>This is sidebar</h1> */}
            <Category></Category>
        </div>
    );
};

export default SideBar;