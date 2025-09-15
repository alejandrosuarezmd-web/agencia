import Image from "next/image";
import "../styles/home.css";
import { JSX } from "react";
import ContactForm from "./components/Form";
import LogoCarousel from "./components/LogoCarousel";



type ButtonCtaProps = {
  label?: string;
};

// Opción 1: tipo explícito usando JSX.Element
const ButtonCta = ({ label = "Solicitar Cotización" }: ButtonCtaProps): JSX.Element => {
  return (
    <button className="bg-orange hover:bg-orange-dark text-white font-bold py-[10px] px-[24px] rounded-full font-light
    transition-all
">
      {label}
    </button>
  );
};

export default function Home() {
  return (
    <div className="flex flex-col">
      <main className="flex flex-col  mx-auto w-full">

        <div className="home-grid section-padding">
          <div className="title-container flex items-end">
            <h1>Agencia de desarrollo web<br className="mobile:hidden" /> y publicidad digital</h1>
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
              <span>icon</span>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-1 mobile:grid-cols-1 gap-12 md:gap-6 my-12">
              <div className="flex flex-col gap-4">
                <span>icono</span>
                <h3>Acompañamos a tu negocio en cada paso</h3>
                <p>Desde el desarrollo técnico hasta la gestión de campañas publicitarias, te brindamos soluciones digitales completas para que tu pyme crezca online sin complicaciones.</p>
              </div>

              <div className="flex flex-col gap-4">
                <span>icono</span>
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
              <span>icon</span>
              <h3>Desarrollo Web</h3>
              <p>Diseñamos una web a medida con la estética de tu marca y pensada para que sea una canal más de ventas, no un accesorio.</p>
            </div>

            <div className="flex flex-col gap-4">
              <span>icon</span>
              <h3>Tienda Online</h3>
              <p>Nos ocupamos de diseñar tu tienda para que tus clientes puedan comprar de forma rápida y sencilla, para que vuelvan a comprar de manera recurrente.</p>
            </div>

            <div className="flex flex-col gap-4">
              <span>icon</span>
              <h3>Publicidad Digital</h3>
              <p>Hacemos campañas orientadas a ventas, quizás ya estás haciendo anuncios y tenés el problema de recibir muchas consultas y pocas venteas, te tenemos cubierto.</p>
            </div>
          </div>

        </div>

        <div className="offer-grid section-padding">
          <div className="title-container flex items-end">
            <h2>¿Sabes cuánto está invirtiendo<br className="mobile:hidden" /> tu competencia en Google Ads?</h2>
          </div>

          <div className="offer-grid-low-row">
            <div className="content flex flex-col justify-end md:justify-center gap-12 sm:gap-8 mobile:gap-6 items-start">
              <p className="pr-20 sm:pr-0 mobile:pr-0">Solicita tu análisis gratuito de tu industria y recibe un informe con el gasto estimado de tu competencia, el costo por clic en tu sector y oportunidades para captar más clientes pagando menos.</p>
              <ButtonCta label="Solicitar reporte gratuito" />
            </div>

            <div className="offer-grid-image">
              <Image src="/home/image-agency-1.png" alt="Agencia web en Crespo"
                width={544} height={362}
                className="rounded-xl sm:w-full mobile:w-full"
              />
            </div>
          </div>
        </div>

        <LogoCarousel />
      </main>



      <footer className="bg-[#373737] grid grid-cols-2 sm:grid-cols-1 mobile:grid-cols-1 mobile:gap-6 section-padding ">
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
