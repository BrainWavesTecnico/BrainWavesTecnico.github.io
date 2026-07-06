import { createFileRoute } from "@tanstack/react-router";
import { PageShell } from "@/components/page-shell";
import teamPhoto from "@/assets/team-photo.jpeg";
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
            <h1 className="font-display text-2xl md:text-3xl font-semibold leading-[1.05] text-foreground">
              Decoding the brain,<br />
              <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">one wave at a time.</span>
            </h1>
            <p className="mt-6 max-w-xl text-base text-muted-foreground">
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
            <p className="mt-4 max-w-xl text-base text-muted-foreground">
              BrainWaves Lab investigates the large-scale dynamics of brain activity, focusing on how oscillatory
              patterns and wave-like phenomena shape brain function over time. The lab combines computational modelling,
              neuroimaging analysis, and signal processing methods to explore brain network dynamics, cerebrospinal
              fluid flow, and their relevance to cognition and neurological health.
            </p>
          </div>
          <div className="relative flex justify-center">
            <div className="absolute inset-0 bg-gradient-radial from-primary/20 to-transparent blur-3xl" />
            <img src={teamPhoto} alt="BrainWaves team at Instituto Superior Técnico" className="relative rounded-2xl w-full max-w-md brain-glow" />
          </div>
        </div>
      </section>
    </PageShell>
  );
}
