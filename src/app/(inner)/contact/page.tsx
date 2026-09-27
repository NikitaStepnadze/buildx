import BannerCommon from '@/sections/common/BannerCommon';
import ContactMain from '@/sections/contact/ContactMain';
import React from 'react';

const page:React.FC = () => {
    return (
        <>
            <BannerCommon title='საკონტაქტო' subtitle='ინფორმაცია' breadcrumb='კონტაქტი' />
            <ContactMain />
        </>
    );
};

export default page;