import { createFileRoute } from "@tanstack/react-router";
import {
  ArrowUpRight,
  MapPin,
  Phone,
  Mail,
  Brain,
  ChevronDown,
  Instagram,
  Facebook,
  Users,
  Code,
  Rocket,
  Award,
  Target,
  Zap,
} from "lucide-react";
import type { ComponentType, SVGProps } from "react";
import logo from "@/assets/cerebiia-logo.png";

import asconfitImg from "@/assets/projects/asconfit.png";
import zeroBikesImg from "@/assets/projects/zero-bikes.png";
import cuidamundosImg from "@/assets/projects/cuidamundos.png";
import happyBpoImg from "@/assets/projects/happy-bpo.png";
import enconcretoImg from "@/assets/projects/enconcreto.png";
import norteAventurasImg from "@/assets/projects/norte-aventuras.png";

export const Route = createFileRoute("/proyectos")({
  component: ProjectsPage,
  head: () => ({
    meta: [
      { title: "Cerebiia — Proyectos que inspiran transformación con humanidad" },
      {
        name: "description",
        content:
          "Plataformas web, apps móviles, realidad aumentada, videojuegos educativos y sistemas de IA para empresas que confían en la visión de Cerebiia.",
      },
      { property: "og:title", content: "Cerebiia — Proyectos" },
      {
        property: "og:description",
        content:
          "Tecnología. Estrategia. Propósito. Descubre los proyectos desarrollados por Cerebiia.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
});

type Project = {
  title: string;
  description: string;
  tag: string;
  image: string;
  alt: string;
};

const projects: Project[] = [
  {
    tag: "Diseño & Desarrollo Web",
    title: "Diseño y Desarrollo Web de ASCONFIT",
    description:
      "ASCONFIT es la primera firma certificada en Cúcuta, ante la Junta Central de Contadores. Con más de 30 años de experiencia y promotora de la Ley ZESE.",
    image: asconfitImg,
    alt: "Sitio web de ASCONFIT desarrollado por Cerebiia",
  },
  {
    tag: "E-commerce",
    title: "Desarrollo de la Tienda Virtual de ZERO BIKES",
    description:
      "Empresa dedicada a fomentar el deporte, la salud y el transporte, amigable con el medio ambiente.",
    image: zeroBikesImg,
    alt: "Tienda virtual de ZERO BIKES",
  },
  {
    tag: "Plataforma + Videojuego",
    title: "Plataforma Web y Videojuego de Cuidamundos",
    description:
      "Experiencia gamificada de aventura y aprendizaje sobre los CuidaMundos de CENS. ¡Conviértete en Purita, Jirol o Félix y asume el reto de ser el héroe que nuestro planeta necesita!",
    image: cuidamundosImg,
    alt: "Plataforma Cuidamundos con los personajes Purita, Jirol y Félix",
  },
  {
    tag: "Landing Page",
    title: "Landing Page para Directores de Happy BPO",
    description:
      "En Happify combinan automatización inteligente con agentes motivados para brindar una atención al cliente humana, ágil y medible.",
    image: happyBpoImg,
    alt: "Landing Page de Happy BPO con Santiago Castañeda Lopera",
  },
  {
    tag: "Diseño & Desarrollo Web",
    title: "Diseño y Desarrollo Web de EnConcreto",
    description:
      "EnConcreto Bienes & Servicios es una empresa Norte Santandereana dedicada a la fabricación de productos prefabricados en concreto.",
    image: enconcretoImg,
    alt: "Sitio web de EnConcreto Bienes & Servicios",
  },
  {
    tag: "Videojuego Educativo",
    title: "Videojuego Educativo — Norte de Aventuras",
    description:
      "Aventúrate con Kra, y conocerás de la historia, cultura, flora y fauna de Norte de Santander.",
    image: norteAventurasImg,
    alt: "Videojuego educativo Norte de Aventuras",
  },
];

const navLinks = [
  { label: "Inicio", href: "/" },
  { label: "SaaS", href: "/#saas", hasChevron: true },
  { label: "Proyectos", href: "/proyectos" },
  { label: "Contacto", href: "/#contacto" },
];

function ProjectsPage() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Header />
      <main>
        <Hero />
        <StatsSection />
        <IntroSection />
        <ServicesSection />
        <ProjectsSection />
        <CtaSection />
      </main>
      <Footer />
    </div>
  );
}

/* ---------- Header ---------- */

function Header() {
  return (
    <header className="sticky top-0 z-50 border-b border-border/50 bg-background/80 backdrop-blur-xl">
      <div className="mx-auto grid h-16 max-w-7xl grid-cols-[minmax(0,1fr)_auto] items-center gap-4 px-5 sm:h-20 lg:px-10">
        <a href="/" className="flex min-w-0 items-center gap-2.5">
          <img src={logo} alt="Cerebiia" width={36} height={36} className="h-9 w-9 shrink-0" />
          <span className="truncate text-sm font-bold tracking-[0.16em] text-foreground sm:text-[15px]">
            CEREBIIA DATA
          </span>
        </a>
        <div className="flex items-center gap-2 sm:gap-6">
          <nav className="hidden items-center gap-7 lg:flex">
            {navLinks.map((l) => (
              <a
                key={l.label}
                href={l.href}
                className="inline-flex items-center gap-1 text-sm font-medium text-muted-foreground hover:text-foreground"
              >
                {l.label}
                {l.hasChevron && <ChevronDown className="h-3.5 w-3.5" />}
              </a>
            ))}
          </nav>
          <a
            href="/#ingresar"
            className="inline-flex shrink-0 items-center justify-center rounded-xl bg-[color:var(--brand-navy)] px-5 py-2.5 text-sm font-semibold text-primary-foreground shadow-[var(--shadow-cta)] transition-all duration-300 ease-out hover:brightness-110 hover:-translate-y-0.5 sm:px-6"
          >
            Ingresar
          </a>
        </div>
      </div>
    </header>
  );
}

/* ---------- Hero ---------- */

function Hero() {
  return (
    <section
      className="relative overflow-hidden border-b border-border/60 py-16 md:py-24"
      style={{ backgroundImage: "var(--gradient-hero)" }}
    >
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 opacity-[0.04]"
        style={{
          backgroundImage:
            "linear-gradient(to right, currentColor 1px, transparent 1px), linear-gradient(to bottom, currentColor 1px, transparent 1px)",
          backgroundSize: "64px 64px",
          color: "var(--foreground)",
        }}
      />
      <div className="mx-auto relative px-5 max-w-7xl lg:px-10">
        <div className="mx-auto max-w-3xl text-center">
          <div className="mx-auto inline-flex items-center gap-2.5 rounded-pill border border-border/80 bg-card/80 px-4 py-1.5 shadow-soft backdrop-blur">
            <span
              aria-hidden
              className="h-1.5 w-1.5 rounded-full"
              style={{ background: "var(--gradient-brand)" }}
            />
            <span className="text-[11px] font-semibold uppercase tracking-[0.22em] text-muted-foreground">
              Tecnología · Estrategia · Propósito
            </span>
          </div>
          <h1 className="mt-8 text-balance text-3xl font-extrabold leading-[0.95] tracking-tight text-foreground sm:text-4xl md:text-5xl lg:text-6xl">
            Proyectos que inspiran transformación con humanidad
          </h1>
          <p className="mx-auto mt-6 max-w-lg text-base leading-relaxed text-muted-foreground md:text-[17px]">
            Soluciones tecnológicas hechas a la medida para empresas que confían
            en nuestra visión.
          </p>
          <div className="mt-8 flex items-center justify-center gap-3 text-[11px] font-semibold uppercase tracking-[0.24em] text-muted-foreground/80">
            <span className="h-px w-8 bg-border" />
            <span>06 Proyectos destacados</span>
            <span className="h-px w-8 bg-border" />
          </div>
        </div>
      </div>
    </section>
  );
}

/* ---------- Stats Section ---------- */

function StatsSection() {
  const stats = [
    { icon: Users, label: "Clientes Satisfechos", value: "50+" },
    { icon: Code, label: "Proyectos Entregados", value: "100+" },
    { icon: Award, label: "Años de Experiencia", value: "8+" },
    { icon: Rocket, label: "Startups Lanzadas", value: "25+" },
  ];

  return (
    <section className="border-b border-border/60 bg-surface py-16">
      <div className="mx-auto max-w-7xl px-5 lg:px-10">
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {stats.map((stat, i) => {
            const Icon = stat.icon;
            return (
              <div
                key={i}
                className="flex items-center gap-4 rounded-2xl border border-border/70 bg-card p-5 shadow-soft transition-all duration-300 ease-out hover:-translate-y-1 hover:border-primary/30 hover:shadow-card"
              >
                <span
                  className="grid h-11 w-11 shrink-0 place-items-center rounded-xl text-[color:var(--brand-navy)] transition-transform duration-300 hover:scale-110"
                  style={{ background: "var(--gradient-brand)" }}
                >
                  <Icon className="h-5 w-5" strokeWidth={1.75} />
                </span>
                <div>
                  <p className="text-xl font-bold text-foreground">{stat.value}</p>
                  <p className="text-xs font-medium uppercase tracking-[0.14em] text-muted-foreground">
                    {stat.label}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

/* ---------- Intro ---------- */

function IntroSection() {
  return (
    <section className="py-24 border-b border-border/60 bg-background">
      <div className="mx-auto max-w-7xl px-5 lg:px-10">
        <div className="mx-auto grid gap-12 md:grid-cols-12 md:gap-20">
          <div className="md:col-span-5">
            <div className="flex items-center gap-3">
              <span className="h-px w-12 bg-accent/60" />
              <span className="text-[11px] font-semibold uppercase tracking-[0.24em] text-foreground">
                Nuestra visión
              </span>
            </div>
            <h2 className="mt-8 text-[2.25rem] font-extrabold tracking-tight md:text-[3rem]">
              Proyectos Desarrollados con{" "}
              <span className="text-[color:var(--brand-navy)]">
                Empresas
              </span>{" "}
              que Confían en Nuestra Visión
            </h2>
          </div>
          <div className="md:col-span-7 md:pt-4">
            <p className="max-w-[58ch] text-[17px] leading-[1.75] text-muted-foreground">
              En CEREBIIA desarrollamos soluciones tecnológicas que responden a
              necesidades reales de empresas, instituciones y organizaciones.
              Cada proyecto refleja nuestra filosofía: entender profundamente el
              problema, diseñar experiencias intuitivas y construir tecnología
              que potencie procesos, decisiones y resultados.
            </p>
            <p className="max-w-[58ch] mt-6 text-[17px] leading-[1.75] text-muted-foreground">
              Desde plataformas empresariales hasta aplicaciones móviles,
              realidad aumentada o sistemas basados en IA, nuestros proyectos
              son evidencia de un trabajo estratégico, humano y orientado al
              impacto.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ---------- Services Section ---------- */

function ServicesSection() {
  const services = [
    {
      icon: Code,
      title: "Desarrollo Web",
      description: "Sitios web y plataformas empresariales modernas y escalables.",
    },
    {
      icon: Zap,
      title: "Aplicaciones Móviles",
      description: "Apps nativas y multiplataforma para iOS y Android.",
    },
    {
      icon: Target,
      title: "Realidad Aumentada",
      description: "Experiencias inmersivas que fusionan lo digital y lo físico.",
    },
    {
      icon: Brain,
      title: "Inteligencia Artificial",
      description: "Sistemas inteligentes que automatizan y optimizan procesos.",
    },
  ];

  return (
    <section className="border-b border-border/60 bg-background py-20 md:py-24">
      <div className="mx-auto max-w-7xl px-5 lg:px-10">
        <div className="mx-auto max-w-2xl text-center">
          <div className="inline-flex items-center gap-3">
            <span className="h-px w-12 bg-accent/60" />
            <span className="text-[11px] font-semibold uppercase tracking-[0.24em] text-foreground">
              Servicios
            </span>
            <span className="h-px w-12 bg-accent/60" />
          </div>
          <h2 className="mt-8 text-2xl font-extrabold tracking-tight sm:text-3xl md:text-[2.25rem]">
            Lo que hacemos
          </h2>
          <p className="mx-auto mt-6 max-w-lg text-base leading-relaxed text-muted-foreground md:text-[17px]">
            Soluciones tecnológicas integrales para transformar tu negocio.
          </p>
        </div>

        <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {services.map((service, i) => {
            const Icon = service.icon;
            return (
              <div
                key={i}
                className="group rounded-2xl border border-border/70 bg-card p-6 shadow-soft transition-all duration-300 ease-out hover:-translate-y-1 hover:border-primary/30 hover:shadow-card"
              >
                <span
                  className="grid h-12 w-12 place-items-center rounded-xl text-[color:var(--brand-navy)] transition-transform duration-300 ease-out group-hover:scale-110"
                  style={{ background: "var(--gradient-brand)" }}
                >
                  <Icon className="h-6 w-6" strokeWidth={1.75} />
                </span>
                <h3 className="mt-5 text-lg font-semibold text-foreground">
                  {service.title}
                </h3>
                <p className="mt-2 text-sm leading-[1.7] text-muted-foreground">
                  {service.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

/* ---------- Projects ---------- */

function ProjectsSection() {
  return (
    <section id="proyectos" className="border-y border-border/60 bg-background py-20 md:py-28">
      <div className="mx-auto max-w-7xl px-5 lg:px-10">
        <div className="mx-auto max-w-3xl text-center">
          <div className="inline-flex items-center gap-3">
            <span className="h-px w-12 bg-accent/60" />
            <span className="text-[11px] font-semibold uppercase tracking-[0.24em] text-foreground">
              Portafolio
            </span>
            <span className="h-px w-12 bg-accent/60" />
          </div>
          <h2 className="mt-8 text-3xl font-extrabold tracking-tight sm:text-4xl md:text-[2.5rem]">
            Un trabajo con propósito
          </h2>
          <p className="mx-auto mt-6 max-w-lg text-base leading-relaxed text-muted-foreground md:text-[17px]">
            Una selección de proyectos donde tecnología, estrategia y humanidad
            se encuentran para crear soluciones transformadoras.
          </p>
        </div>

        <div className="mt-16 space-y-16">
          {projects.map((p, i) => (
            <ProjectCard key={p.title} project={p} index={i + 1} isEven={i % 2 === 0} />
          ))}
        </div>
      </div>
    </section>
  );
}

function ProjectCard({ project, index, isEven }: { project: Project; index: number; isEven: boolean }) {
  return (
    <article className="group grid gap-8 rounded-3xl border border-border/70 bg-card p-6 shadow-soft transition-all duration-300 ease-out hover:-translate-y-2 hover:border-primary/40 hover:shadow-elevated md:grid-cols-2 md:gap-12 md:p-8 lg:gap-16 lg:p-10">
      <div className={`relative aspect-video overflow-hidden rounded-2xl ${isEven ? '' : 'md:order-2'}`}>
        <img
          src={project.image}
          alt={project.alt}
          loading="lazy"
          className="h-full w-full object-cover object-top transition-transform duration-700 ease-out group-hover:scale-[1.08]"
        />
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0 bg-gradient-to-t from-foreground/30 via-transparent to-transparent opacity-80"
        />
        <div className="absolute left-4 top-4 flex items-center gap-3 sm:left-5 sm:top-5">
          <span className="rounded-full bg-background/95 px-3 py-1.5 font-mono text-[11px] font-bold uppercase tracking-[0.2em] text-[color:var(--brand-navy)] shadow-soft backdrop-blur">
            / {String(index).padStart(2, "0")}
          </span>
          <span className="rounded-full bg-[color:var(--brand-navy)] px-3 py-1.5 text-[11px] font-bold uppercase tracking-[0.14em] text-white shadow-soft">
            {project.tag}
          </span>
        </div>
      </div>
      <div className={`flex flex-col justify-center gap-5 ${isEven ? '' : 'md:order-1'}`}>
        <div>
          <div className="mb-3 inline-flex items-center gap-2">
            <span className="h-1 w-8 rounded-full bg-[color:var(--brand-navy)]" />
            <span className="text-xs font-semibold uppercase tracking-[0.2em] text-muted-foreground">
              Proyecto destacado
            </span>
          </div>
          <h3 className="text-2xl font-bold leading-[1.2] tracking-tight text-foreground md:text-3xl">
            {project.title}
          </h3>
        </div>
        <p className="text-base leading-[1.75] text-muted-foreground md:text-[17px]">
          {project.description}
        </p>
        <div className="mt-2 flex flex-wrap items-center gap-2">
          {["Web", "Mobile", "Design"].map((tag) => (
            <span
              key={tag}
              className="rounded-full border border-border/50 bg-surface px-3 py-1 text-xs font-medium text-muted-foreground"
            >
              {tag}
            </span>
          ))}
        </div>
        <a
          href="/#contacto"
          className="mt-4 inline-flex items-center gap-2 rounded-xl bg-[color:var(--brand-navy)] px-6 py-3 text-sm font-semibold text-white shadow-[var(--shadow-cta)] transition-all duration-300 ease-out hover:brightness-110 hover:-translate-y-0.5 hover:shadow-elevated"
        >
          Ver proyecto
          <ArrowUpRight className="h-4 w-4" />
        </a>
      </div>
    </article>
  );
}

/* ---------- CTA ---------- */

function CtaSection() {
  return (
    <section id="contacto" className="py-16 md:py-20">
      <div className="mx-auto max-w-7xl px-5 lg:px-10">
        <div
          className="relative overflow-hidden rounded-3xl px-8 py-16 text-center md:px-20 md:py-24"
          style={{ background: "var(--gradient-brand)" }}
        >
          <div className="pointer-events-none absolute inset-0 opacity-40 [background-image:radial-gradient(600px_300px_at_20%_10%,white,transparent_60%),radial-gradient(600px_300px_at_80%_90%,white,transparent_60%)]" />
          <div
            aria-hidden
            className="pointer-events-none absolute inset-0 opacity-[0.06]"
            style={{
              backgroundImage:
                "linear-gradient(to right, white 1px, transparent 1px), linear-gradient(to bottom, white 1px, transparent 1px)",
              backgroundSize: "48px 48px",
            }}
          />
          <div className="relative mx-auto max-w-2xl text-foreground">
            <p className="text-[11px] font-semibold uppercase tracking-[0.24em] opacity-80">
              Innovación · Escalar · Impacto
            </p>
            <h2 className="mt-8 text-[2.5rem] font-extrabold leading-[1.05] tracking-tight text-foreground md:text-[3.75rem]">
              Inspiramos Transformación con Humanidad
            </h2>
            <p className="mx-auto mt-6 max-w-xl text-base leading-relaxed opacity-90 md:text-[17px]">
              Innovación hecha a la medida para resolver, escalar y generar
              impacto. Transformemos tu organización juntos.
            </p>
            <div className="mt-12">
              <a
                href="https://cerebiia.com/contacto/"
                className="inline-flex items-center gap-2 rounded-pill bg-white px-8 py-4 text-[15px] font-bold text-primary shadow-elevated transition-all duration-300 ease-out hover:-translate-y-0.5 hover:shadow-2xl"
              >
                ¡Empecemos!
                <ArrowUpRight className="h-5 w-5" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ---------- Footer ---------- */

function Footer() {
  return (
    <footer id="contacto" className="border-t border-border/60 bg-[color:var(--hero-bg)] py-16 md:py-20">
      <div className="mx-auto max-w-7xl px-5 lg:px-10">
        <div className="grid gap-12 md:grid-cols-3 lg:gap-16">
          <div>
            <div className="flex items-center gap-2.5">
              <img src={logo} alt="Cerebiia" width={40} height={40} className="h-10 w-10" />
              <span className="text-base font-bold tracking-[0.16em] text-foreground">CEREBIIA DATA</span>
            </div>
            <p className="mt-5 max-w-[28ch] text-sm leading-[1.7] text-muted-foreground">
              Inspiramos transformación con humanidad.
            </p>
            <div className="mt-6 flex items-center gap-3">
              {[Instagram, Facebook].map((Icon, i) => (
                <a
                  key={i}
                  href="#"
                  aria-label="Red social"
                  className="flex h-10 w-10 items-center justify-center rounded-full border border-border bg-background text-[color:var(--brand-navy)] transition-all duration-300 ease-out hover:border-[color:var(--brand-navy)] hover:bg-[color:var(--brand-navy)] hover:text-primary-foreground"
                >
                  <Icon className="h-4 w-4" strokeWidth={1.75} />
                </a>
              ))}
              <a
                href="#"
                aria-label="TikTok"
                className="flex h-10 w-10 items-center justify-center rounded-full border border-border bg-background text-xs font-bold text-[color:var(--brand-navy)] transition-all duration-300 ease-out hover:border-[color:var(--brand-navy)] hover:bg-[color:var(--brand-navy)] hover:text-primary-foreground"
              >
                TT
              </a>
            </div>
          </div>

          <div>
            <h3 className="text-sm font-bold uppercase tracking-[0.14em] text-foreground">Enlaces Rápidos</h3>
            <ul className="mt-6 grid grid-cols-1 gap-3 text-sm sm:grid-cols-2">
              {[
                "Inicio",
                "Servicios",
                "Contacto",
                "SaaS",
                "Política de Privacidad",
                "Términos y Condiciones",
              ].map((l) => (
                <li key={l}>
                  <a href="#" className="text-muted-foreground transition-colors duration-200 ease-out hover:text-[color:var(--brand-navy)]">
                    {l}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-bold uppercase tracking-[0.14em] text-foreground">Contacto</h3>
            <ul className="mt-6 space-y-4 text-sm text-muted-foreground">
              <li className="flex items-start gap-3">
                <span className="mt-0.5 flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-background text-[color:var(--brand-navy)] shadow-[var(--shadow-soft)]">
                  <MapPin className="h-4 w-4" strokeWidth={1.75} />
                </span>
                <span className="leading-[1.7]">Calle 6 #12E-45, Barrio Colsag, Cúcuta, Colombia</span>
              </li>
              <li className="flex items-center gap-3">
                <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-background text-[color:var(--brand-navy)] shadow-[var(--shadow-soft)]">
                  <Phone className="h-4 w-4" strokeWidth={1.75} />
                </span>
                <span>+57 311 2220607</span>
              </li>
              <li className="flex items-center gap-3">
                <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-background text-[color:var(--brand-navy)] shadow-[var(--shadow-soft)]">
                  <Mail className="h-4 w-4" strokeWidth={1.75} />
                </span>
                <span>contacto@cerebiia.com</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-16 border-t border-border/70 pt-6 text-center text-xs text-muted-foreground">
          Copyright © 2026 Cerebiia · Powered by Cerebiia
        </div>
      </div>
    </footer>
  );
}
