import { Link } from "@tanstack/react-router";
import logo from "@/assets/brainwaves-logo.png";
import { ThemeToggle } from "@/components/theme-toggle";
import larsysLogo from "@/assets/LOGO_LARSyS-1024x395.png";
import tecnicoLogo from "@/assets/LogoTecnico.png";
import isrLogo from "@/assets/isrLogo.png";
import laseebLogo from "@/assets/laseeb-300x300.png";

const affiliationLogos = [
  { src: larsysLogo, alt: "LARSyS logo" },
  { src: tecnicoLogo, alt: "Instituto Superior Técnico logo" },
  { src: isrLogo, alt: "ISR-Lisboa logo" },
  { src: laseebLogo, alt: "LaSEEB logo" },
];

const links = [
  { to: "/", label: "Home" },
  { to: "/team", label: "Team" },
  { to: "/publications", label: "Publications" },
  { to: "/news", label: "News" },
  { to: "/cv", label: "CV & Projects" },
  { to: "/talks", label: "Talks" },
  { to: "/tools", label: "Tools" },
] as const;

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-50 border-b border-border/60 bg-background/70 backdrop-blur-xl">
      <div className="container-page flex h-40 items-center justify-between gap-6">
        <Link to="/" className="flex items-center gap-3 group">
          <img src={logo} alt="BrainWaves logo" className="h-[5.5rem] w-[5.5rem] brain-glow transition-transform group-hover:scale-105" />
          <div className="leading-tight">
            <div className="font-display text-[2rem] font-semibold text-foreground">BrainWaves</div>
            <div className="text-[20px] uppercase tracking-[0.18em] text-muted-foreground">Tecnico Lisboa</div>
          </div>
        </Link>
        <div className="flex items-center gap-2">
          <nav className="hidden md:flex items-center gap-1">
            {links.map((l) => (
              <Link
                key={l.to}
                to={l.to}
                className="px-3 py-2 text-base text-muted-foreground rounded-md transition-colors hover:text-foreground hover:bg-secondary/60"
                activeProps={{ className: "px-3 py-2 text-base rounded-md text-primary bg-secondary/60" }}
              >
                {l.label}
              </Link>
            ))}
          </nav>
          <ThemeToggle />
        </div>
      </div>
      <nav className="md:hidden flex overflow-x-auto gap-1 px-4 pb-2">
        {links.map((l) => (
          <Link key={l.to} to={l.to} className="shrink-0 px-3 py-1.5 text-xs text-muted-foreground rounded-md hover:text-foreground" activeProps={{ className: "shrink-0 px-3 py-1.5 text-xs rounded-md text-primary bg-secondary/60" }}>
            {l.label}
          </Link>
        ))}
      </nav>
    </header>
  );
}

export function SiteFooter() {
  return (
    <footer className="mt-24 border-t border-border/60">
      <div className="container-page py-10 grid gap-6 md:grid-cols-3 text-sm text-muted-foreground">
        <div>
          <div className="font-display text-foreground font-semibold">BrainWaves Group</div>
          <p className="mt-2">Part of LaSEEB, ISR-Lisboa, Instituto Superior Técnico, University of Lisbon.</p>
        </div>
        <div>
          <div className="font-display text-foreground font-semibold">Affiliations</div>
          <ul className="mt-2 space-y-1">
            <li>LaSEEB — Evolutionary Systems and Biomedical Engineering Lab</li>
            <li>ISR-Lisboa · LARSyS</li>
            <li>Instituto Superior Técnico</li>
          </ul>
        </div>
        <div>
          <div className="font-display text-foreground font-semibold">Contact</div>
          <p className="mt-2">Av. Rovisco Pais 1, 1049-001 Lisbon, Portugal</p>
        </div>
      </div>
      <div className="border-t border-border/60 py-6 flex flex-wrap items-center justify-center gap-6">
        {affiliationLogos.map((l) => (
          <div key={l.alt} className="h-12 rounded-md bg-white px-3 py-1.5 flex items-center">
            <img src={l.src} alt={l.alt} className="h-full w-auto object-contain" />
          </div>
        ))}
      </div>
      <div className="border-t border-border/60 py-4 text-center text-xs text-muted-foreground">
        © {new Date().getFullYear()} BrainWaves Group. All rights reserved.
      </div>
    </footer>
  );
}
