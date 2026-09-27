import AboutUsThree from '@/sections/about/AboutUsThree';
import AwardsA from '@/sections/about/AwardsA';
import CtaCommon from '@/sections/about/CtaCommon';
import BannerCommon from '@/sections/common/BannerCommon';
import CounterA from '@/sections/common/CounterA';
import WhyChooseA from '@/sections/common/WhyChooseA';
import React from 'react';

const page: React.FC = () => {
    return (
        <>
            <BannerCommon title='ჩვენ' subtitle='შესახებ' breadcrumb='ჩვენ შესახებ' />
            <AboutUsThree />
            <WhyChooseA />
            <CounterA />
            <AwardsA />
            <CtaCommon />
        </>
    );
};

export default page;