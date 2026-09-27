import React from "react";
import img1 from "../../../public/assets/images/resources/why-choose-four-img-1.jpg";
import img2 from "../../../public/assets/images/resources/why-choose-four-img-2.jpg";
import imgShape1 from "../../../public/assets/images/shapes/why-choose-four-img-shape-1.png";
import icon1 from "../../../public/assets/images/icon/why-choose-four-single-icon-1-1.png";
import icon2 from "../../../public/assets/images/icon/why-choose-four-single-icon-1-2.png";
import icon3 from "../../../public/assets/images/icon/why-choose-four-single-icon-1-3.png";
import icon4 from "../../../public/assets/images/icon/why-choose-four-single-icon-1-4.png";
import TextAnimation from "@/components/elements/TextAnimation";
import Image from "next/image";

const WhyChooseA: React.FC = () => {
    return (
        <section className="why-choose-four">
            <div className="container">
                <div className="row">
                    <div className="col-xl-6">
                        <div
                            className="why-choose-four__left"
                            data-aos="slide-right"
                            data-aos-duration="1200"
                            data-aos-delay="300"
                        >
                            <div className="section-title-two text-left sec-title-animation animation-style2">
                                <div className="section-title-two__tagline-box">
                                    <div className="section-title-two__tagline-icon-box">
                                        <div className="section-title-two__tagline-icon-1"></div>
                                        <div className="section-title-two__tagline-icon-2"></div>
                                    </div>
                                    <span className="section-title-two__tagline">
                                        რატომ ჩვენ
                                    </span>
                                </div>
                                <h2 className="section-title-two__title title-animation">
                                    <TextAnimation text='რატომ უნდა აირჩიოთ Buildix' textColor='black' isSpan={false} />
                                    <TextAnimation text='თქვენი სახლისა და ეზოსთვის.' isSpan={false} textColor='#4A7043' />

                                </h2>
                            </div>

                            <p className="why-choose-four__text">
                                ჩვენ ვაერთიანებთ ხარისხიან მასალას, გამოცდილ ოსტატებსა
                                და <br /> ინდივიდუალურ მიდგომას, რათა თითოეული ნაკეთობა
                                წლების განმავლობაში გემსახუროთ.
                            </p>

                            {/* Images */}
                            <div className="why-choose-four__img-box">
                                <div className="why-choose-four__img">
                                    <Image src={img1} width={354} height={354} alt="რატომ ჩვენ" />
                                </div>
                                <div className="why-choose-four__img-shape-1 img-bounce">
                                    <Image src={imgShape1} width={393} height={363} alt="Decorative Shape" />
                                </div>
                                <div className="why-choose-four__img-2">
                                    <Image src={img2} width={358} height={358} alt="ჩვენი გუნდი" />
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* RIGHT SIDE */}
                    <div className="col-xl-6">
                        <div className="why-choose-four__right">
                            <h2 className="why-choose-four__right-title">
                                100% ხარისხის გარანტია
                            </h2>

                            <div className="row">
                                {/* Single Feature */}
                                <div
                                    className="col-xl-6 col-lg-6 col-md-6"
                                    data-aos="fade-up"
                                    data-aos-duration="1200"
                                    data-aos-delay="100"
                                >
                                    <div className="why-choose-four__single">
                                        <div className="why-choose-four__icon">
                                            <Image src={icon1} width={33} height={32} alt="გამძლე მასალა" />
                                        </div>
                                        <h3>გამძლე მასალა</h3>
                                        <p>
                                            ვიყენებთ ხარისხიან ლითონსა და ანტიკოროზიულ
                                            დაფარვას, რომელიც ნებისმიერ ამინდს
                                            უძლებს.
                                        </p>
                                    </div>
                                </div>

                                {/* Single Feature */}
                                <div
                                    className="col-xl-6 col-lg-6 col-md-6"
                                    data-aos="fade-up"
                                    data-aos-duration="1200"
                                    data-aos-delay="200"
                                >
                                    <div className="why-choose-four__single">
                                        <div className="why-choose-four__icon">
                                            <Image src={icon2} width={33} height={32} alt="ზუსტი მონტაჟი" />
                                        </div>
                                        <h3>ზუსტი მონტაჟი</h3>
                                        <p>
                                            ნაკეთობას ვამონტაჟებთ ზუსტად, სუფთად და
                                            შეთანხმებულ ვადაში.
                                        </p>
                                    </div>
                                </div>

                                {/* Single Feature */}
                                <div
                                    className="col-xl-6 col-lg-6 col-md-6"
                                    data-aos="fade-up"
                                    data-aos-duration="1200"
                                    data-aos-delay="300"
                                >
                                    <div className="why-choose-four__single">
                                        <div className="why-choose-four__icon">
                                            <Image src={icon3} width={33} height={32} alt="ინდივიდუალური დიზაინი" />
                                        </div>
                                        <h3>ინდივიდუალური დიზაინი</h3>
                                        <p>
                                            ვქმნით ესკიზს თქვენი სახლის სტილისა და
                                            სურვილების მიხედვით.
                                        </p>
                                    </div>
                                </div>

                                {/* Single Feature */}
                                <div
                                    className="col-xl-6 col-lg-6 col-md-6"
                                    data-aos="fade-up"
                                    data-aos-duration="1200"
                                    data-aos-delay="400"
                                >
                                    <div className="why-choose-four__single">
                                        <div className="why-choose-four__icon">
                                            <Image src={icon4} width={33} height={32} alt="მუდმივი მხარდაჭერა" />
                                        </div>
                                        <h3>მუდმივი მხარდაჭერა</h3>
                                        <p>
                                            მონტაჟის შემდეგაც მზად ვართ დაგეხმაროთ
                                            ნებისმიერ საკითხში. ჩვენი გუნდი ყოველთვის თქვენს გვერდითაა.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* End Right Side */}
                </div>
            </div>
        </section>
    );
};

export default WhyChooseA;
