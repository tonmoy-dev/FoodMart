import React from 'react';
import Category from '../Category/Category';

const SideBar = () => {
    return (
        <div className="w-full mt-2 shadow rounded-md px-4 pb-2 sidebar-style">
            <Category></Category>
        </div>
    );
};

export default SideBar;