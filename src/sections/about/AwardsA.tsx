import React from "react";
import awardImg1 from "../../../public/assets/images/resources/awards-one-img-1.jpg";
import awardImg2 from "../../../public/assets/images/resources/awards-one-img-2.jpg";
import TextAnimation from "@/components/elements/TextAnimation";
import Image from "next/image";
import AdvanceCountUp from "@/components/elements/AdvanceCountUp";

const AwardsA: React.FC = () => {
    return (
        <section className="awards-one">
            <div className="container">
                <div className="row">
                    {/* LEFT SIDE */}
                    <div className="col-xl-7">
                        <div
                            className="awards-one__left"
                            data-aos="fade-right"
                            data-aos-duration="1200"
                            data-aos-delay="300"
                        >
                            {/* Section Title */}
                            <div className="section-title-two text-left sec-title-animation animation-style2">
                                <div className="section-title-two__tagline-box">
                                    <div className="section-title-two__tagline-icon-box">
                                        <div className="section-title-two__tagline-icon-1"></div>
                                        <div className="section-title-two__tagline-icon-2"></div>
                                    </div>
                                    <span className="section-title-two__tagline">მიღწევები</span>
                                </div>
                                <h2 className="section-title-two__title title-animation">
                                    <TextAnimation text={`ვამაყობთ ჩვენი სამუშაოთი და`} textColor='black' isSpan={false} />
                                    <TextAnimation text='კლიენტების ნდობით.' isSpan={false} textColor='#4A7043' />
                                </h2>
                            </div>

                            {/* Image Box */}
                            <div className="awards-one__img-box">
                                <div className="awards-one__img">
                                    <Image src={awardImg1} width={524} height={557} alt="ჩვენი სამუშაო" />
                                </div>

                                <div className="awards-one__img-2">
                                    <Image src={awardImg2} width={283} height={294} alt="ჩვენი სამუშაო" />

                                    <div className="awards-one__experience-box">
                                        <div className="awards-one__count count-box">
                                            <h3 className="count-text" >
                                                <AdvanceCountUp ending={40} />
                                            </h3>
                                            <span>+</span>
                                        </div>
                                        <p className="awards-one__count-text">ნაკეთობის ტიპი</p>
                                    </div>

                                    {/* Shapes */}
                                    <div className="awards-one__shape-1"></div>
                                    <div className="awards-one__shape-2"></div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* RIGHT SIDE */}
                    <div className="col-xl-5">
                        <div className="awards-one__right">
                            <ul className="awards-one__awards-list list-unstyled">
                                {/* SINGLE ITEM */}
                                <li>
                                    <div className="icon">
                                        <span className="icon-trophy-1"></span>
                                    </div>
                                    <div className="content">
                                        <h3>ხარისხი, რომელსაც ენდობიან</h3>
                                        <p>
                                            ჩვენი ნაკეთობები გამოირჩევა სიმტკიცით, სიზუსტითა
                                            და გამძლეობით.
                                        </p>
                                        <div className="awards-one__tag-and-date">
                                            <div className="awards-one__tag">
                                                <p>
                                                    <span className="icon-sparkle"></span>ხარისხი
                                                </p>
                                            </div>
                                            <div className="awards-one__date">
                                                <p>
                                                    <span className="fas fa-calendar-alt"></span> 15 აგვისტო,
                                                    2025
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                </li>

                                {/* SINGLE ITEM */}
                                <li>
                                    <div className="icon">
                                        <span className="icon-trophy-1"></span>
                                    </div>
                                    <div className="content">
                                        <h3>გამორჩეული მომსახურება</h3>
                                        <p>
                                            კლიენტებს ვეხმარებით პირველი კონსულტაციიდან
                                            მონტაჟის დასრულებამდე.
                                        </p>
                                        <div className="awards-one__tag-and-date">
                                            <div className="awards-one__tag">
                                                <p>
                                                    <span className="icon-sparkle"></span>სანდოობა
                                                </p>
                                            </div>
                                            <div className="awards-one__date">
                                                <p>
                                                    <span className="fas fa-calendar-alt"></span> 20 ივლისი,
                                                    2025
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                </li>

                                {/* SINGLE ITEM */}
                                <li>
                                    <div className="icon">
                                        <span className="icon-trophy-1"></span>
                                    </div>
                                    <div className="content">
                                        <h3>ინდივიდუალური დიზაინი</h3>
                                        <p>
                                            თითოეულ ჭიშკარს, კარსა და მოაჯირს ვქმნით
                                            უნიკალური დიზაინით.
                                        </p>
                                        <div className="awards-one__tag-and-date">
                                            <div className="awards-one__tag">
                                                <p>
                                                    <span className="icon-sparkle"></span>დიზაინი
                                                </p>
                                            </div>
                                            <div className="awards-one__date">
                                                <p>
                                                    <span className="fas fa-calendar-alt"></span> 15 აგვისტო,
                                                    2025
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                </li>
                            </ul>
                        </div>
                    </div>
                    {/* END RIGHT SIDE */}
                </div>
            </div>
        </section>
    );
};

export default AwardsA;
