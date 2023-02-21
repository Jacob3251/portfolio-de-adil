import React from 'react';
import { Outlet } from 'react-router';
import Blogs from '../Blogs/Blogs';
import Header from '../Header/Header';

const BlogLayout = () => {
    return (
        <div className='bg-[#702963] bg-opacity-95 h-[100vh]'>
            <Header></Header>
            <Blogs></Blogs>
        </div>
    );
};

export default BlogLayout;