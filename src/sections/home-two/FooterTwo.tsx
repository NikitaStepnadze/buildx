"use client"
import React from 'react';
import { motion } from "framer-motion"
import footerLogo from '../../../public/assets/images/resources/buildix-logo.png';
import shapeBg from '../../../public/assets/images/shapes/site-footer-two-shape-bg.png';
import shapeStar from '../../../public/assets/images/shapes/site-footer-two-star.png';
import Image from 'next/image';
import Link from 'next/link';
import { LINKSONE, LINKSTWO, LINKTHREE } from '@/contents/footer/footer';
const FooterTwo: React.FC = () => {
    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        const form = e.currentTarget;
        form.reset();
    };

    return (
        <>
            <section className="newsletter-two">
                <div className="newsletter-two__big-text">გამოიწერეთ სიახლეები</div>
                <div className="container">
                    <div className="newsletter-two__inner">
                        <div className="newsletter-two__left">
                            <h2 className="newsletter-two__title">გამოიწერეთ სიახლეები</h2>
                            <p className="newsletter-two__text">
                                მიიღეთ სიახლეები, აქციები და სასარგებლო რჩევები <br /> პირდაპირ თქვენს ელფოსტაზე.
                            </p>
                        </div>
                        <div className="newsletter-two__right">
                            <form className="newsletter-two__form" onSubmit={handleSubmit}>
                                <div className="newsletter-two__input">
                                    <input type="text" placeholder="შეიყვანეთ ელფოსტა" required />
                                </div>
                                <button type="button" className="newsletter-two__btn">
                                    გამოწერა
                                </button>
                            </form>
                        </div>
                    </div>
                </div>
            </section>
            <footer className="site-footer-two">
                <div
                    className="site-footer-two__shape-bg"
                    style={{ backgroundImage: `url(${shapeBg})` }}
                ></div>
                <div className="site-footer-two__shape-1 zoominout"></div>
                <div className="site-footer-two__shape-2 zoominout"></div>

                {/* Top Section */}
                <div className="site-footer-two__top">
                    <div className="site-footer-two__main-content">
                        <div className="container">
                            <div className="site-footer-two__main-content-inner">
                                <div className="site-footer-two__star rotate-me">
                                    <Image src={shapeStar} width={25} height={25} alt="Star Shape" />
                                </div>

                                <div className="row">
                                    {/* About Widget */}
                                    <div className="col-xl-3 col-lg-6 col-md-6 wow fadeInUp" data-wow-delay="100ms">
                                        <div className="footer-widget-two__about">
                                            <div className="footer-widget-two__about-logo">
                                                <Link href="/">
                                                    <Image src={footerLogo} width={126} height={40} alt="Buildix" />
                                                </Link>
                                            </div>
                                            <ul className="footer-widget-two__get-in-touch-list list-unstyled">
                                                <li>
                                                    <div className="icon">
                                                        <span className="icon-pin"></span>
                                                    </div>
                                                    <div className="text">
                                                        <p>
                                                            თბილისი, <br /> საქართველო
                                                        </p>
                                                    </div>
                                                </li>
                                                <li>
                                                    <div className="icon">
                                                        <span className="icon-envelope"></span>
                                                    </div>
                                                    <div className="text">
                                                        <p>
                                                            <a href="mailto:info@buildix.ge">info@buildix.ge</a>
                                                        </p>
                                                    </div>
                                                </li>
                                                <li>
                                                    <div className="icon">
                                                        <span className="icon-phone"></span>
                                                    </div>
                                                    <div className="text">
                                                        <p>
                                                            <a href="tel:+995555008110">555 00 81 10</a>
                                                        </p>
                                                    </div>
                                                </li>
                                            </ul>

                                            <div className="site-footer-two__social-box">
                                                <p className="site-footer-two__social-title">გამოგვყევით</p>
                                                <div className="site-footer-two__social">
                                                    <Link href="#">
                                                        <i className="icon-facebook"></i>
                                                    </Link>
                                                    <Link href="#">
                                                        <i className="icon-twitter"></i>
                                                    </Link>
                                                    <Link href="#">
                                                        <i className="icon-linkedin"></i>
                                                    </Link>
                                                    <Link href="#">
                                                        <i className="icon-pinterest"></i>
                                                    </Link>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    {/* სწრაფი ბმულები */}
                                    <div className="col-xl-3 col-lg-6 col-md-6 col-6 wow fadeInUp" data-wow-delay="200ms">
                                        <div className="footer-widget-two__quick-links">
                                            <h4 className="footer-widget-two__title">სწრაფი ბმულები</h4>
                                            <ul className="footer-widget-two__quick-links-list list-unstyled">
                                                {
                                                    LINKSONE.map(Item => <motion.li
                                                        key={Item?.id}
                                                        initial={{ x: -70, opacity: 0 }}
                                                        whileInView={{ x: 0, opacity: 1 }}
                                                        transition={{
                                                            duration: 0.2 * Item?.id,
                                                            ease: "easeOut"
                                                        }}
                                                        viewport={{ amount: 0.01 }}
                                                    >
                                                        <Link href={Item?.link}>{Item?.value}</Link>
                                                    </motion.li>)
                                                }
                                            </ul>
                                        </div>
                                    </div>

                                    {/* Support Links */}
                                    <div className="col-xl-3 col-lg-6 col-md-6 col-6 wow fadeInUp" data-wow-delay="300ms">
                                        <div className="footer-widget-two__support">
                                            <h4 className="footer-widget-two__title">დახმარება</h4>
                                            <ul className="footer-widget-two__quick-links-list footer-widget-two__support-list list-unstyled">
                                                {
                                                    LINKSTWO.map(Item => <motion.li
                                                        key={Item?.id}
                                                        initial={{ x: -70, opacity: 0 }}
                                                        whileInView={{ x: 0, opacity: 1 }}
                                                        transition={{
                                                            duration: 0.2 * Item?.id,
                                                            ease: "easeOut"
                                                        }}
                                                        viewport={{ amount: 0.01 }}
                                                    >
                                                        <Link href={Item?.link}>{Item?.value}</Link>
                                                    </motion.li>)
                                                }
                                            </ul>
                                        </div>
                                    </div>

                                    {/* Services Links */}
                                    <div className="col-xl-3 col-lg-6 col-md-6 wow fadeInUp" data-wow-delay="400ms">
                                        <div className="footer-widget-two__services">
                                            <h4 className="footer-widget-two__title">ჩვენი სერვისები</h4>
                                            <ul className="footer-widget-two__quick-links-list footer-widget-two__services-list list-unstyled">
                                                {
                                                    LINKTHREE.map(Item => <motion.li
                                                        key={Item?.id}
                                                        initial={{ x: -70, opacity: 0 }}
                                                        whileInView={{ x: 0, opacity: 1 }}
                                                        transition={{
                                                            duration: 0.2 * Item?.id,
                                                            ease: "easeOut"
                                                        }}
                                                        viewport={{ amount: 0.01 }}
                                                    >
                                                        <Link href={Item?.link}>{Item?.value}</Link>
                                                    </motion.li>)
                                                }
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Footer Bottom */}
                <div className="site-footer-two__bottom">
                    <div className="container">
                        <div className="row">
                            <div className="col-xl-12">
                                <div className="site-footer-two__bottom-inner">
                                    <div className="site-footer-two__copyright">
                                        <p className="site-footer-two__copyright-text">
                                            &copy; 2026 Buildix.ge. ყველა უფლება დაცულია.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </footer>
        </>
    );
};

export default FooterTwo;
