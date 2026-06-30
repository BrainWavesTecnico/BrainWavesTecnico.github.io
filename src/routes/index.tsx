import { createFileRoute, Link } from "@tanstack/react-router";
import { PageShell } from "@/components/page-shell";
import logo from "@/assets/brainwaves-logo.png.asset.json";
import teamPhoto from "@/assets/team-photo.jpeg.asset.json";
import { ArrowRight, Brain, Activity, Microscope } from "lucide-react";

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
            <div className="inline-flex items-center gap-2 rounded-full border border-border bg-secondary/40 px-3 py-1 text-xs uppercase tracking-[0.18em] text-primary">
              <span className="h-1.5 w-1.5 rounded-full bg-primary animate-pulse" />
              LaSEEB · ISR-Lisboa · IST
            </div>
            <h1 className="mt-6 font-display text-5xl md:text-6xl font-semibold leading-[1.05] text-foreground">
              Decoding the brain,<br />
              <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">one wave at a time.</span>
            </h1>
            <p className="mt-6 max-w-xl text-lg text-muted-foreground">
              BrainWaves is a research group at the Evolutionary Systems and Biomedical Engineering Lab (LaSEEB),
              part of ISR-Lisboa at Instituto Superior Técnico. We develop methods and tools to study brain dynamics
              for clinical and scientific impact.
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
            <img src={logo.url} alt="BrainWaves logo" className="relative h-80 w-80 md:h-96 md:w-96 brain-glow" />
          </div>
        </div>
      </section>

      {/* Pillars */}
      <section className="container-page py-16 grid md:grid-cols-3 gap-6">
        {[
          { icon: Brain, title: "Neural signal analysis", text: "EEG, fMRI and multimodal recordings to characterize brain function." },
          { icon: Activity, title: "Computational methods", text: "Machine learning and signal processing for biomedical data." },
          { icon: Microscope, title: "Translational impact", text: "From fundamental neuroscience to clinical applications." },
        ].map(({ icon: Icon, title, text }) => (
          <div key={title} className="glass-card p-6">
            <Icon className="h-7 w-7 text-primary" />
            <h3 className="mt-4 text-lg font-semibold">{title}</h3>
            <p className="mt-2 text-sm text-muted-foreground">{text}</p>
          </div>
        ))}
      </section>

      {/* Team photo */}
      <section className="container-page py-16">
        <div className="glass-card overflow-hidden">
          <img src={teamPhoto.url} alt="BrainWaves team at Instituto Superior Técnico" className="w-full h-auto" />
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
