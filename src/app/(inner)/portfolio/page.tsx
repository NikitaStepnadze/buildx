import CtaCommon from '@/sections/about/CtaCommon';
import BannerCommon from '@/sections/common/BannerCommon';
import PortfolioMain from '@/sections/portfolio/PortfolioMain';
import React from 'react';

interface PageProps {
    searchParams: Promise<{ category?: string | string[] }>;
}

const page = async ({ searchParams }: PageProps) => {
    const { category } = await searchParams;

    return (
        <>
            <BannerCommon title='ჩვენი' subtitle='პორტფოლიო' breadcrumb='პორტფოლიო' />
            <PortfolioMain initialCategory={typeof category === 'string' ? category : null} />
            <CtaCommon />
        </>
    );
};

export default page;
