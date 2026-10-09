"use client"
import React, { useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import type { Swiper as SwiperType } from 'swiper';
import { Autoplay, EffectFade, Navigation } from 'swiper/modules';
import Link from 'next/link';

interface BannerSliderItem {
    id: number;
    title: string;
    titleHighlight: string;
    description: string;
    buttonText: string;
    buttonLink: string;
}
const sliderItems: BannerSliderItem[] = [
    {
        id: 1,
        title: 'საიმედო ნაკეთობები',
        titleHighlight: 'თქვენი სახლისა და ეზოსთვის',
        description: 'ვამზადებთ და ვამონტაჟებთ ეზოს ჭიშკრებს, სახლის კარებს, აივნისა და კიბის მოაჯირებს და ვასრულებთ ეზოს შემოღობვას.',
        buttonText: 'დაიწყეთ ახლავე',
        buttonLink: '/contact',
    },
    {
        id: 2,
        title: 'საიმედო ნაკეთობები',
        titleHighlight: 'თქვენი სახლისა და ეზოსთვის',
        description: 'ვამზადებთ და ვამონტაჟებთ ეზოს ჭიშკრებს, სახლის კარებს, აივნისა და კიბის მოაჯირებს და ვასრულებთ ეზოს შემოღობვას.',
        buttonText: 'დაიწყეთ ახლავე',
        buttonLink: '/contact',
    },
    {
        id: 3,
        title: 'საიმედო ნაკეთობები',
        titleHighlight: 'თქვენი სახლისა და ეზოსთვის',
        description: 'ვამზადებთ და ვამონტაჟებთ ეზოს ჭიშკრებს, სახლის კარებს, აივნისა და კიბის მოაჯირებს და ვასრულებთ ეზოს შემოღობვას.',
        buttonText: 'დაიწყეთ ახლავე',
        buttonLink: '/contact',
    }
];

const BannerTwo: React.FC = () => {
    const [swiperInstance, setSwiperInstance] = useState<SwiperType | null>(null);
    const [activeIndex, setActiveIndex] = useState(0);
    return (
        <section className="main-slider">
            <div className="main-slider__carousel owl-carousel owl-theme">
                <Swiper
                    modules={[Navigation, Autoplay, EffectFade]}
                    spaceBetween={0}
                    effect="fade"
                    slidesPerView={1}
                    autoplay={{
                        delay: 6000,
                        disableOnInteraction: false,
                    }}
                    loop={true}
                    speed={1000}
                    onSlideChange={(swiper) => setActiveIndex(swiper.realIndex)}
                    onSwiper={setSwiperInstance}
                >
                    {sliderItems.map((item: BannerSliderItem, index) => (
                        <SwiperSlide
                            key={item.id}
                        >
                            <div className={`item ${index === activeIndex ? "active" : ""}`}>
                                <div className="container">
                                    <div className="main-slider__content">
                                        <div className="main-slider__title-box">
                                            <h1 className="main-slider__title">საიმედო ნაკეთობები <br /> <span>თქვენი სახლისა <br />
                                                და ეზოსთვის</span></h1>
                                            <div className="main-slider__btn">
                                                <Link href="/contact"><span className="icon-right"></span>დაიწყეთ ახლავე</Link>
                                            </div>
                                        </div>
                                        <p className="main-slider__text">ვამზადებთ და ვამონტაჟებთ ეზოს ჭიშკრებს, სახლის კარებს,
                                            <br /> აივნისა და შიდა და გარე კიბის მოაჯირებს,
                                            <br /> ასევე ვასრულებთ ეზოს შემოღობვას.</p>
                                    </div>
                                </div>
                            </div>
                        </SwiperSlide>
                    ))}
                </Swiper>
                <div className="owl-nav " style={{ zIndex: 111 }}>
                    <button
                        onClick={() => swiperInstance?.slidePrev()}
                        className="owl-prev"
                        aria-label="Previous Slide"
                        type="button"
                    >
                        <span className="icon-right-arrow-1"></span>
                    </button>
                    <button
                        onClick={() => swiperInstance?.slideNext()}
                        className="owl-next"
                        aria-label="Next Slide"
                        type="button"
                    >
                        <span className="icon-right-arrow-1"></span>
                    </button>
                </div>

            </div>
        </section>
    );
};

export default BannerTwo;