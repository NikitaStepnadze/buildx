import BlogMain from '@/sections/blog/BlogMain';
import BannerCommon from '@/sections/common/BannerCommon';
import React from 'react';

const page: React.FC = () => {
    return (
        <>
            <BannerCommon title='ჩვენი' subtitle='ბლოგი' breadcrumb='ბლოგი' />
            <BlogMain />
        </>
    );
};

export default page;