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
              The BrainWaves research group, led by Joana Cabral, is part of the{" "}
              <InlineLink href="https://www.laseeb.org/">Evolutionary Systems and Biomedical Engineering Lab (LaSEEB)</InlineLink>,
              at the <InlineLink href="https://tecnico.ulisboa.pt/en/about-tecnico/">Instituto Superior Técnico (IST)</InlineLink>,
              the engineering school of the{" "}
              <InlineLink href="https://www.ulisboa.pt/en/info/welcome-ulisboa">University of Lisbon</InlineLink>. It is
              integrated in the{" "}
              <InlineLink href="https://isr.tecnico.ulisboa.pt/">Institute for Systems and Robotics (ISR-Lisboa)</InlineLink>,
              a research unit from the{" "}
              <InlineLink href="https://groups.tecnico.ulisboa.pt/~larsys.daemon/">Laboratory for Robotics and Engineering Systems (LARSyS)</InlineLink>{" "}
              in the LIFE Thematic Line.
            </p>
            <p className="mt-4 max-w-xl text-base text-muted-foreground">
              The BrainWaves research group investigates brain dynamics, with a focus on emergent properties such as
              collective oscillations, long-range correlations, resonance, and non-stationary behaviour. We combine
              neuroimaging analysis and signal processing with dynamical systems theory, computational modelling, and
              physical experiments to uncover the mechanisms behind the observed dynamics and their links to cognition
              and mental health.
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
