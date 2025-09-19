'use client';
import { Dispatch, SetStateAction, useEffect, useState } from "react";
import { ButtonCta } from "../UI/Button"
import { Sling as Hamburger } from 'hamburger-react'
import HeaderJSON from "../../../data/content/es/header.json";

type MenuItem = {
    href: string;
    label: string;
};

type CTA = {
    href: string;
    label: string;
};

type SiteConfig = {
    logo: string;
    menu: MenuItem[];
    cta: CTA;
};



export default function WebsiteHeader() {
    const [isOpen, setOpen] = useState(false)
    const headerData = HeaderJSON;
    const { logo, menu, cta } = headerData;
    return (
        <header className="min-h-[80px] w-full px-[120px] md:px-[50px] sm:px-[30px] mobile:px-[12px] absolute top-0  bg-white flex flex-col">
            <div className="flex justify-between items-center">
                <span className="font-[SharpGrotesk]">{logo}</span>

                <div className="flex gap-16 sm:gap-8 items-center mobile:hidden pt-4">
                    <ul className="flex gap-8 sm:gap-6">
                        {
                            menu.map((e, i) => <li key={i}><a href={e.href}>{e.label}</a></li>)
                        }
                    </ul>

                    <ButtonCta label={cta.label} href={cta.href} />
                </div>

                <div className="hidden mobile:block">
                    <HamburgerMenu isOpen={isOpen} setOpen={setOpen} />

                </div>
            </div>

            {
                isOpen &&
                <div className="w-full top-[80px] flex flex-col">
                    <ul className="flex flex-col gap-6">
                        <li><a href="#">Desarrollo Web</a></li>
                        <li><a href="#">Publicidad Digital</a></li>
                        <li><a href="#">Contacto</a></li>
                    </ul>
                </div>
            }
        </header>
    )
}

const HamburgerMenu = ({ isOpen, setOpen }: { isOpen: boolean, setOpen: Dispatch<SetStateAction<boolean>> }) => {
    return (<Hamburger toggled={isOpen} toggle={setOpen} />)
}