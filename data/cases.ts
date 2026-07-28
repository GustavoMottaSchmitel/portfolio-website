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
    eyebrow: "Landing page de produto B2B",
    summary:
      "Uma experiência comercial que organiza um ecossistema completo de atendimento, relacionamento e automações.",
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
    id: "ata-ponto",
    number: "02",
    name: "ATA Ponto",
    eyebrow: "Experiência comercial responsiva",
    summary:
      "Uma apresentação que conecta hardware, software e rotina operacional em uma narrativa clara sobre controle de jornada.",
    contribution: ["Direção", "Interface", "Responsividade", "Performance"],
    desktopImage: "/cases/live/full/ponto-desktop-full-v3.webp",
    mobileImage: "/cases/live/full/ponto-mobile-full-v3.webp",
    desktopHeader: "/cases/live/headers/ponto-desktop-header-v2.webp",
    mobileHeader: "/cases/live/headers/ponto-mobile-header-v2.webp",
    imageAlt: "Landing page real do ATA Ponto",
    siteUrl: "https://ponto.atasistemas.com.br",
    tone: "ink",
  },
  {
    id: "ata-seguranca",
    number: "03",
    name: "ATA Segurança",
    eyebrow: "Segurança eletrônica para empresas",
    summary:
      "Uma experiência imersiva para apresentar videomonitoramento, alarmes e proteção de operações com confiança.",
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
    number: "04",
    name: "ATA Acesso",
    eyebrow: "Controle de acesso para empresas",
    summary:
      "Uma página focada em tornar soluções de entrada, identificação e fluxo corporativo fáceis de entender e contratar.",
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
