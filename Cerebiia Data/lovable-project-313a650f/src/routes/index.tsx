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
  Check,
  ShieldCheck,
  ArrowRight,
  PlayCircle,
  Quote,
  Sparkles,
  Sprout,
  Crown,
  ClipboardCheck,
} from "lucide-react";
import type { ComponentType, SVGProps } from "react";
import logo from "@/assets/cerebiia-logo.png";

import asconfitImg from "@/assets/projects/asconfit.png";
import zeroBikesImg from "@/assets/projects/zero-bikes.png";
import cuidamundosImg from "@/assets/projects/cuidamundos.png";
import happyBpoImg from "@/assets/projects/happy-bpo.png";
import enconcretoImg from "@/assets/projects/enconcreto.png";
import norteAventurasImg from "@/assets/projects/norte-aventuras.png";

export const Route = createFileRoute("/")({
  component: LandingPage,
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

function LandingPage() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Header />
      <main>
        <Hero />
        <IntroSection />
        <ProjectsSection />
        <CtaSection />
      </main>
      <Footer />
    </div>
  );
}

/* ---------- Header ---------- */

const navLinks = [
  { label: "Inicio", href: "#inicio" },
  { label: "SaaS", href: "#saas", hasChevron: true },
  { label: "Proyectos", href: "#proyectos" },
  { label: "Contacto", href: "#contacto" },
];

function Header() {
  return (
    <header className="sticky top-0 z-50 border-b border-border/50 bg-background/80 backdrop-blur-xl">
      <div className="mx-auto grid h-16 max-w-7xl grid-cols-[minmax(0,1fr)_auto] items-center gap-4 px-5 sm:h-20 lg:px-10">
        <a href="#inicio" className="flex min-w-0 items-center gap-2.5">
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
            href="#ingresar"
            className="inline-flex shrink-0 items-center justify-center rounded-xl bg-[color:var(--brand-navy)] px-5 py-2.5 text-sm font-semibold text-primary-foreground shadow-[var(--shadow-cta)] hover:brightness-110 hover:-translate-y-0.5 sm:px-6"
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
      className="relative overflow-hidden border-b border-border/60"
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
      <div className="container-page relative pt-28 pb-24 md:pt-40 md:pb-32">
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
          <h1 className="mt-10 text-[3.5rem] font-extrabold leading-[0.95] tracking-tight text-foreground md:text-[6rem]">
            Proyectos
          </h1>
          <p className="mx-auto mt-8 max-w-lg text-base leading-relaxed text-muted-foreground md:text-[17px]">
            Soluciones tecnológicas hechas a la medida para empresas que confían
            en nuestra visión.
          </p>
          <div className="mt-12 flex items-center justify-center gap-3 text-[11px] font-semibold uppercase tracking-[0.24em] text-muted-foreground/80">
            <span className="h-px w-8 bg-border" />
            <span>06 Proyectos destacados</span>
            <span className="h-px w-8 bg-border" />
          </div>
        </div>
      </div>
    </section>
  );
}

/* ---------- Intro ---------- */

function IntroSection() {
  return (
    <section className="section-y">
      <div className="container-page">
        <div className="mx-auto grid gap-12 md:grid-cols-12 md:gap-20">
          <div className="md:col-span-5">
            <div className="flex items-center gap-3">
              <span className="h-px w-8 bg-accent/60" />
              <span className="text-[11px] font-semibold uppercase tracking-[0.24em] text-accent">
                Nuestra visión
              </span>
            </div>
            <h2 className="mt-6 text-[2.25rem] font-extrabold tracking-tight md:text-[3rem]">
              Proyectos Desarrollados con{" "}
              <span
                className="bg-clip-text text-transparent"
                style={{ backgroundImage: "var(--gradient-brand)" }}
              >
                Empresas
              </span>{" "}
              que Confían en Nuestra Visión
            </h2>
          </div>
          <div className="md:col-span-7 md:pt-4">
            <p className="measure text-[17px] leading-[1.75] text-muted-foreground">
              En CEREBIIA desarrollamos soluciones tecnológicas que responden a
              necesidades reales de empresas, instituciones y organizaciones.
              Cada proyecto refleja nuestra filosofía: entender profundamente el
              problema, diseñar experiencias intuitivas y construir tecnología
              que potencie procesos, decisiones y resultados.
            </p>
            <p className="measure mt-6 text-[17px] leading-[1.75] text-muted-foreground">
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

/* ---------- Projects ---------- */

function ProjectsSection() {
  return (
    <section id="proyectos" className="section-y border-y border-border/60 bg-surface">
      <div className="container-page">
        <div className="mx-auto max-w-2xl text-center">
          <div className="inline-flex items-center gap-3">
            <span className="h-px w-8 bg-accent/60" />
            <span className="text-[11px] font-semibold uppercase tracking-[0.24em] text-accent">
              Portafolio
            </span>
            <span className="h-px w-8 bg-accent/60" />
          </div>
          <h2 className="mt-6 text-[2.25rem] font-extrabold tracking-tight md:text-[3rem]">
            Un trabajo con propósito
          </h2>
          <p className="mx-auto mt-6 max-w-lg text-[17px] leading-relaxed text-muted-foreground">
            Una selección de proyectos donde tecnología, estrategia y humanidad
            se encuentran.
          </p>
        </div>

        <div className="mt-20 grid gap-8 md:grid-cols-2 md:gap-10">
          {projects.map((p, i) => (
            <ProjectCard key={p.title} project={p} index={i + 1} />
          ))}
        </div>
      </div>
    </section>
  );
}

function ProjectCard({ project, index }: { project: Project; index: number }) {
  return (
    <article className="group relative flex flex-col overflow-hidden rounded-2xl border border-border/70 bg-card shadow-card transition-all duration-300 hover:-translate-y-1 hover:border-primary/30 hover:shadow-elevated">
      <div className="relative aspect-[16/10] overflow-hidden bg-surface-muted">
        <img
          src={project.image}
          alt={project.alt}
          loading="lazy"
          className="h-full w-full object-cover object-top transition-transform duration-700 group-hover:scale-[1.04]"
        />
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0 bg-gradient-to-t from-foreground/25 via-transparent to-transparent opacity-70"
        />
        <span className="absolute left-5 top-5 rounded-pill bg-background/85 px-2.5 py-1 font-mono text-[11px] font-semibold uppercase tracking-[0.2em] text-foreground/80 shadow-soft backdrop-blur">
          / {String(index).padStart(2, "0")}
        </span>
        <span className="absolute right-5 top-5 inline-flex items-center rounded-pill bg-background/90 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.14em] text-primary shadow-soft backdrop-blur">
          {project.tag}
        </span>
      </div>
      <div className="flex flex-1 flex-col gap-5 p-8 md:p-10">
        <h3 className="text-[22px] font-bold leading-[1.25] tracking-tight md:text-[26px]">
          {project.title}
        </h3>
        <p className="text-[15px] leading-[1.7] text-muted-foreground">
          {project.description}
        </p>
        <a
          href="#contacto"
          className="mt-auto inline-flex items-center gap-1.5 pt-2 text-[13px] font-semibold uppercase tracking-[0.16em] text-primary transition-all hover:gap-2.5"
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
    <section id="contacto" className="section-y">
      <div className="container-page">
        <div
          className="relative overflow-hidden rounded-3xl px-8 py-20 text-center md:px-20 md:py-28"
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
          <div className="relative mx-auto max-w-2xl text-primary-foreground">
            <p className="text-[11px] font-semibold uppercase tracking-[0.24em] opacity-80">
              Innovación · Escalar · Impacto
            </p>
            <h2 className="mt-8 text-[2.5rem] font-extrabold leading-[1.05] tracking-tight text-primary-foreground md:text-[3.75rem]">
              Inspiramos Transformación con Humanidad
            </h2>
            <p className="mx-auto mt-6 max-w-xl text-base leading-relaxed opacity-90 md:text-[17px]">
              Innovación hecha a la medida para resolver, escalar y generar
              impacto. Transformemos tu organización juntos.
            </p>
            <div className="mt-12">
              <a
                href="https://cerebiia.com/contacto/"
                className="inline-flex items-center gap-2 rounded-pill bg-white px-8 py-4 text-[15px] font-bold text-primary shadow-elevated hover:-translate-y-0.5 hover:shadow-2xl"
              >
                ¡Empecemos!
                <ArrowUpRight className="h-5 w-5" />
              </a>
            </div>
          </div>
        </div>

        <div className="mt-20 grid gap-6 md:grid-cols-3 md:gap-8">
          <ContactItem
            Icon={MapPin}
            title="Ubicación"
            value="Calle 6 #12E-45, Barrio Colsag, Cúcuta, Colombia"
          />
          <ContactItem Icon={Phone} title="Teléfono" value="+57 311 2220607" />
          <ContactItem
            Icon={Mail}
            title="Correo"
            value="contacto@cerebiia.com"
          />
        </div>
      </div>
    </section>
  );
}

function ContactItem({
  Icon,
  title,
  value,
}: {
  Icon: ComponentType<SVGProps<SVGSVGElement>>;
  title: string;
  value: string;
}) {
  return (
    <div className="group flex items-start gap-4 rounded-2xl border border-border/70 bg-card p-7 shadow-soft transition-all hover:-translate-y-0.5 hover:border-primary/30 hover:shadow-card">
      <span
        aria-hidden
        className="grid h-11 w-11 shrink-0 place-items-center rounded-xl text-white transition-transform group-hover:scale-105"
        style={{ background: "var(--gradient-brand)" }}
      >
        <Icon className="h-5 w-5" strokeWidth={2} />
      </span>
      <div className="min-w-0">
        <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-muted-foreground">
          {title}
        </p>
        <p className="mt-2 text-[15px] font-medium leading-relaxed text-foreground">
          {value}
        </p>
      </div>
    </div>
  );
}

/* ---------- Footer ---------- */

function Footer() {
  return (
    <footer id="contacto" className="border-t border-border/60 bg-[color:var(--hero-bg)]">
      <div className="mx-auto max-w-7xl px-5 py-20 lg:px-10">
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
                  className="flex h-10 w-10 items-center justify-center rounded-full border border-border bg-background text-[color:var(--brand-navy)] hover:border-[color:var(--brand-navy)] hover:bg-[color:var(--brand-navy)] hover:text-primary-foreground"
                >
                  <Icon className="h-4 w-4" strokeWidth={1.75} />
                </a>
              ))}
              <a
                href="#"
                aria-label="TikTok"
                className="flex h-10 w-10 items-center justify-center rounded-full border border-border bg-background text-xs font-bold text-[color:var(--brand-navy)] hover:border-[color:var(--brand-navy)] hover:bg-[color:var(--brand-navy)] hover:text-primary-foreground"
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
                  <a href="#" className="text-muted-foreground hover:text-[color:var(--brand-navy)]">
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
