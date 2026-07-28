export type PortfolioCase = {
  id: string;
  number: string;
  name: string;
  eyebrow: string;
  summary: string;
  contribution: string[];
  desktopImage: string;
  mobileImage: string;
  desktopHeader: string;
  mobileHeader: string;
  imageAlt: string;
  siteUrl: string;
  tone: "violet" | "blue" | "ink" | "navy";
};

export const portfolioCases: PortfolioCase[] = [
  {
    id: "ata-crm",
    number: "01",
    name: "ATA CRM",
    eyebrow: "Produto B2B · Case principal",
    summary:
      "Transformei um produto complexo — atendimento, CRM, automações e inteligência artificial — em uma experiência comercial clara, navegável e pronta para vender.",
    contribution: ["Estratégia", "Copy", "Design", "Desenvolvimento"],
    desktopImage: "/cases/live/full/crm-desktop-full-v3.webp",
    mobileImage: "/cases/live/full/crm-mobile-full-v3.webp",
    desktopHeader: "/cases/live/headers/crm-desktop-header-v2.webp",
    mobileHeader: "/cases/live/headers/crm-mobile-header-v2.webp",
    imageAlt: "Landing page real do ATA CRM",
    siteUrl: "https://crm.atasistemas.com.br",
    tone: "violet",
  },
  {
    id: "ata-seguranca",
    number: "02",
    name: "ATA Segurança",
    eyebrow: "Experiência digital · Marca e conversão",
    summary:
      "Uma narrativa visual imersiva que traduz videomonitoramento, alarmes e proteção empresarial em confiança e ação comercial.",
    contribution: ["Estratégia", "Direção visual", "Frontend", "Mobile"],
    desktopImage: "/cases/live/full/seguranca-desktop-full-v3.webp",
    mobileImage: "/cases/live/full/seguranca-mobile-full-v3.webp",
    desktopHeader: "/cases/live/headers/seguranca-desktop-header-v2.webp",
    mobileHeader: "/cases/live/headers/seguranca-mobile-header-v2.webp",
    imageAlt: "Landing page real da ATA Segurança",
    siteUrl: "https://seguranca.atasistemas.com.br",
    tone: "blue",
  },
  {
    id: "ata-acesso",
    number: "03",
    name: "ATA Acesso",
    eyebrow: "Solução corporativa · Clareza comercial",
    summary:
      "Organizei leitores, credenciais, catracas e fluxos corporativos em uma experiência fácil de entender, explorar e contratar.",
    contribution: ["Produto", "UX/UI", "Desenvolvimento", "Responsividade"],
    desktopImage: "/cases/live/full/acesso-desktop-full-v3.webp",
    mobileImage: "/cases/live/full/acesso-mobile-full-v3.webp",
    desktopHeader: "/cases/live/headers/acesso-desktop-header-v2.webp",
    mobileHeader: "/cases/live/headers/acesso-mobile-header-v2.webp",
    imageAlt: "Landing page real da ATA Acesso",
    siteUrl: "https://acesso.atasistemas.com.br",
    tone: "navy",
  },
];
