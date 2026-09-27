"use client"
import React, { useState } from 'react';
import shapeImg3 from "../../../public/assets/images/shapes/pricing-one-shape-3.png";
import shapeImg4 from "../../../public/assets/images/shapes/pricing-one-shape-4.png";
import customPricingIcon from "../../../public/assets/images/icon/pricing-one-custom-pricing-icon-1.png";
import customPricingImg from "../../../public/assets/images/resources/pricing-one-custom-pricing-img-1.png";
import Image from 'next/image';
import TextAnimation from '@/components/elements/TextAnimation';
import { pricingPlans } from '@/contents/procing-plan/pricing';
import { PricingPlan } from '@/contents/procing-plan/type';
import Link from 'next/link';

const PricingMain: React.FC = () => {
    const [isYearly, setIsYearly] = useState(false);

    return (
        <section className="pricing-one pricing-page">
            <div className="pricing-one__shape-3 float-bob-y">
                <Image src={shapeImg3} width={41} height={43} alt="" />
            </div>
            <div className="pricing-one__shape-4 float-bob-x">
                <Image src={shapeImg4} width={199} height={192} alt="" />
            </div>
            <div className="container">
                <div className="section-title text-center sec-title-animation animation-style1">
                    <div className="section-title__tagline-box justify-content-center">
                        <div className="section-title__tagline-icon-box">
                            <div className="section-title__tagline-icon-1"></div>
                            <div className="section-title__tagline-icon-2"></div>
                        </div>
                        <span className="section-title__tagline">ფასები და პაკეტები</span>
                    </div>
                    <h2 className="section-title__title title-animation">
                        <TextAnimation text='აირჩიეთ პაკეტი, რომელიც' textColor='black' />
                        <TextAnimation text='თქვენს საჭიროებას ერგება.' />
                    </h2>
                </div>

                <div className="pricing-one__switch-toggle">
                    <ul className="list-unstyled switch-toggler-list" role="tablist" id="switch-toggle-tab">
                        <li className={`month ${!isYearly ? 'active' : ''}`}>
                            <span onClick={() => setIsYearly(false)} style={{ cursor: 'pointer' }}>
                                შავი ლითონი
                            </span>
                        </li>
                        <li>
                            <label className={`switch ${!isYearly ? 'on' : 'off'}`}>
                                <input
                                    type="checkbox"
                                    checked={isYearly}
                                    onChange={() => setIsYearly(!isYearly)}
                                    style={{ display: 'none' }}
                                />
                                <span className="slider round"></span>
                            </label>
                        </li>
                        <li className={`year ${isYearly ? 'active' : ''}`}>
                            <span onClick={() => setIsYearly(true)} style={{ cursor: 'pointer' }}>
                                უჟანგავი ფოლადი
                            </span>
                        </li>
                    </ul>
                </div>

                <div className="tabed-content">
                    <div style={{ display: `${isYearly ? 'block' : 'none'}` }}>
                        <div className="row">
                            {pricingPlans.map((plan: PricingPlan) => (
                                <div
                                    key={plan.id}
                                    className={`col-xl-3 col-lg-6 col-md-6 `} >
                                    <div className="pricing-one__single">
                                        <div className="pricing-one__title-box">
                                            <p className="pricing-one__title">{plan.name}</p>
                                            <h3 className="pricing-one__price-box">
                                                {plan?.yearlyPrice}
                                                <span>/ მ²</span>
                                            </h3>
                                            <div className="pricing-one__border"></div>
                                        </div>
                                        <div className="pricing-one__feature-list-box">
                                            <h4 className="pricing-one__feature-title">რას მოიცავს</h4>
                                            <ul className="list-unstyled pricing-one__feature-list">
                                                {plan.features.map((feature, index) => (
                                                    <li key={index}>
                                                        <div className="icon">
                                                            <span className="fas fa-check"></span>
                                                        </div>
                                                        <div className="text">
                                                            <p>{feature}</p>
                                                        </div>
                                                    </li>
                                                ))}
                                            </ul>
                                        </div>
                                        <div className="pricing-one__btn-box">
                                            <Link href={'/pricing'} className="pricing-one__btn thm-btn" >
                                                <span className="icon-right"></span> გაიგეთ მეტი
                                            </Link>
                                        </div>
                                        <div className="pricing-one__shape-1"></div>
                                        <div className="pricing-one__shape-2"></div>
                                    </div>
                                </div>
                            ))}

                            {/* Custom Pricing Card */}
                            <div className="col-xl-3 col-lg-6 col-md-6 wow fadeInUp" data-wow-duration="500ms">
                                <div className="pricing-one__single-last">
                                    <div className="pricing-one__custom-pricing-box">
                                        <div className="pricing-one__custom-pricing-icon">
                                            <Image src={customPricingIcon} width={24} height={24} alt="" />
                                        </div>
                                        <p className="pricing-one__custom-pricing-title">გჭირდებათ ინდივიდუალური?</p>
                                        <p className="pricing-one__custom-pricing-text">
                                            თუ გჭირდებათ ინდივიდუალური შეთავაზება
                                        </p>
                                        <div className="pricing-one__btn-box-two">
                                            <Link href={'/contact'} className="pricing-one__btn-two thm-btn" >
                                                <span className="icon-right"></span> დაგვიკავშირდით
                                            </Link>
                                        </div>
                                    </div>
                                    <div className="pricing-one__custom-pricing-img">
                                        <Image src={customPricingImg} width={210} height={209} alt="" />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div style={{ display: `${!isYearly ? 'block' : 'none'}` }}>
                        <div className="row">
                            {pricingPlans.map((plan: PricingPlan) => (
                                <div
                                    key={plan.id}
                                    className={`col-xl-3 col-lg-6 col-md-6 `} >
                                    <div className="pricing-one__single">
                                        <div className="pricing-one__title-box">
                                            <p className="pricing-one__title">{plan.name}</p>
                                            <h3 className="pricing-one__price-box">
                                                {plan?.monthlyPrice}
                                                <span>/ მ²</span>
                                            </h3>
                                            <div className="pricing-one__border"></div>
                                        </div>
                                        <div className="pricing-one__feature-list-box">
                                            <h4 className="pricing-one__feature-title">რას მოიცავს</h4>
                                            <ul className="list-unstyled pricing-one__feature-list">
                                                {plan.features.map((feature, index) => (
                                                    <li key={index}>
                                                        <div className="icon">
                                                            <span className="fas fa-check"></span>
                                                        </div>
                                                        <div className="text">
                                                            <p>{feature}</p>
                                                        </div>
                                                    </li>
                                                ))}
                                            </ul>
                                        </div>
                                        <div className="pricing-one__btn-box">
                                            <Link href={'/pricing'} className="pricing-one__btn thm-btn" >
                                                <span className="icon-right"></span> გაიგეთ მეტი
                                            </Link>
                                        </div>
                                        <div className="pricing-one__shape-1"></div>
                                        <div className="pricing-one__shape-2"></div>
                                    </div>
                                </div>
                            ))}

                            {/* Custom Pricing Card */}
                            <div className="col-xl-3 col-lg-6 col-md-6 wow fadeInUp" data-wow-duration="500ms">
                                <div className="pricing-one__single-last">
                                    <div className="pricing-one__custom-pricing-box">
                                        <div className="pricing-one__custom-pricing-icon">
                                            <Image src={customPricingIcon} width={24} height={24} alt="" />
                                        </div>
                                        <p className="pricing-one__custom-pricing-title">გჭირდებათ ინდივიდუალური?</p>
                                        <p className="pricing-one__custom-pricing-text">
                                            თუ გჭირდებათ ინდივიდუალური შეთავაზება
                                        </p>
                                        <div className="pricing-one__btn-box-two">
                                            <Link href={'/contact'} className="pricing-one__btn-two thm-btn" >
                                                <span className="icon-right"></span> დაგვიკავშირდით
                                            </Link>
                                        </div>
                                    </div>
                                    <div className="pricing-one__custom-pricing-img">
                                        <Image src={customPricingImg} width={210} height={209} alt="" />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default PricingMain;