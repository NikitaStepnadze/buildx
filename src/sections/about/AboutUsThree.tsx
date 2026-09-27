"use client"
import React from 'react';
import aboutImg1 from "../../../public/assets/images/resources/about-three-img-1.jpg"
import aboutImg2 from "../../../public/assets/images/resources/about-three-img-2.jpg"
import aboutImg3 from "../../../public/assets/images/shapes/about-three-shape-5.png"
import aboutImg4 from "../../../public/assets/images/resources/about-three-client-img.jpg"
import aboutImg5 from "../../../public/assets/images/icon/about-three-points-icon-1.png"
import aboutImg6 from "../../../public/assets/images/icon/about-three-points-icon-2.png"
import { useFinrisContext } from '@/components/context/useFinrisContext';
import AdvanceCountUp from '@/components/elements/AdvanceCountUp';
import Link from 'next/link';
import Image from 'next/image';
import TextAnimation from '@/components/elements/TextAnimation';

// Facebook share links can't be iframed, so the popup uses the video embed plugin with the post's permalink
const FB_VIDEO_SHARE_URL = "https://www.facebook.com/share/p/19XoMcAubG/";
const FB_VIDEO_EMBED_URL = `https://www.facebook.com/plugins/video.php?href=${encodeURIComponent(
    "https://www.facebook.com/permalink.php?story_fbid=pfbid0GJCAB1Ru3tr81XdYRv4wDz83qmUmBfeYp9GPDHxQvNfE5DQpHZrxTHAS52mH13TVl&id=61572616491154"
)}&show_text=false&autoplay=true`;

const AboutUsThree: React.FC = () => {
    const { handleVideoClick } = useFinrisContext();
    return (
        <section className="about-three">
            <div className="container">
                <div className="row">
                    <div className="col-xl-7">
                        <div className="about-three__left" >
                            <div className="about-three__img-box">
                                <div className="about-three__img">
                                    <Image src={aboutImg1} width={445} height={480} alt="" />
                                </div>
                                <div className="about-three__img-2">
                                    <Image src={aboutImg2} width={280} height={306} alt="" />
                                </div>
                                <div className="about-three__experience-box">
                                    <div className="about-three__count count-box">
                                        <h3 className="count-text" ><AdvanceCountUp ending={25} /></h3>
                                    </div>
                                    <p className="about-three__count-text">წლიანი <br /> გამოცდილება</p>
                                </div>
                                <div className="about-three__video-link">
                                    <Link href={FB_VIDEO_SHARE_URL}
                                        onClick={(e) => handleVideoClick(e, FB_VIDEO_EMBED_URL)}
                                        className="video-popup">
                                        <div className="about-three__video-icon">
                                            <span className="icon-play-buttton"></span>
                                            <i className="ripple"></i>
                                        </div>
                                    </Link>
                                </div>
                                <div className="about-three__shape-1 rotate-me"></div>
                                <div className="about-three__shape-2"></div>
                                <div className="about-three__shape-3"></div>
                                <div className="about-three__shape-4"></div>
                                <div className="about-three__shape-5 rotate-me">
                                    <Image src={aboutImg3} width={33} height={36} alt="" />
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-xl-5">
                        <div className="about-three__right">
                            <div className="section-title-two text-left sec-title-animation animation-style2">
                                <div className="section-title-two__tagline-box">
                                    <div className="section-title-two__tagline-icon-box">
                                        <div className="section-title-two__tagline-icon-1"></div>
                                        <div className="section-title-two__tagline-icon-2"></div>
                                    </div>
                                    <span className="section-title-two__tagline">ჩვენ შესახებ</span>
                                </div>
                                <h2 className="section-title-two__title title-animation">
                                    <TextAnimation text='გაიცანით Buildix და' textColor='black' isSpan={false} />
                                    <TextAnimation text='ჩვენი შესრულებული სამუშაო.' isSpan={false} textColor='#4A7043' />
                                    <span> </span><br /></h2>
                            </div>
                            <p className="about-three__text">ჩვენ ვართ გუნდი, რომელიც ლითონისგან ქმნის საიმედო და ლამაზ ნაკეთობებს
                                თქვენი სახლისა და ეზოსთვის. ჩვენი მიზანია ხარისხი, სიზუსტე და კლიენტის
                                სრული კმაყოფილება. </p>
                            <div className="about-three__client-and-text-box">
                                <div className="about-three__client-box">
                                    <div className="about-three__client-img">
                                        <Image src={aboutImg4} width={60} height={60} alt="" />
                                    </div>
                                    <div className="about-three__client-content">
                                        <h3>გიორგი ბერიძე</h3>
                                        <p>დამფუძნებელი</p>
                                    </div>
                                </div>
                                <p className="about-three__client-text">კეთილი იყოს თქვენი მობრძანება Buildix-ში! სიამოვნებით
                                    გაგიზიარებთ ჩვენს გამოცდილებასა და ღირებულებებს.</p>
                            </div>
                            <ul className="about-three__points-list list-unstyled">
                                <li>
                                    <div className="icon">
                                        <Image src={aboutImg5} width={60} height={60} alt="" />
                                    </div>
                                    <div className="content">
                                        <h3>მაღალი უსაფრთხოება</h3>
                                        <p>ჩვენი ჭიშკრები, კარები და მოაჯირები მზადდება მყარი ლითონით
                                            და საიმედო საკეტებით.</p>
                                    </div>
                                </li>
                                <li>
                                    <div className="icon">
                                        <Image src={aboutImg6} width={60} height={60} alt="" />
                                    </div>
                                    <div className="content">
                                        <h3>მორგებადი დიზაინი</h3>
                                        <p>ზომა, ფორმა, ფერი და დეკორი — ყველაფერი თქვენს
                                            სურვილზეა მორგებული.</p>
                                    </div>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default AboutUsThree;