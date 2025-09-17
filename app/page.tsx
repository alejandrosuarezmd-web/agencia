import Image from "next/image";
import "../styles/home.css";
import { JSX } from "react";
import ContactForm from "./components/Form";
import LogoCarousel from "./components/LogoCarousel";
import ArrowIcon from "@/public/icons/arrow-icon-white.svg";


type ButtonCtaProps = {
  label?: string;
  href?: string;
};

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
  return (
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
      <div className="h-screen flex flex-col items-center justify-center">

          <h1 className="text-center">Agencia de desarrollo web<br className="mobile:hidden" /> y publicidad digital</h1>
          <p className="mt-20 mb-10 max-w-[600px] text-center">Creamos la página web, catálogo o tienda online de tu pyme y la potenciamos con publicidad digital estratégica para atraer clientes reales y hacer crecer tu negocio sin complicaciones.</p>
          <ButtonCta href="#contactanos" />


        </div>
        <div className="grid grid-cols-[1fr_60%] sm:grid-cols-1 mobile:grid-cols-1 section-padding gap-12">
          <div className="flex flex-col justify-between sm:justify-start mobile:justify-start sm:gap-12 mobile:gap-6 items-start">
            <div className="py-[8px] px-[20px] font-[SharpGrotesk] shadow bg-white rounded-full">Nosotros</div>

            <Image
              src="/home/image-agency-1.png"
              alt="Agencia web en Crespo"
              width={544}
              height={362}
              className="rounded-xl mb-20 sm:mb-12 mobile:mb-6 sm:w-full mobile:w-full"
            />
          </div>

          <div>

            <h2>Trabajamos con empresas que quieren potenciar su alcance.</h2>

            <div className="flex justify-between mt-20 sm:mt-12 mobile:mt-6 border-b-2 border-black pb-2">
              <h4 className="text-xl">¿Que es lo que hacemos?</h4>
              <Image 
              src="/icons/about-icon-3.png" 
              alt="Agencia de marketing digital crespo"
              width={36} height={36}
              />
            </div>

            <div className="grid grid-cols-2 md:grid-cols-1 mobile:grid-cols-1 gap-12 md:gap-6 my-12">
              <div className="flex flex-col gap-4">
                <Image 
              src="/icons/about-icon-1.png" 
              alt="Icono 1"
              width={45} height={45}
              />
                <h3>Acompañamos a tu negocio en cada paso</h3>
                <p>Desde el desarrollo técnico hasta la gestión de campañas publicitarias, te brindamos soluciones digitales completas para que tu pyme crezca online sin complicaciones.</p>
              </div>

              <div className="flex flex-col gap-4">
                <Image 
              src="/icons/about-icon-2.png" 
              alt="Icono 2"
              width={45} height={45}
              />
                <h3>Acompañamos a tu negocio en cada paso</h3>
                <p>Desde el desarrollo técnico hasta la gestión de campañas publicitarias, te brindamos soluciones digitales completas para que tu pyme crezca online sin complicaciones.</p>
              </div>

            </div>


          </div>
        </div>


        <div className="flex flex-col items-start section-margin bg-green text-white
      py-[50px] px-[130px] rounded-[30px] mobile:rounded-none
      
      ">
          <div className="py-[8px] px-[20px] font-[SharpGrotesk] shadow
 rounded-full bg-green-light mb-8">Servicios</div>
          <h2 className="max-w-[60%] mobile:max-w-full">Soluciones digitales integrales que hacen crecer tu empresa.</h2>

          <div className="grid grid-cols-3 gap-20 mt-20
          
          mobile:grid-cols-1 mobile:gap-6 mobile:mt-10
          ">
            <div className="flex flex-col gap-4">
              <span className="text-[50px]  font-[SharpGrotesk]">01</span>
              <h3>Desarrollo Web</h3>
              <p>Diseñamos una web a medida con la estética de tu marca y pensada para que sea una canal más de ventas, no un accesorio.</p>
            </div>

            <div className="flex flex-col gap-4">
              <span className="text-[50px] font-[SharpGrotesk]">02</span>
              <h3>Catálogo Online</h3>
              <p>Nos ocupamos de diseñar tu tienda para que tus clientes puedan comprar de forma rápida y sencilla, para que vuelvan a comprar de manera recurrente.</p>
            </div>

            <div className="flex flex-col gap-4">
              <span className="text-[50px] font-[SharpGrotesk]">03</span>
              <h3>Tienda Online</h3>
              <p>Hacemos campañas orientadas a ventas, quizás ya estás haciendo anuncios y tenés el problema de recibir muchas consultas y pocas venteas, te tenemos cubierto.</p>
            </div>
          </div>

        </div>


       




        <div className="grid grid-cols-[1fr_60%] sm:grid-cols-1 mobile:grid-cols-1 section-padding gap-12">
          <div className="flex flex-col justify-between sm:justify-start mobile:justify-start sm:gap-12 mobile:gap-6 items-start">
            <div className="py-[8px] px-[20px] font-[SharpGrotesk] shadow bg-white rounded-full mb-4">Marketing Digital</div>
<Image src="/home/digital-ads.png" alt="Agencia de marketing digital crespo"
                width={553} height={677}
                className="sm:w-full mobile:w-full"
              />
            
          </div>

          <div>

            <h2>Trabajamos con empresas que quieren potenciar su alcance.</h2>

            <div className="flex justify-between mt-20 sm:mt-12 mobile:mt-6 border-b-2 border-black pb-2">
              <h4 className="text-xl">¿Que es lo que hacemos?</h4>
              <Image 
              src="/icons/about-icon-3.png" 
              alt="Agencia de marketing digital en Crespo"
              width={36} height={36}
              />
            </div>

            <div className="grid grid-cols-2 md:grid-cols-1 mobile:grid-cols-1 gap-12 md:gap-6 my-12">
              <div className="flex flex-col gap-4">
                <Image 
              src="/icons/rrss-icon.png" 
              alt="Instagram Ads"
              width={45} height={45}
              />
                <h3>Publicidad en Redes Sociales</h3>
                <p>Desde el desarrollo técnico hasta la gestión de campañas publicitarias, te brindamos soluciones digitales completas para que tu pyme crezca online sin complicaciones.</p>
              </div>

              <div className="flex flex-col gap-4">
                <Image 
              src="/icons/google-icon.png" 
              alt="Google Ads"
              width={45} height={45}
              />
                <h3>Publicidad en Google</h3>
                <p>Desde el desarrollo técnico hasta la gestión de campañas publicitarias, te brindamos soluciones digitales completas para que tu pyme crezca online sin complicaciones.</p>
              </div>

            </div>


          </div>
        </div>

        


  

        <LogoCarousel />

         <div className="section-padding grid grid-cols-2 mobile:grid-cols-1 mobile:gap-12">
          
          <div className="flex flex-col ">
            <h2>¿Sabes cuánto está invirtiendo<br className="mobile:hidden" /> tu competencia en Google Ads?</h2>
            <div className="mt-24 mobile:mt-8 flex flex-col items-start">
              <p className="pr-20 sm:pr-0 mobile:pr-0 mb-8">Solicita tu análisis gratuito de tu industria y recibe un informe con el gasto estimado de tu competencia, el costo por clic en tu sector y oportunidades para captar más clientes pagando menos.</p>
              <ButtonCta label="Solicitar reporte gratuito" href="#contactanos"/>
            </div>
          </div>

          <div className="flex justify-end">
            <Image
              src="/google-ads-image.png"
              alt="Agencia de google ads"
              width={538}
              height={679}
              className="rounded-xl mb-20 sm:mb-12 mobile:mb-6 sm:w-full mobile:w-full"
            />
          </div>
        </div>
      </main>



      <footer id="contactanos" className="bg-[#373737] grid grid-cols-2 sm:grid-cols-1 mobile:grid-cols-1 mobile:gap-6 section-padding ">
        <div>
          <h2 className="text-white">Completá el formulario y nos pondremos en contacto a la brevedad</h2>
        </div>

        <div>
        <ContactForm />
        </div>
      </footer>
    </div>
  );
}
