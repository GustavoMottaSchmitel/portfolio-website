import Image from "next/image";
import { portfolioCases } from "@/data/cases";
import { MotionController } from "./MotionController";

const whatsappUrl =
  "https://wa.me/5527997498818?text=Ol%C3%A1%2C%20Gustavo!%20Vi%20seu%20portf%C3%B3lio%20e%20quero%20conversar%20sobre%20um%20projeto.";

const services = [
  {
    number: "01",
    title: "Sites & landing pages",
    text: "Estratégia, copy, direção visual e desenvolvimento para apresentar sua oferta com clareza e intenção.",
  },
  {
    number: "02",
    title: "Sistemas sob medida",
    text: "Produtos digitais pensados a partir da operação real, com arquitetura preparada para evoluir.",
  },
  {
    number: "03",
    title: "Evolução de produto",
    text: "Diagnóstico e refinamento de experiências existentes para ganhar consistência, fluidez e valor percebido.",
  },
];

const method = [
  ["01", "Entender", "Negócio, contexto e o problema que realmente precisa ser resolvido."],
  ["02", "Definir", "Prioridades, experiência e arquitetura antes de acelerar a execução."],
  ["03", "Construir", "Design e engenharia trabalhando como uma única disciplina."],
  ["04", "Evoluir", "Validar, aprender e preparar o produto para o próximo movimento."],
];

function ArrowIcon() {
  return (
    <svg aria-hidden="true" viewBox="0 0 20 20">
      <path d="M4 10h11M11 5l5 5-5 5" />
    </svg>
  );
}

function WhatsAppLink({
  children,
  className = "",
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <a
      className={className}
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={`${children} pelo WhatsApp (abre em nova aba)`}
    >
      <span>{children}</span>
      <ArrowIcon />
    </a>
  );
}

export default function Home() {
  const schema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Person",
        name: "Gustavo Motta",
        jobTitle: "Fundador da NuvionTech",
        url: process.env.NEXT_PUBLIC_SITE_URL,
        image: "/images/gustavo-motta.webp",
        worksFor: { "@type": "Organization", name: "NuvionTech" },
      },
      {
        "@type": "ProfessionalService",
        name: "Gustavo Motta — NuvionTech",
        description:
          "Estratégia, design e desenvolvimento de landing pages, produtos digitais e sistemas sob medida.",
        founder: { "@type": "Person", name: "Gustavo Motta" },
        areaServed: "BR",
      },
    ],
  };

  return (
    <>
      <MotionController />
      <a className="skip-link" href="#conteudo">
        Ir para o conteúdo
      </a>

      <header className="site-header" id="inicio">
        <a className="brand" href="#inicio" aria-label="Gustavo Motta, início">
          <span className="brand-mark">GM</span>
          <span className="brand-name">Gustavo Motta</span>
        </a>

        <nav aria-label="Navegação principal">
          <a href="#projetos">Projetos</a>
          <a href="#servicos">Serviços</a>
          <a href="#sobre">Sobre</a>
        </nav>

        <WhatsAppLink className="header-cta">Vamos conversar</WhatsAppLink>
      </header>

      <main id="conteudo">
        <section className="hero" aria-labelledby="hero-title">
          <div className="hero-copy hero-enter">
            <p className="eyebrow">
              <span />
              Fundador da NuvionTech
            </p>
            <h1 id="hero-title">
              Software que
              <br />
              move <em>negócios.</em>
            </h1>
            <p className="hero-description">
              Transformo desafios de negócio em experiências digitais e
              sistemas robustos — da estratégia e do design ao software em
              produção.
            </p>
            <div className="hero-actions">
              <WhatsAppLink className="button button-primary">
                Conversar sobre um projeto
              </WhatsAppLink>
              <a className="text-link" href="#projetos">
                Ver projetos
                <span aria-hidden="true">↓</span>
              </a>
            </div>
            <div className="hero-footnote">
              <span>Estratégia</span>
              <span>Design</span>
              <span>Engenharia</span>
            </div>
          </div>

          <div className="portrait-wrap portrait-enter">
            <div className="portrait-orbit orbit-one" aria-hidden="true" />
            <div className="portrait-orbit orbit-two" aria-hidden="true" />
            <span className="portrait-note note-one" aria-hidden="true">
              produto
            </span>
            <span className="portrait-note note-two" aria-hidden="true">
              impacto
            </span>
            <div className="portrait-stage">
              <div className="portrait-glow" aria-hidden="true" />
              <div className="portrait-grid" aria-hidden="true" />
              <Image
                className="portrait-cutout"
                src="/images/gustavo-motta-cutout-v2.png"
                alt="Gustavo Motta"
                fill
                priority
                sizes="(max-width: 767px) 92vw, (max-width: 1100px) 48vw, 540px"
              />
              <div className="floating-code code-one" aria-hidden="true">
                <span>01</span>
                product_first
              </div>
              <div className="floating-code code-two" aria-hidden="true">
                build · ship · evolve
              </div>
              <div className="portrait-label">
                <span>Gustavo Motta</span>
                <small>Espírito Santo · Brasil</small>
              </div>
            </div>
          </div>
        </section>

        <section className="manifesto section-pad" aria-label="Posicionamento">
          <p className="section-kicker">O que eu construo</p>
          <p className="manifesto-copy" data-reveal>
            Entre uma boa ideia e um produto que funciona existe uma sequência
            de decisões. <strong>É nesse espaço que eu trabalho.</strong>
          </p>
          <p className="manifesto-side">
            Sem separar aparência de resultado. Sem separar experiência de
            engenharia.
          </p>
        </section>

        <section className="projects section-pad" id="projetos">
          <div className="section-heading" data-reveal>
            <div>
              <p className="section-kicker">Trabalhos selecionados</p>
              <h2>Projetos com<br />problemas reais.</h2>
            </div>
            <p>
              Uma seleção de experiências em que estratégia, design e
              tecnologia precisaram se encontrar.
            </p>
          </div>

          <div className="case-list">
            {portfolioCases.map((item) => (
              <article
                className={`case case-${item.tone}`}
                id={item.id}
                key={item.id}
                data-reveal
              >
                <div className="case-content">
                  <div className="case-index">{item.number}</div>
                  <p className="case-eyebrow">{item.eyebrow}</p>
                  <h3>{item.name}</h3>
                  <p className="case-summary">{item.summary}</p>
                  <ul aria-label={`Atuação no projeto ${item.name}`}>
                    {item.contribution.map((tag) => (
                      <li key={tag}>{tag}</li>
                    ))}
                  </ul>
                </div>
                <div className="case-media">
                  <div className="device-scene">
                    <div className="laptop">
                      <div className="laptop-screen">
                        <div className="browser-bar" aria-hidden="true">
                          <span />
                          <span />
                          <span />
                          <small>{new URL(item.siteUrl).hostname}</small>
                        </div>
                        <Image
                          className="project-scroll project-scroll-desktop"
                          src={item.desktopImage}
                          alt={`${item.imageAlt} exibida em um notebook`}
                          width={1440}
                          height={810}
                          sizes="(max-width: 767px) 86vw, 54vw"
                        />
                        <Image
                          className="project-fixed-header project-fixed-header-desktop"
                          src={item.desktopHeader}
                          alt=""
                          width={1440}
                          height={86}
                          aria-hidden="true"
                        />
                      </div>
                      <div className="laptop-base" aria-hidden="true" />
                    </div>
                    <div className="phone">
                      <div className="phone-speaker" aria-hidden="true" />
                      <Image
                        className="project-scroll project-scroll-mobile"
                        src={item.mobileImage}
                        alt={`${item.imageAlt} em versão mobile`}
                        width={390}
                        height={844}
                        sizes="(max-width: 767px) 24vw, 150px"
                      />
                      <Image
                        className="project-fixed-header project-fixed-header-mobile"
                        src={item.mobileHeader}
                        alt=""
                        width={390}
                        height={74}
                        aria-hidden="true"
                      />
                    </div>
                  </div>
                  <a
                    className="case-live-link"
                    href={item.siteUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`Abrir ${item.name} ao vivo em nova aba`}
                  >
                    Ver projeto ao vivo
                    <ArrowIcon />
                  </a>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section className="services section-pad" id="servicos">
          <div className="section-heading services-heading" data-reveal>
            <div>
              <p className="section-kicker">Como posso ajudar</p>
              <h2>Do primeiro traço<br />à operação.</h2>
            </div>
            <p>
              O formato muda. O compromisso é o mesmo: construir a solução
              certa, com clareza e profundidade.
            </p>
          </div>

          <div className="service-grid">
            {services.map((service) => (
              <article key={service.number} data-reveal>
                <span>{service.number}</span>
                <h3>{service.title}</h3>
                <p>{service.text}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="method section-pad" aria-labelledby="method-title">
          <div className="method-intro" data-reveal>
            <p className="section-kicker">Meu processo</p>
            <h2 id="method-title">
              Menos ruído.
              <br />
              Mais direção.
            </h2>
          </div>
          <ol className="method-list">
            {method.map(([number, title, description]) => (
              <li key={number} data-reveal>
                <span>{number}</span>
                <h3>{title}</h3>
                <p>{description}</p>
              </li>
            ))}
          </ol>
        </section>

        <section className="about section-pad" id="sobre">
          <div className="about-monogram" aria-hidden="true">
            GM
          </div>
          <div className="about-copy" data-reveal>
            <p className="section-kicker">Gustavo + NuvionTech</p>
            <h2>Design e tecnologia<br />na mesma conversa.</h2>
            <p>
              Sou Gustavo Motta, fundador da NuvionTech. Trabalho na interseção
              entre estratégia, experiência e desenvolvimento para transformar
              problemas de negócio em produtos digitais que as pessoas
              entendem e conseguem usar.
            </p>
            <p>
              Para mim, um projeto não termina quando a tela fica bonita. Ele
              precisa fazer sentido na operação, sustentar o crescimento e
              estar pronto para evoluir.
            </p>
          </div>
        </section>

        <section className="contact section-pad" aria-labelledby="contact-title">
          <p className="section-kicker">Tem um desafio em mente?</p>
          <h2 id="contact-title" data-reveal>
            Vamos construir o
            <br />
            próximo <em>movimento.</em>
          </h2>
          <p>
            Conte um pouco sobre seu negócio, sua ideia ou o problema que
            precisa resolver.
          </p>
          <WhatsAppLink className="button button-light">
            Começar uma conversa
          </WhatsAppLink>
          <div className="contact-bottom">
            <span>Gustavo Motta</span>
            <span>Fundador da NuvionTech</span>
            <a href="#inicio">Voltar ao topo ↑</a>
          </div>
        </section>
      </main>

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      />
    </>
  );
}
