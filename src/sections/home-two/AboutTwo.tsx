"use client"
import React from 'react';
import TextAnimation from '@/components/elements/TextAnimation';
import Image from 'next/image';
import Link from 'next/link';
import { motion } from "framer-motion"
import aboutTwoImg1 from '../../../public/assets/images/resources/about-buildix-metalwork.jpg';
import aboutTwoIcon1 from '../../../public/assets/images/icon/buildix/about-quality-material.svg';
import aboutTwoIcon2 from '../../../public/assets/images/icon/buildix/about-custom-design.svg';
import aboutTwoIcon3 from '../../../public/assets/images/icon/buildix/about-precise-measurement.svg';
import aboutTwoIcon4 from '../../../public/assets/images/icon/buildix/about-installation.svg';

const AboutTwo: React.FC = () => {
    return (
        <section className="about-two">
            <div className="about-two__shape-box">
                <div className="about-two__shape-1">
                    <div className="about-two__shape-2">
                        <div className="about-two__shape-3"></div>
                    </div>
                </div>
            </div>

            <div className="container">
                <div className="row">
                    {/* Left Section */}
                    <motion.div
                        className="col-xl-5"
                        initial={{ x: -100, opacity: 0 }}
                        whileInView={{ x: 0, opacity: 1 }}
                        transition={{
                            duration: 1,
                            ease: "easeOut"
                        }}
                        viewport={{ amount: 0.01, once: true }}
                    >
                        <div className="about-two__left">
                            <div className="section-title-two text-left sec-title-animation animation-style2">
                                <div className="section-title-two__tagline-box">
                                    <div className="section-title-two__tagline-icon-box">
                                        <div className="section-title-two__tagline-icon-1"></div>
                                        <div className="section-title-two__tagline-icon-2"></div>
                                    </div>
                                    <span className="section-title-two__tagline">ჩვენ შესახებ</span>
                                </div>
                                <h2 className="section-title-two__title title-animation">
                                    <TextAnimation text='Buildix — თქვენი საიმედო' fontSize='42' textColor='black' isSpan={false} />
                                    <TextAnimation text='პარტნიორი ლითონის ნაკეთობებში.' fontSize='42' textColor='#4A7043' isSpan={false} />

                                </h2>
                            </div>

                            <div className="about-two__img">
                                <Image src={aboutTwoImg1} width={435} height={450} alt="ჩვენ შესახებ" />
                            </div>
                        </div>
                    </motion.div>

                    {/* Right Section */}
                    <div className="col-xl-7">
                        <div className="about-two__right">
                            <p className="about-two__text">
                                Buildix სპეციალიზირებულია ლითონის ნაკეთობების დამზადებასა და მონტაჟზე.
                                ვამზადებთ ეზოს ჭიშკრებს, სახლის კარებს, აივნისა და შიდა და გარე კიბის
                                მოაჯირებს, ასევე ვასრულებთ ეზოს შემოღობვას — ხარისხიანი მასალით,
                                ზუსტი ზომებითა და თქვენზე მორგებული დიზაინით.
                            </p>

                            <div className="about-two__points-box">
                                <ul className="list-unstyled about-two__points">
                                    <li data-aos="fade-right" data-aos-duration="1200" data-aos-delay="100">
                                        <div className="icon">
                                            <Image src={aboutTwoIcon1} width={40} height={40} alt="ხარისხიანი მასალა" />
                                        </div>
                                        <div className="content">
                                            <h3>ხარისხიანი მასალა</h3>
                                            <p>
                                                ვიყენებთ მაღალი ხარისხის ლითონს და გამძლე,
                                                ანტიკოროზიულ დაფარვას.
                                            </p>
                                        </div>
                                    </li>

                                    <li data-aos="fade-right" data-aos-duration="1200" data-aos-delay="200">
                                        <div className="icon">
                                            <Image src={aboutTwoIcon2} width={40} height={40} alt="ინდივიდუალური დიზაინი" />
                                        </div>
                                        <div className="content">
                                            <h3>ინდივიდუალური დიზაინი</h3>
                                            <p>
                                                თითოეულ ნაკეთობას ვქმნით თქვენი სახლის სტილსა
                                                და სურვილებზე მორგებით.
                                            </p>
                                        </div>
                                    </li>
                                </ul>

                                <ul className="list-unstyled about-two__points">
                                    <li data-aos="fade-left" data-aos-duration="1200" data-aos-delay="150">
                                        <div className="icon">
                                            <Image src={aboutTwoIcon3} width={40} height={40} alt="ზუსტი აზომვა" />
                                        </div>
                                        <div className="content">
                                            <h3>ზუსტი აზომვა</h3>
                                            <p>
                                                ადგილზე ვაზომავთ ობიექტს, რათა ნაკეთობა
                                                იდეალურად მოერგოს.
                                            </p>
                                        </div>
                                    </li>

                                    <li data-aos="fade-left" data-aos-duration="1200" data-aos-delay="250">
                                        <div className="icon">
                                            <Image src={aboutTwoIcon4} width={40} height={40} alt="პროფესიონალური მონტაჟი" />
                                        </div>
                                        <div className="content">
                                            <h3>პროფესიონალური მონტაჟი</h3>
                                            <p>
                                                გამოცდილი ოსტატები მონტაჟს ასრულებენ დროულად,
                                                სუფთად და საიმედოდ.
                                            </p>
                                        </div>
                                    </li>
                                </ul>
                            </div>

                            <div className="about-two__bottom">
                                <div className="about-two__btn-and-call-box">
                                    <div className="about-two__btn-box">
                                        <Link href="/about" className="about-two__btn thm-btn thm-btn-two">
                                            <span className="icon-right"></span> გაიგეთ მეტი
                                        </Link>
                                    </div>

                                    <div className="about-two__call">
                                        <div className="about-two__call-icon">
                                            <i className="icon-phone"></i>
                                        </div>
                                        <div className="about-two__call-content">
                                            <p className="about-two__call-sub-title">დაგვიკავშირდით</p>
                                            <h3 className="about-two__call-number">
                                                <a href="tel:+995555008110">555 00 81 10</a>
                                            </h3>
                                        </div>
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

export default AboutTwo;