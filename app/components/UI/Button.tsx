import { JSX } from "react";

type ButtonCtaProps = {
  label?: string;
  href?: string;
};

export const ButtonCta = ({ label = "Solicitar Cotización", href = "#" }: ButtonCtaProps): JSX.Element => {

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


