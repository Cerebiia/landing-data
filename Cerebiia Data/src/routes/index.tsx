import { createFileRoute } from "@tanstack/react-router";
import logo from "@/assets/cerebiia-logo.png";
import dashboard from "@/assets/dashboard-mockup.jpg";
import caseFrontera from "@/assets/case-frontera.jpg";
import logo1 from "@/assets/clients/client-1.png";
import logo2 from "@/assets/clients/client-2.png";
import logo3 from "@/assets/clients/client-3.png";
import logo4 from "@/assets/clients/client-4.png";
import { useState } from "react";
import {
  ChevronDown,
  Check,
  Sprout,
  Crown,
  ClipboardCheck,
  ShieldCheck,
  ArrowRight,
  PlayCircle,
  Instagram,
  Facebook,
  MapPin,
  Phone,
  Mail,
  Quote,
  Sparkles,
  Users,
  Database,
  Lock,
  MessageSquare,
  X,
} from "lucide-react";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Cerebiia Data — Cumplimiento Ley 1581 de 2012" },
      {
        name: "description",
        content:
          "Plataforma web todo-en-uno para el cumplimiento de la Ley 1581 de 2012: recolección, validación, auditoría y comunicaciones masivas de datos personales.",
      },
      { property: "og:title", content: "Cerebiia Data — Cumplimiento Ley 1581 de 2012" },
      {
        property: "og:description",
        content: "Automatiza y centraliza el tratamiento de datos personales con Cerebiia Data.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

const navLinks = [
  { label: "Inicio", href: "#inicio" },
  { label: "SaaS", href: "#saas", hasChevron: true },
  { label: "Proyectos", href: "/proyectos" },
  { label: "Contacto", href: "#contacto" },
];

const plans = [
  {
    name: "Plan Semilla",
    icon: Sprout,
    tagline: "Para empresas que inician su gestión de datos personales.",
    price: "1.000.000",
    features: [
      "Acceso completo a las funciones de la plataforma",
      "Hasta 10.000 registros de datos personales",
      "1 Usuario",
      "Asesoría legal para la implementación de 1 plantilla personalizada",
    ],
    featured: false,
  },
  {
    name: "Plan Corporativo",
    icon: Crown,
    tagline: "Para organizaciones que requieren monitoreo, reportes y envíos masivos.",
    price: "3.000.000",
    features: [
      "Acceso completo a las funciones de la plataforma",
      "Hasta 100.000 registros de datos personales",
      "Usuarios ilimitados",
      "Asesoría legal para la implementación de 1 plantilla personalizada",
      "10.000 SMS durante el primer mes",
    ],
    featured: true,
  },
  {
    name: "Plan Profesional",
    icon: ClipboardCheck,
    tagline: "Para empresas que manejan grandes volúmenes de datos.",
    price: "2.000.000",
    features: [
      "Acceso completo a las funciones de la plataforma",
      "Hasta 50.000 registros de datos personales",
      "5 Usuarios",
      "Asesoría legal para la implementación de 1 plantilla personalizada",
    ],
    featured: false,
  },
];

const allies = [
  { name: "Cliente 1", logo: logo1 },
  { name: "Cliente 2", logo: logo2 },
  { name: "Cliente 3", logo: logo3 },
  { name: "Cliente 4", logo: logo4 },
];

function Index() {
  const [isVideoModalOpen, setIsVideoModalOpen] = useState(false);

  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* NAV */}
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
              className="inline-flex shrink-0 items-center justify-center rounded-xl bg-[color:var(--brand-navy)] px-5 py-2.5 text-sm font-semibold text-primary-foreground shadow-[var(--shadow-cta)] transition-all duration-300 ease-out hover:brightness-110 hover:-translate-y-0.5 sm:px-6"
            >
              Ingresar
            </a>
          </div>
        </div>
      </header>

      {/* HERO */}
      <section id="inicio" className="relative overflow-hidden py-12 md:py-20 lg:py-28">
        <div
          className="pointer-events-none absolute inset-x-0 top-0 -z-10 h-[520px] opacity-70"
          style={{
            background:
              "radial-gradient(60% 60% at 20% 0%, color-mix(in oklab, var(--brand-navy) 12%, transparent), transparent 60%), radial-gradient(50% 50% at 90% 10%, color-mix(in oklab, var(--brand-violet) 12%, transparent), transparent 60%)",
          }}
        />
        <div className="mx-auto max-w-7xl px-5 lg:px-10">
          <div className="grid gap-12 lg:grid-cols-2 lg:gap-16">
            <div className="flex flex-col justify-center">
              <span className="inline-flex items-center gap-2 rounded-full border border-border/70 bg-background/70 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.16em] text-[color:var(--brand-navy)] shadow-[var(--shadow-soft)] backdrop-blur w-fit">
                <ShieldCheck className="h-3.5 w-3.5" strokeWidth={2.25} /> Ley 1581 de 2012
              </span>
              <h1 className="mt-6 text-balance text-3xl font-bold leading-[1.1] tracking-tight text-foreground sm:text-4xl lg:text-5xl">
                Cerebiia Data —{" "}
                <span className="text-[color:var(--brand-navy)]">Cumplimiento Total</span> de la Ley 1581 de 2012
              </h1>
              <p className="mt-6 max-w-[58ch] text-base leading-[1.75] text-muted-foreground sm:text-[17px]">
                Plataforma web todo-en-uno que centraliza y automatiza la recolección, almacenamiento, validación,
                auditoría y envío masivo (<span className="font-semibold text-foreground">SMS, Email, WhatsApp</span>)
                de datos personales con respaldo legal.
              </p>
              <div className="mt-8 flex flex-wrap items-center gap-3">
                <a
                  href="#ingresar"
  className="inline-flex items-center justify-center gap-2 rounded-xl bg-[color:var(--brand-navy)] px-6 py-3 text-sm font-semibold text-primary-foreground shadow-[var(--shadow-cta)] transition-all duration-300 ease-out hover:brightness-110 hover:-translate-y-0.5 sm:px-7 sm:py-3.5"
                >
                  Ingresar <ArrowRight className="h-4 w-4" />
                </a>
                <a
                  href="#contacto"
                  className="inline-flex items-center justify-center gap-2 rounded-xl border border-border bg-background px-6 py-3 text-sm font-semibold text-foreground transition-all duration-300 ease-out hover:border-[color:var(--brand-navy)] hover:text-[color:var(--brand-navy)] sm:px-7 sm:py-3.5"
                >
                  <PlayCircle className="h-4 w-4" /> Agendar Demo
                </a>
              </div>
              <div className="mt-8 flex flex-wrap items-center gap-x-6 gap-y-3 text-xs font-medium text-muted-foreground sm:gap-x-8">
                <span className="inline-flex items-center gap-2"><Check className="h-4 w-4 text-[color:var(--brand-navy)]" /> Trazabilidad completa</span>
                <span className="inline-flex items-center gap-2"><Check className="h-4 w-4 text-[color:var(--brand-navy)]" /> Asesoría legal incluida</span>
                <span className="inline-flex items-center gap-2"><Check className="h-4 w-4 text-[color:var(--brand-navy)]" /> Envíos masivos</span>
              </div>
            </div>

            <div className="relative flex items-center justify-center">
              <div
                className="absolute -inset-4 -z-10 rounded-[2rem] opacity-60 blur-2xl"
                style={{
                  background:
                    "linear-gradient(135deg, color-mix(in oklab, var(--brand-navy) 30%, transparent), color-mix(in oklab, var(--brand-violet) 30%, transparent))",
                }}
              />
              <div className="w-full max-w-2xl overflow-hidden rounded-2xl border border-border/60 bg-card shadow-[var(--shadow-card)]">
                <img 
                  src={dashboard} 
                  alt="Dashboard Cerebiia Data" 
                  width={1280} 
                  height={1024} 
                  className="h-auto w-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FEATURES */}
      <section className="border-t border-border/60 bg-[color:var(--hero-bg)] py-16 md:py-20">
        <div className="mx-auto max-w-7xl px-5 lg:px-10">
          <div className="mx-auto max-w-2xl text-center">
            <div className="inline-flex items-center gap-3">
              <span className="h-px w-12 bg-accent/60" />
              <span className="text-[11px] font-semibold uppercase tracking-[0.24em] text-[color:var(--brand-violet)]">
                Características
              </span>
              <span className="h-px w-12 bg-accent/60" />
            </div>
            <h2 className="mt-8 text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
              Todo lo que necesitas para el cumplimiento
            </h2>
          </div>
          <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {[
              {
                icon: Database,
                title: "Gestión de Datos",
                description: "Centraliza y organiza toda la información de datos personales.",
              },
              {
                icon: Lock,
                title: "Seguridad Avanzada",
                description: "Protección de datos con los más altos estándares de seguridad.",
              },
              {
                icon: MessageSquare,
                title: "Comunicaciones",
                description: "Envíos masivos de SMS, Email y WhatsApp automatizados.",
              },
              {
                icon: Users,
                title: "Gestión de Usuarios",
                description: "Control de accesos y permisos para tu equipo.",
              },
            ].map((feature, i) => {
              const Icon = feature.icon;
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
                    {feature.title}
                  </h3>
                  <p className="mt-2 text-sm leading-[1.7] text-muted-foreground">
                    {feature.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* SAAS / DESCRIPTION */}
      <section id="saas" className="border-t border-border/60 bg-background py-16 md:py-20">
        <div className="mx-auto grid max-w-6xl items-center gap-14 px-5 lg:grid-cols-2 lg:gap-20 lg:px-10">
          <div>
            <div className="inline-flex items-center gap-3">
              <span className="h-px w-12 bg-accent/60" />
              <span className="text-[11px] font-semibold uppercase tracking-[0.24em] text-[color:var(--brand-violet)]">
                Nuestra plataforma
              </span>
              <span className="h-px w-12 bg-accent/60" />
            </div>
            <h2 className="mt-8 text-3xl font-bold tracking-tight text-foreground sm:text-4xl lg:text-[2.75rem]">
              Cerebiia Data 1581
            </h2>
            <p className="mt-6 max-w-[58ch] text-[17px] leading-[1.75] text-muted-foreground">
              <span className="font-semibold text-foreground">Cerebiia Data</span> es una plataforma web diseñada para
              garantizar el cumplimiento total de la{" "}
              <span className="font-semibold text-foreground">Ley 1581 de 2012</span> y la normativa vigente en
              protección de datos personales. Centraliza y automatiza todo el proceso de recolección, almacenamiento,
              validación, auditoría y uso de datos, ofreciendo trazabilidad completa y máxima transparencia. Además,
              integra <span className="font-semibold text-foreground">asesoría legal</span> y herramientas de{" "}
              <span className="font-semibold text-foreground">envío masivo</span> y segmentado de comunicaciones (
              <span className="font-semibold text-foreground">SMS, correo electrónico y WhatsApp</span>) para
              autorizaciones, marketing o mensajes personalizados. Una solución todo-en-uno que protege la información
              de tus usuarios, optimiza la gestión interna y{" "}
              <span className="font-semibold text-foreground">evita sanciones por incumplimiento</span>.
            </p>
          </div>
          <div className="grid gap-4 sm:grid-cols-2">
            {[
              { t: "Recolección y validación", d: "Formularios con autorización y captura verificada." },
              { t: "Auditoría y trazabilidad", d: "Historial completo de cada dato personal." },
              { t: "Envíos masivos", d: "SMS, Email y WhatsApp segmentados." },
              { t: "Respaldo legal", d: "Asesoría experta y plantillas listas." },
            ].map((f) => (
              <div key={f.t} className="rounded-2xl border border-border/70 bg-card p-6 shadow-[var(--shadow-soft)] transition-all duration-300 ease-out hover:-translate-y-1 hover:border-primary/30 hover:shadow-card">
                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-[color:var(--chip)] text-[color:var(--brand-navy)] transition-transform duration-300 hover:scale-110">
                  <Sparkles className="h-5 w-5" strokeWidth={1.75} />
                </div>
                <h3 className="mt-4 text-base font-semibold text-foreground">{f.t}</h3>
                <p className="mt-1.5 text-sm leading-[1.7] text-muted-foreground">{f.d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PRICING */}
      <section id="proyectos" className="border-t border-border/60 py-16 md:py-20">
        <div className="mx-auto max-w-7xl px-5 lg:px-10">
          <div className="mx-auto max-w-3xl text-center">
            <div className="inline-flex items-center gap-3">
              <span className="h-px w-12 bg-accent/60" />
              <span className="text-[11px] font-semibold uppercase tracking-[0.24em] text-[color:var(--brand-violet)]">
                Precios
              </span>
              <span className="h-px w-12 bg-accent/60" />
            </div>
            <h2 className="mt-8 text-balance text-3xl font-bold tracking-tight text-foreground sm:text-4xl lg:text-[2.5rem]">
              Planes y Soluciones para tu Cumplimiento Legal
            </h2>
            <p className="mx-auto mt-6 max-w-lg text-base leading-relaxed text-muted-foreground md:text-[17px]">
              Elige el plan que mejor se adapte a las necesidades de tu empresa.
            </p>
          </div>

          <div className="mt-16 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {plans.map((plan) => {
              const Icon = plan.icon;
              return (
                <article
                  key={plan.name}
                  className={
                    "relative flex flex-col rounded-3xl border bg-card p-8 sm:p-10 transition-all duration-300 ease-out " +
                    (plan.featured
                      ? "border-[color:var(--brand-navy)]/30 shadow-[var(--shadow-card)] lg:-translate-y-2 ring-2 ring-[color:var(--brand-navy)]/20 hover:shadow-elevated"
                      : "border-border/70 shadow-[var(--shadow-soft)] hover:-translate-y-2 hover:border-primary/30 hover:shadow-elevated")
                  }
                >
                  {plan.featured && (
                    <span className="absolute -top-4 left-1/2 -translate-x-1/2 rounded-full bg-[color:var(--brand-navy)] px-4 py-1.5 text-[11px] font-bold uppercase tracking-[0.14em] text-white shadow-[var(--shadow-cta)]">
                      Más popular
                    </span>
                  )}
                  <div className="flex flex-col items-center text-center">
                    <span
                      className="flex h-14 w-14 items-center justify-center rounded-2xl text-white transition-transform duration-300 hover:scale-110"
                      style={{ background: "var(--gradient-brand)" }}
                    >
                      <Icon className="h-7 w-7" strokeWidth={1.75} />
                    </span>
                    <h3 className="mt-5 text-xl font-bold text-foreground">{plan.name}</h3>
                    <p className="mt-2 max-w-[26ch] text-sm leading-[1.6] text-muted-foreground">{plan.tagline}</p>
                  </div>
                  <div className="mt-8 text-center">
                    <div className="flex items-baseline justify-center gap-1">
                      <span className="text-2xl font-semibold text-foreground">$</span>
                      <span className="text-4xl font-bold leading-none tracking-tight text-foreground">
                        {plan.price}
                      </span>
                    </div>
                    <p className="mt-2 text-xs font-medium uppercase tracking-[0.14em] text-muted-foreground">
                      COP / anual
                    </p>
                  </div>
                  <div className="my-8 h-px bg-border/70" />
                  <ul className="flex flex-1 flex-col gap-4">
                    {plan.features.map((t, i) => (
                      <li key={i} className="flex items-start gap-3 text-sm leading-[1.7] text-muted-foreground">
                        <span className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-[color:var(--brand-navy)]/10 text-[color:var(--brand-navy)]">
                          <Check className="h-3.5 w-3.5" strokeWidth={3} />
                        </span>
                        <span className="break-words">{t}</span>
                      </li>
                    ))}
                  </ul>
                  <a
                    href="#contacto"
                    className={
                      "mt-8 inline-flex items-center justify-center gap-2 rounded-xl px-6 py-3.5 text-sm font-semibold transition-all duration-300 ease-out hover:-translate-y-0.5 " +
                      (plan.featured
                        ? "bg-[color:var(--brand-navy)] text-white shadow-[var(--shadow-cta)] hover:brightness-110 hover:shadow-elevated"
                        : "border-2 border-border bg-background text-foreground hover:border-[color:var(--brand-navy)] hover:text-[color:var(--brand-navy)]")
                    }
                  >
                    Seleccionar Plan
                    <ArrowRight className="h-4 w-4" />
                  </a>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      {/* CLIENTS */}
      <section className="border-t border-border/60 bg-[color:var(--hero-bg)] py-16 md:py-20">
        <div className="mx-auto max-w-7xl px-5 lg:px-10">
          <div className="mx-auto max-w-2xl text-center">
            <div className="inline-flex items-center gap-3">
              <span className="h-px w-12 bg-accent/60" />
              <span className="text-[11px] font-semibold uppercase tracking-[0.24em] text-[color:var(--brand-violet)]">
                Confían en nosotros
              </span>
              <span className="h-px w-12 bg-accent/60" />
            </div>
            <h2 className="mt-8 text-2xl font-bold tracking-tight text-foreground sm:text-3xl">
              Clientes y Aliados
            </h2>
          </div>
          <div className="mt-12 overflow-hidden">
            <div className="flex gap-6 animate-scroll">
              {[...allies, ...allies].map((ally, i) => (
                <div
                  key={`${ally.name}-${i}`}
                  className="flex-shrink-0 flex h-32 w-56 items-center justify-center rounded-xl border border-border/70 bg-[color:var(--brand-navy)] px-4 text-center shadow-[var(--shadow-soft)] transition-all duration-300 ease-out hover:-translate-y-1 hover:border-primary/40 hover:shadow-elevated"
                >
                  {ally.logo ? (
                    <img
                      src={ally.logo}
                      alt={ally.name}
                      className="h-24 w-auto max-w-full object-contain opacity-90 hover:opacity-100 transition-opacity"
                    />
                  ) : (
                    <span className="truncate text-sm font-semibold tracking-wide text-white">{ally.name}</span>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CASE STUDY */}
      <section className="border-t border-border/60 bg-background py-16 md:py-20">
        <div className="mx-auto max-w-7xl px-5 lg:px-10">
          <div className="mx-auto max-w-2xl text-center">
            <div className="inline-flex items-center gap-3">
              <span className="h-px w-12 bg-accent/60" />
              <span className="text-[11px] font-semibold uppercase tracking-[0.24em] text-[color:var(--brand-violet)]">
                Caso de Éxito
              </span>
              <span className="h-px w-12 bg-accent/60" />
            </div>
            <h2 className="mt-8 text-2xl font-bold tracking-tight text-foreground sm:text-3xl">
              Frontera Celular
            </h2>
          </div>

          <div className="mt-12 grid items-center gap-8 rounded-3xl border border-border/70 bg-card p-6 shadow-[var(--shadow-card)] transition-all duration-300 ease-out hover:shadow-elevated sm:gap-12 sm:p-8 lg:grid-cols-2 lg:gap-16 lg:p-12">
            <div className="relative aspect-video overflow-hidden rounded-2xl cursor-pointer group" onClick={() => setIsVideoModalOpen(true)}>
              <iframe
                src="https://www.instagram.com/reel/DRAGPiIDhXz/embed"
                className="h-full w-full"
                frameBorder="0"
                scrolling="no"
                allowTransparency={true}
                allow="encrypted-media"
              />
              <div className="absolute inset-0 bg-black/20 flex items-center justify-center transition-opacity duration-300 group-hover:bg-black/30">
                <span className="flex h-20 w-20 items-center justify-center rounded-full bg-white/95 text-[color:var(--brand-navy)] shadow-[var(--shadow-card)] transition-transform duration-300 group-hover:scale-110">
                  <PlayCircle className="h-12 w-12" strokeWidth={1.5} />
                </span>
              </div>
            </div>
            <div className="min-w-0">
              <Quote className="h-8 w-8 text-[color:var(--brand-navy)]" strokeWidth={1.5} />
              <p className="mt-4 text-base leading-[1.8] text-foreground sm:text-[17px]">
                En Frontera Celular realizamos un training corporativo: cumplimiento en Tratamiento de Datos y sesión
                práctica de Cerebiia para planear, ejecutar y medir campañas. Un flujo claro de principio a fin.
              </p>
              <p className="mt-4 text-sm leading-[1.75] text-muted-foreground">
                Agenda una cita gratis ahora para tu equipo y descubre cómo protegemos la información de tus usuarios
                mientras optimizamos tu operación.
              </p>
              <div className="mt-6 flex flex-wrap items-center gap-3">
                <a
                  href="#contacto"
                  className="inline-flex items-center justify-center gap-2 rounded-xl bg-[color:var(--brand-navy)] px-6 py-3 text-sm font-semibold text-primary-foreground shadow-[var(--shadow-cta)] transition-all duration-300 ease-out hover:brightness-110 hover:-translate-y-0.5"
                >
                  Agendar Demo <ArrowRight className="h-4 w-4" />
                </a>
                <span className="text-xs font-medium text-muted-foreground">15 me gusta · @cerebi.ia</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer id="contacto" className="border-t border-border/60 bg-[color:var(--hero-bg)] py-12 md:py-16">
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

      {/* Video Modal */}
      {isVideoModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 p-4" onClick={() => setIsVideoModalOpen(false)}>
          <div className="relative w-full max-w-md" onClick={(e) => e.stopPropagation()}>
            <button
              onClick={() => setIsVideoModalOpen(false)}
              className="absolute -top-12 right-0 flex h-10 w-10 items-center justify-center rounded-full bg-white/10 text-white transition-all hover:bg-white/20"
              aria-label="Cerrar video"
            >
              <X className="h-6 w-6" />
            </button>
            <div className="aspect-[9/16] overflow-hidden rounded-2xl bg-black">
              <iframe
                src="https://www.instagram.com/reel/DRAGPiIDhXz/embed"
                className="h-full w-full"
                frameBorder="0"
                scrolling="no"
                allowTransparency={true}
                allow="encrypted-media"
              />
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
