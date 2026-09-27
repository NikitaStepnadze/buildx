import { StaticImageData } from "next/image";

export interface PortfolioItem {
    id: number;
    img: string | StaticImageData;
    tags: string[];
    title: string;
    link: string;
    className: string;
}
export type ProjectCategorySlug = 'gates-fences' | 'doors' | 'balcony-railings' | 'stair-railings';

export interface ProjectCategory {
    slug: ProjectCategorySlug;
    label: string;
}

export interface Portfolio {
    id: number;
    category: ProjectCategorySlug;
    title: string;
    image: StaticImageData;
}
export interface PortfolioItemThree {
    id: number;
    image: string | StaticImageData;
    title: string;
    link: string;
}

export interface PortfolioOne {
    id: number;
    image: string | StaticImageData;
    title: string;
    description: string;
    link: string;
}



