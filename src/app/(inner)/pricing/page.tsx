import BannerCommon from '@/sections/common/BannerCommon';
import PricingMain from '@/sections/pricing/PricingMain';
import React from 'react';

const page: React.FC = () => {
    return (
        <>
            <BannerCommon title='ჩვენი' subtitle='ფასები' breadcrumb='ფასები' />
            <PricingMain />
        </>
    );
};

export default page;