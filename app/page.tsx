import Image from "next/image";
import "../styles/home.css";
import { JSX } from "react";
import ContactForm from "./components/Form";
import LogoCarousel from "./components/LogoCarousel";
import ArrowIcon from "@/public/icons/arrow-icon-white.svg";

import HomePageContent from "@/data/content/es/home.json"
import { HomeContent } from "./types/home";
import WebsiteHeader from "./components/Layout/Header";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Agencia de desarrollo web - Kalyx",
  description: "Somoms una agencia de desarrollo web y marketing digital ubicada en la ciudad de Crespo, Entre Ríos."
};
type ButtonCtaProps = {
  label?: string;
  href?: string;
};

const DangerH1 = ({text=""}:{text:string}) => {
  'use client'
  return(
    <h1 className="text-center" dangerouslySetInnerHTML={{ __html: text }} />
  )
}
const DangerH2 = ({text=""}:{text:string}) => {
  'use client'
  return(
    <h2 dangerouslySetInnerHTML={{ __html: text }} />
  )
}

// Opción 1: tipo explícito usando JSX.Element
const ButtonCta = ({ label = "Solicitar Cotización", href = "#" }: ButtonCtaProps): JSX.Element => {

  return (
    <a
      className="group bg-orange hover:bg-orange-dark text-white font-bold py-[10px] px-[24px] rounded-full font-light
    transition-all flex items-center justify-center gap-2"
      href={href}
    >
      {label}

      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-[5px]"
        viewBox="0 0 24 24"
        fill="white"
      >
        <path d="M4.00197 13L16.172 13L10.582 18.59L12.002 20L20.002 12L12.002 4.00002L10.592 5.41002L16.172 11L4.00197 11L4.00197 13Z" />
      </svg>
    </a>


  );
};

export default function Home() {
  const { hero, about, web, advertising, cta, contact_section }: HomeContent = HomePageContent

  return (
    <>
    <WebsiteHeader/>
    <div className="flex flex-col">
      <main className="flex flex-col  mx-auto w-full">

        {/* <div className="home-grid section-padding">
          <div className="title-container flex items-end">
            <h1 className="text-center">Agencia de desarrollo web<br className="mobile:hidden" /> y publicidad digital</h1>
          </div>

          <div className="home-grid-low-row">
            <div className="content flex flex-col justify-end md:justify-center gap-12 sm:gap-8 mobile:gap-6 items-start">
              <p className="pr-20 sm:pr-0 mobile:pr-0">Creamos la página web, catálogo o tienda online de tu pyme y la potenciamos con publicidad digital estratégica para atraer clientes reales y hacer crecer tu negocio sin complicaciones.</p>
              <ButtonCta />
            </div>

            <div className="home-grid-image">
              <Image src="/home/image-agency-1.png" alt="Agencia web en Crespo"
                width={544} height={362}
                className="rounded-xl sm:w-full mobile:w-full"
              />
            </div>
          </div>
        </div> */}
        <div className="h-screen flex flex-col items-center justify-center px-[120px] md:px-[50px] sm:px-[30px] mobile:px-[10px]">

          {/* <h1 className="text-center" dangerouslySetInnerHTML={{ __html: hero.title }} /> */}
          <DangerH1 text={hero.title}/>
          <p className="mt-20 mb-10 max-w-[600px] text-center">{hero.subtitle}</p>
          <ButtonCta href={hero.cta.url} label={hero.cta.alt} />


        </div>

        <div className="grid grid-cols-[1fr_60%] sm:grid-cols-1 mobile:grid-cols-1 section-padding gap-12">
          <div className="flex flex-col justify-between sm:justify-start mobile:justify-start sm:gap-12 mobile:gap-6 items-start">
            <div className="py-[8px] px-[20px] font-[SharpGrotesk] shadow bg-white rounded-full">Nosotros</div>

            <Image
              src={about.image.src}
              alt={about.image.alt}
              width={about.image.width}
              height={about.image.height}
              className="rounded-xl mb-20 sm:mb-12 mobile:mb-6 sm:w-full mobile:w-full"
            />
          </div>

          <div>

            <h2>{about.title}</h2>

            <div className="flex justify-between mt-20 sm:mt-12 mobile:mt-6 border-b-2 border-black pb-2">
              <h4 className="text-xl">{about.subtitle.text}</h4>
              <Image
                src={about.subtitle.icon.src}
                alt={about.subtitle.icon.alt}
                width={about.subtitle.icon.width}
                height={about.subtitle.icon.height}
              />
            </div>

            <ul className="grid grid-cols-2 md:grid-cols-1 mobile:grid-cols-1 gap-12 md:gap-6 my-12">
              {
                about.content.map((e, i) => (
                  <li key={i} className="flex flex-col gap-4">
                    <Image
                      src={e.icon?.src ?? ''}
                      alt={e.icon?.alt ?? ''}
                      width={e.icon?.width}
                      height={e.icon?.height}
                    />
                    <h3>{e.title}</h3>
                    <p>{e.subtitle}</p>
                  </li>
                ))
              }
            </ul>


          </div>
        </div>


        <div id={web.section_id} className="flex flex-col items-start section-margin bg-green text-white
      py-[50px] px-[130px] rounded-[30px] mobile:rounded-none
      
      ">
          <div className="py-[8px] px-[20px] font-[SharpGrotesk] shadow
 rounded-full bg-green-light mb-8">{web.section_title}</div>
          <h2 className="max-w-[60%] mobile:max-w-full">{web.title}</h2>


          <ul className="grid grid-cols-3 gap-20 mt-20
          
          mobile:grid-cols-1 mobile:gap-6 mobile:mt-10">
            {
              web.content.map((e, i) => (
                <li key={i} className="flex flex-col gap-4">
                  <span className="text-[50px]  font-[SharpGrotesk]">{`0${i + 1}`}</span>
                  <h3>{e.title}</h3>
                  <p>{e.subtitle}</p>
                </li>
              ))
            }
          </ul>
        </div>







        <div id={advertising.section_id}  className="grid grid-cols-[1fr_60%] sm:grid-cols-1 mobile:grid-cols-1 section-padding gap-12">
          <div className="flex flex-col justify-between sm:justify-start mobile:justify-start sm:gap-12 mobile:gap-6 items-start">
            <div className="py-[8px] px-[20px] font-[SharpGrotesk] shadow bg-white rounded-full mb-4">{advertising.section_title}</div>
            <Image
                src={advertising.image.src}
                alt={advertising.image.alt}
                width={advertising.image.width}
                height={advertising.image.height}
              />

          </div>

          <div>

            <h2>{advertising.title}</h2>

<ul className="grid grid-cols-2 md:grid-cols-1 mobile:grid-cols-1 gap-12 md:gap-6 my-12">
  {
              advertising.content.map((e, i) => (
                <li key={i} className="flex flex-col gap-4">
                  <Image
                      src={e.icon?.src ?? ''}
                      alt={e.icon?.alt ?? ''}
                      width={e.icon?.width}
                      height={e.icon?.height}
                    /><h3>{e.title}</h3>
                  <p>{e.subtitle}</p>
                </li>
              ))
            }
</ul>
           


          </div>
        </div>






        <LogoCarousel />

        <div id={cta.section_id}  className="section-padding grid grid-cols-2 mobile:grid-cols-1 mobile:gap-12">

          <div className="flex flex-col ">
            {/* <h2 dangerouslySetInnerHTML={{ __html: cta.title }} /> */}
            <DangerH2 text={cta.title}/>
          
            <div className="mt-24 mobile:mt-8 flex flex-col items-start">
              <p className="pr-20 sm:pr-0 mobile:pr-0 mb-8">{cta.subtitle}</p>
              <ButtonCta href={cta.cta.url} label={cta.cta.alt} /></div>
            </div>

          <div className="flex justify-end">
            <Image
              src={cta.image.src}
              alt={cta.image.alt}
              width={cta.image.width}
              height={cta.image.height}
              className="rounded-xl mb-20 sm:mb-12 mobile:mb-6 sm:w-full mobile:w-full"
            />
          </div>
        </div>
      </main>



      <footer id={contact_section.section_id} className="bg-[#232323] flex flex-col gap-[44px]
      px-[120px] md:px-[50px] sm:px-[30px] mobile:px-[20px]
      pt-[100px] md:pt-[80px] sm:pt-[50px] mobile:pt-[20px]
      pb-[40px] md:pb-[30px] sm:pb-[20px] mobile:pb-[20px]
       
      ">
        <section className="grid grid-cols-2 sm:grid-cols-1 mobile:grid-cols-1 mobile:gap-6 ">
          <div className="flex flex-col items-start">
          <div className="py-[8px] px-[20px] font-[SharpGrotesk] shadow bg-white rounded-full mb-4">{contact_section.section_title}</div>
          <h2 className="text-white">{contact_section.title}</h2>
        </div>

        <div>
          <ContactForm  form={contact_section.form}/>
        </div>
        </section>

        <div className="flex justify-center mt-16 pt-6 border-t-[1px] border-white">
         <span className="text-lg text-white font-[SharpGrotesk]">Kalyx - 2025</span> 
        </div>
      </footer>
    </div>
    </>
  );
}
