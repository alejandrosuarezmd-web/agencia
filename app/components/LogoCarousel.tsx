import logos from "@/data/logos.json"
import "@/styles/carousel.css"
 import Image from "next/image";

export default function LogoCarousel(){

    return (
        <div className="carousel-wrapper">
           {
            logos.map((logo, i) =>  (
                <div key={i} className={`item item${i+1}`}>
                    <Image 
                        alt={logo.alt} src={logo.src} height={logo.height} width={logo.width}
                    />
                </div>
            ))
            }
         
        </div>
    )
}


