import React from 'react'; 
import errorImg from "../../public/assets/images/resources/error-page-img1.png" 
import HeaderCommon from '@/sections/common/HeaderCommon';
import BannerCommon from '@/sections/common/BannerCommon';
import Image from 'next/image';
import Link from 'next/link';
import FooterCommon from '@/sections/common/FooterCommon';
import StrickyHeaderCommon from '@/sections/common/StrickyHeaderCommon';
const page: React.FC = () => {
    return (
        <div className="page-wrapper">
            <HeaderCommon />
            <BannerCommon title='404' subtitle='შეცდომა' breadcrumb='404 შეცდომა' />
            <section className="error-page">
                <div className="container">
                    <div className="error-page__inner text-center">
                        <div className="error-page__img float-bob-y">
                            <Image src={errorImg} width={903} height={524} alt="გვერდი ვერ მოიძებნა" />
                        </div>

                        <div className="error-page__content">
                            <h2>უკაცრავად! გვერდი ვერ მოიძებნა!</h2>
                            <p>გვერდი, რომელსაც ეძებთ, არ არსებობს. შესაძლოა ის გადატანილი ან წაშლილია.</p>
                            <div className="btn-box">
                                <Link className="thm-btn" href="/"> <span className="icon-right"></span> მთავარ გვერდზე დაბრუნება</Link>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <FooterCommon />
            <StrickyHeaderCommon />
        </div>
    );
};

export default page;