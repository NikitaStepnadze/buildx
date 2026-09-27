import React from 'react';

// Import images
import shape1 from '../../../public/assets/images/shapes/why-choose-three-shape-1.png';
import shape2 from '../../../public/assets/images/shapes/why-choose-three-shape-2.png';
import shape3 from '../../../public/assets/images/shapes/why-choose-three-shape-3.png';
import img1 from '../../../public/assets/images/resources/why-choose-three-img-1.jpg';

import icon1 from '../../../public/assets/images/icon/why-choose-three-icon-1.png';
import icon2 from '../../../public/assets/images/icon/why-choose-three-icon-2.png';
import icon3 from '../../../public/assets/images/icon/why-choose-three-icon-3.png';
import icon4 from '../../../public/assets/images/icon/why-choose-three-icon-4.png';
import Image, { StaticImageData } from 'next/image';
import AdvanceCountUp from '@/components/elements/AdvanceCountUp';

const WhyChooseInner: React.FC = () => {
    interface Point {
        id: number;
        icon: string | StaticImageData;
        title: string;
        text: string;
    }
    const points: Point[] = [
        {
            id: 1,
            icon: icon1,
            title: 'გამოცდილი ოსტატები',
            text: 'გუნდი მრავალწლიანი გამოცდილებითა და ცოდნით.',
        },
        {
            id: 2,
            icon: icon2,
            title: 'ასობით დასრულებული ობიექტი',
            text: 'წარმატებით შესრულებული პროექტების ისტორია.',
        },
        {
            id: 3,
            icon: icon3,
            title: 'ზუსტი აზომვა',
            text: 'ადგილზე აზომვა, რათა ნაკეთობა იდეალურად მოერგოს.',
        },
        {
            id: 4,
            icon: icon4,
            title: 'ინდივიდუალური გადაწყვეტა',
            text: 'დიზაინი, რომელიც თქვენს სახლსა და სურვილებს ერგება.',
        },
    ];

    return (
        <section className="why-choose-three">
            <div className="container">
                <div className="row">
                    {/* Left Section */}
                    <div className="col-xl-6">
                        <div
                            className="why-choose-three__left"
                            data-aos="slide-right"
                            data-aos-duration="1200"
                            data-aos-delay="300"
                        >
                            <div className="why-choose-three__img-box">
                                <div className="why-choose-three__review-box">
                                    <div className="why-choose-three__review-count count-box">
                                        <h4 className="count-text" data-stop="60" data-speed="1500"><AdvanceCountUp ending={60} /></h4>
                                        <span className="why-choose-three__review-count-plus">K</span>
                                    </div>
                                    <p className="why-choose-three__review-count-text">დადებითი შეფასება</p>
                                </div>

                                <div className="why-choose-three__complete-project-box">
                                    <div className="why-choose-three__complete-project-count count-box">
                                        <h4 className="count-text" data-stop="120" data-speed="1500"><AdvanceCountUp ending={120} /></h4>
                                        <span className="why-choose-three__complete-project-count-plus">+</span>
                                    </div>
                                    <p className="why-choose-three__complete-project-count-text">დასრულებული პროექტი</p>
                                </div>

                                <div className="why-choose-three__shape-2 float-bob-y">
                                    <Image src={shape2} width={242} height={386} alt="Shape 2" />
                                </div>
                                <div className="why-choose-three__shape-3 float-bob-x">
                                    <Image src={shape3} width={242} height={386} alt="Shape 3" />
                                </div>

                                <div className="why-choose-three__img">
                                    <Image src={img1} width={513} height={513} alt="რატომ ჩვენ" />
                                    <div className="why-choose-three__shape-1 float-bob-x">
                                        <Image src={shape1} width={386} height={186} alt="Shape 1" />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Right Section */}
                    <div className="col-xl-6">
                        <div className="why-choose-three__right">
                            <div className="section-title-two text-left sec-title-animation animation-style2">
                                <div className="section-title-two__tagline-box">
                                    <div className="section-title-two__tagline-icon-box">
                                        <div className="section-title-two__tagline-icon-1"></div>
                                        <div className="section-title-two__tagline-icon-2"></div>
                                    </div>
                                    <span className="section-title-two__tagline">რატომ ჩვენ</span>
                                </div>
                                <h2 className="section-title-two__title title-animation">
                                    რატომ უნდა აირჩიოთ <br /> ჩვენი მომსახურება <span>თქვენი სახლისთვის</span>
                                </h2>
                            </div>

                            <p className="why-choose-three__text-1">
                                ჩვენი მომსახურება გამოირჩევა, რადგან ვზრუნავთ მაღალ ხარისხზე
                                და თითოეულ კლიენტზე მორგებულ გადაწყვეტაზე.
                            </p>
                            <p className="why-choose-three__text-2">
                                ვაერთიანებთ მრავალწლიან გამოცდილებასა და თანამედროვე ტექნოლოგიებს, რათა
                                შედეგი იყოს საიმედო, ლამაზი და გამძლე.
                            </p>
                            <div className="why-choose-three__points-box">
                                <div className="row">
                                    {points.map((point) => (
                                        <div
                                            key={point.id}
                                            className="col-xl-6 col-lg-6 col-md-6"
                                        >
                                            <div className="why-choose-three__single">
                                                <div className="why-choose-three__icon">
                                                    <Image src={point.icon} width={33} height={33} alt={point.title} />
                                                </div>
                                                <div className="why-choose-three__content">
                                                    <h3 className="why-choose-three__content-title">
                                                        {point.title}
                                                    </h3>
                                                    <p className="why-choose-three__content-text">
                                                        {point.text}
                                                    </p>
                                                </div>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default WhyChooseInner;
