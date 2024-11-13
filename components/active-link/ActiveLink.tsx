"use client"; // generado del lado del cliente
import Link from "next/link";
import { usePathname } from "next/navigation";

import style from './activeLink.module.css';

interface props  {
    path: string;
    text: string
}

export const ActiveLink = ({path, text}: props) => {
    const pathName = usePathname();

    return (
        <>
            <Link 
                className={`${style.link} ${(pathName === path && style['active-link'])}`} 
                href={path}>{text}</Link>   
        </>
    )
}

