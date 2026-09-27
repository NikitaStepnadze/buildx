
// service tow
import serviceIcon1 from '../../../public/assets/images/icon/buildix/service-gate-fence.svg';
import serviceIcon2 from '../../../public/assets/images/icon/buildix/service-door.svg';
import serviceIcon3 from '../../../public/assets/images/icon/buildix/service-balcony-railing.svg';
import serviceIcon4 from '../../../public/assets/images/icon/buildix/service-stair-railing.svg';
import type { ServiceOneItem, ServicesThree, ServicesTow, ServingItem } from './type';
import productDesignIcon from '../../../public/assets/images/icon/product-design.png';
import digitalMarketingIcon from '../../../public/assets/images/icon/digital-marketing.png';
import userResearchIcon from '../../../public/assets/images/icon/user-reaserach.png';
import webDesignIcon from '../../../public/assets/images/icon/web-design.png';



export const servicesTow: ServicesTow[] = [
    {
        id: 1,
        icon: serviceIcon1,
        title: 'ეზოს ჭიშკარი და შემოღობვა',
        link: '/portfolio?category=gates-fences',
        description:
            'ვამზადებთ და ვამონტაჟებთ მყარ, ლამაზ ეზოს ჭიშკრებსა და ღობეებს, რომლებიც თქვენს ეზოს დაცვასა და იერს ჰმატებს.',
    },
    {
        id: 2,
        icon: serviceIcon2,
        title: 'სახლის კარი',
        link: '/portfolio?category=doors',
        description:
            'ვამზადებთ საიმედო და ესთეტიკურ შესასვლელ კარებს, რომლებიც აერთიანებს უსაფრთხოებასა და თანამედროვე დიზაინს.',
    },
    {
        id: 3,
        icon: serviceIcon3,
        title: 'აივნის მოაჯირები',
        link: '/portfolio?category=balcony-railings',
        description:
            'ვქმნით მყარ და ელეგანტურ აივნის მოაჯირებს, რომლებიც უსაფრთხოებას და ფასადის სილამაზეს უზრუნველყოფს.',
    },
    {
        id: 4,
        icon: serviceIcon4,
        title: 'შიდა და გარე კიბის მოაჯირები',
        link: '/portfolio?category=stair-railings',
        description:
            'ვამზადებთ შიდა და გარე კიბის მოაჯირებს ინდივიდუალური ზომებითა და დიზაინით, ნებისმიერი ინტერიერისთვის.',
    },
];


//service three
export const servicesThree: ServicesThree[] = [
    {
        id: 1,
        icon: 'icon-information-technology',
        title: 'Managed IT Services',
        description:
            'Managed IT Services offer a comprehensive, cost-effective solution for businesses...',
        link: '/services',
    },
    {
        id: 2,
        icon: 'icon-software-development',
        title: 'Software Development',
        description:
            'We deliver powerful, scalable, and user-focused applications built for performance.',
        link: '/services',
    },
    {
        id: 3,
        icon: 'icon-cybersecurity',
        title: 'Cybersecurity Services',
        description:
            'Protect your business from digital threats with robust cybersecurity frameworks.',
        link: '/services',
    },
    {
        id: 4,
        icon: 'icon-data-security',
        title: 'Incident Responder',
        description:
            'Swift and efficient incident response to minimize damage and recovery time.',
        link: '/services',
    },
    {
        id: 5,
        icon: 'icon-encrypted',
        title: 'Data Encryption',
        description:
            'Advanced encryption techniques to secure sensitive data and maintain compliance.',
        link: '/services',
    },
    {
        id: 6,
        icon: 'icon-planning',
        title: 'Disaster Planning',
        description:
            'Ensure business continuity with disaster recovery and proactive planning.',
        link: '/services',
    },
    {
        id: 7,
        icon: 'icon-cyber-threat',
        title: 'Threat Hunter',
        description:
            'Identify and neutralize emerging threats before they impact operations.',
        link: '/services',
    },
    {
        id: 8,
        icon: 'icon-data-recovery',
        title: 'Data Recovery',
        description:
            'Recover lost or corrupted data efficiently with our expert recovery solutions.',
        link: '/services',
    },
];




export const servicesOneData: ServiceOneItem[] = [
    {
        id: 1,
        icon: productDesignIcon,
        title: 'ეზოს ჭიშკარი და შემოღობვა',
        link: '/portfolio?category=gates-fences',
    },
    {
        id: 2,
        icon: digitalMarketingIcon,
        title: 'სახლის და შესასვლელი კარი',
        link: '/portfolio?category=doors',
    },
    {
        id: 3,
        icon: userResearchIcon,
        title: 'აივნის და ტერასის მოაჯირები',
        link: '/portfolio?category=balcony-railings',
    },
    {
        id: 4,
        icon: webDesignIcon,
        title: 'შიდა და გარე კიბის მოაჯირები',
        link: '/portfolio?category=stair-railings',
    }
];




export const servingItems: ServingItem[] = [
    { id: 1, icon: "icon-information-technology", title: "IT Automation" },
    { id: 2, icon: "icon-technology", title: "Network Solutions" },
    { id: 3, icon: "icon-infrastructure", title: "IT Infrastructure" },
    { id: 4, icon: "icon-talk", title: "Consultant" },
    { id: 5, icon: "icon-it-processing", title: "Delivering Secure" },
    { id: 6, icon: "icon-computer-1", title: "Mobile" },
    { id: 7, icon: "icon-computer-2", title: "Computer" },
    { id: 8, icon: "icon-technology", title: "Television" },
    { id: 9, icon: "icon-efficiency", title: "Energy" },
    { id: 10, icon: "icon-growth", title: "Farming" },
    { id: 11, icon: "icon-technology-1", title: "Industries" },
    { id: 12, icon: "icon-event", title: "Events" },
];
