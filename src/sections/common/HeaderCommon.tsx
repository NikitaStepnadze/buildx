"use client"
import React from 'react';
import logo2 from '../../../public/assets/images/resources/buildix-logo.png';
import { useFinrisContext } from '@/components/context/useFinrisContext';
import Link from 'next/link';
import Image from 'next/image';
import ManuList from '../manu-item/ManuList';
import SocialLinks from '@/components/elements/SocialLinks';

const HeaderCommon: React.FC = () => {
    const { setIsMobile, setIsSearch } = useFinrisContext();
    return (
        <header className="main-header-two">
            <div className="main-menu-two__top">
                <div className="main-menu-two__top-inner">
                    <ul className="list-unstyled main-menu-two__contact-list">
                        <li>
                            <div className="icon">
                                <i className="icon-phone"></i>
                            </div>
                            <div className="text">
                                <p><a href="tel:+995555008110">555 00 81 10</a></p>
                            </div>
                        </li>
                        <li>
                            <div className="icon">
                                <i className="icon-envelope"></i>
                            </div>
                            <div className="text">
                                <p><a href="mailto:info@buildix.ge">info@buildix.ge</a></p>
                            </div>
                        </li>
                        <li>
                            <div className="icon">
                                <i className="icon-pin"></i>
                            </div>
                            <div className="text">
                                <p>თბილისი, საქართველო</p>
                            </div>
                        </li>
                    </ul>
                    <p className="main-menu-two__top-welcome-text">კეთილი იყოს თქვენი მობრძანება Buildix-ში</p>
                    <div className="main-menu-two__top-right">
                        <div className="main-menu-two__top-time">
                            <div className="main-menu-two__top-time-icon">
                                <span className="icon-time"></span>
                            </div>
                            <p className="main-menu-two__top-text">ორშ - პარ: 09:00 - 17:00</p>
                        </div>
                        <div className="main-menu-two__social">
                            <SocialLinks />
                        </div>
                    </div>
                </div>
            </div>
            <nav className="main-menu main-menu-two">
                <div className="main-menu-two__wrapper">
                    <div className="main-menu-two__wrapper-inner">
                        <div className="main-menu-two__left">
                            <div className="main-menu-two__logo">
                                <Link href="/">
                                    <Image src={logo2} width={126} height={40} alt="Buildix" />
                                </Link>
                            </div>
                        </div>
                        <div className="main-menu-two__main-menu-box">
                            <a href="#" className="mobile-nav__toggler" onClick={() => setIsMobile((pre) => !pre)}><i className="fa fa-bars"></i></a>
                            <ManuList />
                        </div>
                        <div className="main-menu-two__right">
                            <div className="main-menu-two__call">
                                <div className="main-menu-two__call-icon">
                                    <i className="icon-phone"></i>
                                </div>
                                <div className="main-menu-two__call-content">
                                    <p className="main-menu-two__call-sub-title">დაგვირეკეთ</p>
                                    <h5 className="main-menu-two__call-number">
                                        <a href="tel:+995555008110">555 00 81 10</a>
                                    </h5>
                                </div>
                            </div>
                            <div className="main-menu-two__search-cart-box">
                                <div className="main-menu-two__search-cart-box">
                                    <div className="main-menu-two__search-box" onClick={() => setIsSearch(pre => !pre)}>
                                        <span className="main-menu-two__search searcher-toggler-box icon-search-1"></span>
                                    </div>
                                </div>
                            </div>
                            <div className="main-menu-two__btn-box">
                                <Link href="/contact" className="thm-btn thm-btn-two main-menu-two__btn">
                                    დაგვიკავშირდით
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </nav>
        </header>
    );
};

export default HeaderCommon;