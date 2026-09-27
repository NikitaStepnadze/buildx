"use client"
import TextAnimation from "@/components/elements/TextAnimation";
import { portfolioPageData, projectCategories } from "@/contents/portfolio/portfolio";
import { Portfolio, ProjectCategorySlug } from "@/contents/portfolio/portfolioType";
import { AnimatePresence, motion } from "framer-motion";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";

const categoryLabel = (slug: ProjectCategorySlug): string =>
    projectCategories.find((c) => c.slug === slug)?.label ?? "";

const toCategory = (value: string | null): ProjectCategorySlug | null =>
    projectCategories.some((c) => c.slug === value) ? (value as ProjectCategorySlug) : null;

interface Props {
    initialCategory: string | null;
}

const PortfolioMain: React.FC<Props> = ({ initialCategory }) => {
    // Active filter is mirrored in the URL (?category=...) so service cards can link straight to it
    const [activeCategory, setActiveCategory] = useState<ProjectCategorySlug | null>(toCategory(initialCategory));

    // Sync when navigating to this page again with a different ?category=
    useEffect(() => {
        setActiveCategory(toCategory(initialCategory));
    }, [initialCategory]);

    const projects = activeCategory
        ? portfolioPageData.filter((item) => item.category === activeCategory)
        : portfolioPageData;

    const [lightboxIndex, setLightboxIndex] = useState<number>(-1);

    const selectCategory = (slug: ProjectCategorySlug | null) => {
        setActiveCategory(slug);
        window.history.replaceState(null, "", slug ? `?category=${slug}` : window.location.pathname);
    };

    const filters: { slug: ProjectCategorySlug | null; label: string; count: number }[] = [
        { slug: null, label: "ყველა", count: portfolioPageData.length },
        ...projectCategories.map((c) => ({
            slug: c.slug,
            label: c.label,
            count: portfolioPageData.filter((item) => item.category === c.slug).length,
        })),
    ];

    return (
        <section className="portfolio-page">
            <div className="container">
                {/* Section Title */}
                <div className="section-title text-center sec-title-animation animation-style1">
                    <div className="section-title__tagline-box justify-content-center">
                        <div className="section-title__tagline-icon-box">
                            <div className="section-title__tagline-icon-1"></div>
                            <div className="section-title__tagline-icon-2"></div>
                        </div>
                        <span className="section-title__tagline">ჩვენი პორტფოლიო</span>
                    </div>
                    <h2 className="section-title__title title-animation">
                        <TextAnimation text="გაეცანით ჩვენს შესრულებულ პროექტებს და ნახეთ," textColor="black" />
                        <TextAnimation text="როგორ ვქმნით საიმედო ნაკეთობებს." textColor="black" />
                    </h2>
                </div>

                {/* Category Filter */}
                <div className="portfolio-page__filter" role="group" aria-label="პროექტების კატეგორიები">
                    {filters.map((f) => (
                        <button
                            key={f.slug ?? "all"}
                            type="button"
                            className={`portfolio-page__filter-btn${activeCategory === f.slug ? " active" : ""}`}
                            aria-pressed={activeCategory === f.slug}
                            onClick={() => selectCategory(f.slug)}
                        >
                            {f.label} <span className="portfolio-page__filter-count">{f.count}</span>
                        </button>
                    ))}
                </div>

                {/* Portfolio Grid */}
                <ul className="row list-unstyled">
                    <AnimatePresence mode="popLayout">
                        {projects.map((item: Portfolio, i) => (
                            <motion.li
                                key={item.id}
                                layout
                                initial={{ opacity: 0, y: 30 }}
                                animate={{ opacity: 1, y: 0 }}
                                exit={{ opacity: 0, scale: 0.95 }}
                                transition={{ duration: 0.4 }}
                                className="col-xl-6 col-lg-6 col-md-6"
                            >
                                <div className="portfolio-page__single">
                                    <div className="portfolio-page__single-inner">
                                        {/* Case Info */}
                                        <div className="portfolio-page__case-box">
                                            <p className="portfolio-page__case-text">
                                                პროექტი <span className="portfolio-page__case-count"></span>
                                            </p>
                                            <div className="portfolio-page__case-border"></div>
                                        </div>

                                        {/* Portfolio Content */}
                                        <div className="portfolio-page__content">
                                            <p className="portfolio-page__sub-title">#{categoryLabel(item.category)}</p>
                                            <h3 className="portfolio-page__title">{item.title}</h3>

                                            <button
                                                type="button"
                                                className="portfolio-page__img"
                                                onClick={() => setLightboxIndex(i)}
                                                aria-label={`${item.title} — ფოტოს გადიდება`}
                                            >
                                                <Image
                                                    src={item.image}
                                                    width={410}
                                                    height={450}
                                                    sizes="(max-width: 767px) 100vw, 410px"
                                                    alt={item.title}
                                                />
                                            </button>

                                            <div className="portfolio-page__btn-box">
                                                <button
                                                    type="button"
                                                    className="portfolio-page__btn thm-btn"
                                                    onClick={() => setLightboxIndex(i)}
                                                >
                                                    <span className="icon-right"></span> ფოტოს ნახვა
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </motion.li>
                        ))}
                    </AnimatePresence>
                </ul>
            </div>

            <Lightbox
                open={lightboxIndex >= 0}
                close={() => setLightboxIndex(-1)}
                index={lightboxIndex}
                slides={projects.map((p) => ({ src: p.image.src, alt: p.title }))}
            />
        </section>
    );
};

export default PortfolioMain;
