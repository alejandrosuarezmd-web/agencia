// Reutilizables
type Cta = {
  alt: string;
  url: string;
};

type Icon = {
  alt: string;
  src: string;
  width: number;
  height: number;
};

type Image = {
  alt: string;
  src: string;
  width: number;
  height: number;
};

type ContentItem = {
  title: string;
  subtitle: string;
  icon?: Icon;
};

type FormField = {
  name: string;
  type: string; // "text" | "email" | "textarea" etc.
  placeholder: string;
  required: boolean;
};

// Secciones
type HeroSection = {
  title: string;
  subtitle: string;
  cta: Cta;
};

type AboutSection = {
  section_title: string;
  title: string;
  subtitle: {
    text: string;
    icon: Icon;
  };
  content: ContentItem[];
  image: Image;
};

type WebSection = {
  section_id: string;
  section_title: string;
  title: string;
  content: {
    title: string;
    subtitle: string;
  }[];
};

type AdvertisingSection = {
  section_id: string;
  section_title: string;
  title: string;
  content: ContentItem[];
  image: Image;
};

type CtaSection = {
  section_id: string;
  title: string; // Puede incluir HTML string
  subtitle: string;
  cta: Cta;
  image: Image;
};

export type HomeForm = {
    fields: FormField[];
    submit: string;
  };

type ContactSection = {
  section_id: string;
  section_title: string;
  title: string;
  subtitle: string;
  form: {
    fields: FormField[];
    submit: string;
  };
};

// Root
export type HomeContent = {
  hero: HeroSection;
  about: AboutSection;
  web: WebSection;
  advertising: AdvertisingSection;
  cta: CtaSection;
  contact_section: ContactSection;
};
