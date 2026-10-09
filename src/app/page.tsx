
import AboutTwo from '@/sections/home-two/AboutTwo';
import BannerTwo from '@/sections/home-two/BannerTwo';
import BlogTwo from '@/sections/home-two/BlogTwo';
import CounterTwo from '@/sections/home-two/CounterTwo';
import FooterTwo from '@/sections/home-two/FooterTwo';
import HeaderTwo from '@/sections/home-two/HeaderTwo';
import PortfolioTwo from '@/sections/home-two/PortfolioTwo';
import ProcessTwo from '@/sections/home-two/ProcessTwo';
import ServiceTwo from '@/sections/home-two/ServiceTwo';
import StrickyHeaderTwo from '@/sections/home-two/StrickyHeaderTwo';
import WhyChooseTwo from '@/sections/home-two/WhyChooseTwo';
import React from 'react';

const page: React.FC = () => {
    return (
        <div className="page-wrapper">
            <HeaderTwo />
            <BannerTwo />
            <ServiceTwo />
            <AboutTwo />
            <WhyChooseTwo />
            <CounterTwo />
            <ProcessTwo />
            <PortfolioTwo />
            <BlogTwo />
            <FooterTwo />
            <StrickyHeaderTwo />
        </div>
    );
};

export default page;