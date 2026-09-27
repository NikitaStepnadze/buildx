"use client"
import React from 'react';
import { MAIN_LINKS } from '@/contents/nav/nav';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

const ManuList: React.FC = () => {
    const pathName: string = usePathname();

    return (
        <ul className="main-menu__list">
            {
                MAIN_LINKS.map(Item => <li key={Item?.id} className={`${pathName === Item?.link ? 'current' : ''}`}>
                    <Link href={Item?.link}>{Item?.value}</Link>
                </li>)
            }
        </ul>
    );
}
export default ManuList;
