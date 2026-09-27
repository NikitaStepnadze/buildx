"use client"
import React from 'react';
import logo from "../../../public/assets/images/resources/buildix-logo.png";
import { useFinrisContext } from '../context/useFinrisContext';
import Link from 'next/link';
import Image from 'next/image';
import { MAIN_LINKS } from '@/contents/nav/nav';
import { usePathname } from 'next/navigation';
import SocialLinks from './SocialLinks';
const MobileNav: React.FC = () => {
    const { isMobile, setIsMobile } = useFinrisContext();
    const pathName = usePathname();

    const closeNav = () => {
        setIsMobile((pre) => !pre);
    };
    const closeMobileState = () => {
        setIsMobile(false)
    }

    return (
        <div className={`mobile-nav__wrapper ${isMobile ? "expanded" : ""}`}>
            <div onClick={closeNav} className="mobile-nav__overlay mobile-nav__toggler"></div>

            <div className="mobile-nav__content" style={{ width: '300px', maxWidth: '85vw' }}>
                <span onClick={closeNav} className="mobile-nav__close mobile-nav__toggler">
                    <i className="fa fa-times"></i>
                </span>

                <div className="logo-box">
                    <Link href="/" onClick={closeNav} aria-label="logo image">
                        <Image src={logo} width={140} height={44} alt="Buildix" />
                    </Link>
                </div>

                {/* ======= NAV MENU ======= */}
                <div className="mobile-nav__container">
                    <ul className="main-menu__list">
                        {
                            MAIN_LINKS.map(Item => <li key={Item?.id} className={`${pathName === Item?.link ? 'current' : ''}`}>
                                <Link href={Item?.link} onClick={closeMobileState}>{Item?.value}</Link>
                            </li>)
                        }
                    </ul>
                </div>

                {/* ======= CONTACT & SOCIAL ======= */}
                <ul className="mobile-nav__contact list-unstyled">
                    <li>
                        <i className="fa fa-envelope"></i>
                        <Link href="mailto:info@buildix.ge">info@buildix.ge</Link>
                    </li>
                    <li>
                        <i className="fas fa-phone"></i>
                        <Link href="tel:+995555008110">555 00 81 10</Link>
                    </li>
                </ul>

                <div className="mobile-nav__top">
                    <div className="mobile-nav__social">
                        <SocialLinks />
                    </div>
                </div>
            </div>
        </div >
    )
};

export default MobileNav;
