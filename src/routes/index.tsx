import { createFileRoute, Link } from "@tanstack/react-router";
import { PageShell } from "@/components/page-shell";
import logo from "@/assets/brainwaves-logo.png";
import teamPhoto from "@/assets/team-photo.jpeg";
import { ArrowRight } from "lucide-react";
import type { ReactNode } from "react";

function InlineLink({ href, children }: { href: string; children: ReactNode }) {
  return (
    <a href={href} target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">
      {children}
    </a>
  );
}

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "BrainWaves Group — Neuroengineering Research at IST" },
      { name: "description", content: "BrainWaves is a biomedical neuroengineering research group at LaSEEB, ISR-Lisboa, Instituto Superior Técnico." },
      { property: "og:title", content: "BrainWaves Group" },
      { property: "og:description", content: "Neuroengineering research at LaSEEB, ISR-Lisboa, Instituto Superior Técnico." },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <PageShell>
      {/* Hero */}
      <section className="relative overflow-hidden">
        <div className="container-page grid lg:grid-cols-[1.1fr_1fr] gap-12 items-center py-20 md:py-28">
          <div>
            <h1 className="font-display text-5xl md:text-6xl font-semibold leading-[1.05] text-foreground">
              Decoding the brain,<br />
              <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">one wave at a time.</span>
            </h1>
            <p className="mt-6 max-w-xl text-lg text-muted-foreground">
              The BrainWaves Lab is led by Joana Cabral, Assistant Professor at the{" "}
              <InlineLink href="https://dbe.tecnico.ulisboa.pt/en/sobre">Department of Bioengineering</InlineLink> of{" "}
              <InlineLink href="https://tecnico.ulisboa.pt/en/about-tecnico/">Instituto Superior Técnico (IST)</InlineLink>,{" "}
              <InlineLink href="https://www.ulisboa.pt/en/info/welcome-ulisboa">University of Lisbon</InlineLink>. The lab
              is part of the{" "}
              <InlineLink href="https://www.laseeb.org/">Evolutionary Systems and Biomedical Engineering Lab (LaSEEB)</InlineLink>,
              a research group of ISR Lisboa at{" "}
              <InlineLink href="https://tecnico.ulisboa.pt/en/about-tecnico/">IST</InlineLink>, the engineering school of
              the <InlineLink href="https://www.ulisboa.pt/en/info/welcome-ulisboa">University of Lisbon</InlineLink>.
            </p>
            <p className="mt-4 max-w-xl text-lg text-muted-foreground">
              BrainWaves Lab investigates the large-scale dynamics of brain activity, focusing on how oscillatory
              patterns and wave-like phenomena shape brain function over time. The lab combines computational modelling,
              neuroimaging analysis, and signal processing methods to explore brain network dynamics, cerebrospinal
              fluid flow, and their relevance to cognition and neurological health.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Link to="/team" className="inline-flex items-center gap-2 rounded-md bg-primary px-5 py-2.5 text-sm font-medium text-primary-foreground hover:opacity-90 transition">
                Meet the team <ArrowRight className="h-4 w-4" />
              </Link>
              <Link to="/publications" className="inline-flex items-center gap-2 rounded-md border border-border bg-secondary/40 px-5 py-2.5 text-sm font-medium hover:bg-secondary transition">
                Read our research
              </Link>
            </div>
          </div>
          <div className="relative flex justify-center">
            <div className="absolute inset-0 bg-gradient-radial from-primary/20 to-transparent blur-3xl" />
            <img src={logo} alt="BrainWaves logo" className="relative h-80 w-80 md:h-96 md:w-96 brain-glow" />
          </div>
        </div>
      </section>

      {/* Team photo */}
      <section className="container-page py-16">
        <div className="glass-card overflow-hidden">
          <img src={teamPhoto} alt="BrainWaves team at Instituto Superior Técnico" className="w-full h-auto" />
          <div className="p-6 md:p-8 flex flex-wrap items-end justify-between gap-4">
            <div>
              <div className="text-xs uppercase tracking-[0.2em] text-primary">Our team</div>
              <h2 className="mt-2 font-display text-2xl font-semibold">At Instituto Superior Técnico, Lisbon</h2>
            </div>
            <Link to="/team" className="inline-flex items-center gap-2 text-sm text-primary hover:underline">
              See everyone <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>
    </PageShell>
  );
}
