'use client';
import { useState } from "react";
import { ButtonCta } from "../UI/Button"
import { Sling as Hamburger } from 'hamburger-react'
import HeaderJSON from "../../../data/content/es/header.json";
import Link from "next/link";

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
    const { logo, menu, cta }: SiteConfig = headerData;
    return (
  <header
  className={`min-h-[80px] w-full px-[120px] md:px-[50px] sm:px-[30px] mobile:px-[20px] absolute top-0 bg-white flex flex-col transition-shadow duration-300 ${
    isOpen && "shadow-custom-header"
  }`}
>
  <div className="flex justify-between items-center pt-[16px]">
    <Link className="font-[SharpGrotesk] text-[24px]" href="/">
      {logo}
    </Link>

    {/* Menu de escritorio */}
    <div className="flex gap-16 sm:gap-8 items-center mobile:hidden">
      <ul className="flex gap-8 sm:gap-6">
        {menu.map((e, i) => (
          <li key={i}>
            <a href={e.href}>{e.label}</a>
          </li>
        ))}
      </ul>
      <ButtonCta label={cta.label} href={cta.href} />
    </div>

    {/* Hamburger mobile */}
    <div className="hidden mobile:block">
      <Hamburger toggled={isOpen} toggle={setOpen} />
    </div>
  </div>

  {/* Menu mobile desplegable */}
  <div
    className={`w-full flex flex-col gap-6 overflow-hidden transition-all duration-300 ease-in-out ${
      isOpen ? "max-h-[500px] py-[20px]" : "max-h-0"
    }`}
  >
    <ul className="flex flex-col gap-6">
      {menu.map((e, i) => (
        <li key={i}>
          <a href={e.href}>{e.label}</a>
        </li>
      ))}
    </ul>
  </div>
</header>

    )
}