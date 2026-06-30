import { createFileRoute } from "@tanstack/react-router";
import { PageShell, PageHeader } from "@/components/page-shell";
import { Download, FolderKanban } from "lucide-react";

export const Route = createFileRoute("/cv")({
  head: () => ({
    meta: [
      { title: "CV & Projects — BrainWaves Group" },
      { name: "description", content: "Curriculum vitae and active research projects of the BrainWaves Group PI." },
      { property: "og:title", content: "CV & Projects — BrainWaves Group" },
      { property: "og:description", content: "CV and research projects." },
    ],
  }),
  component: CvPage,
});

const projects = [
  { name: "Project Name 1", funder: "Funding agency · 2024–2027", desc: "Short project description — replace." },
  { name: "Project Name 2", funder: "Funding agency · 2023–2026", desc: "Short project description — replace." },
];

function CvPage() {
  return (
    <PageShell>
      <PageHeader eyebrow="About the PI" title="CV & Research Projects" description="Academic background, positions and active research projects." />
      <div className="container-page py-12 grid lg:grid-cols-3 gap-8">
        <section className="lg:col-span-2 space-y-6">
          <div className="glass-card p-6">
            <h2 className="font-display text-xl font-semibold">Curriculum Vitae</h2>
            <p className="mt-2 text-sm text-muted-foreground">A short narrative bio goes here — replace with current text describing background, current role and main research interests.</p>
            <a href="#" className="mt-4 inline-flex items-center gap-2 rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground">
              <Download className="h-4 w-4" /> Download full CV (PDF)
            </a>
          </div>
          <div className="glass-card p-6">
            <h3 className="font-semibold">Education</h3>
            <ul className="mt-3 space-y-2 text-sm text-muted-foreground">
              <li>PhD — Institution, Year</li>
              <li>MSc — Institution, Year</li>
              <li>BSc — Institution, Year</li>
            </ul>
          </div>
          <div className="glass-card p-6">
            <h3 className="font-semibold">Positions</h3>
            <ul className="mt-3 space-y-2 text-sm text-muted-foreground">
              <li>Current position — Institution, Year–present</li>
              <li>Previous position — Institution, Years</li>
            </ul>
          </div>
        </section>

        <aside>
          <h2 className="font-display text-xl font-semibold mb-4">Active projects</h2>
          <div className="space-y-3">
            {projects.map((p) => (
              <div key={p.name} className="glass-card p-5">
                <FolderKanban className="h-5 w-5 text-primary" />
                <div className="mt-3 font-semibold">{p.name}</div>
                <div className="text-xs uppercase tracking-wider text-primary mt-1">{p.funder}</div>
                <p className="mt-2 text-sm text-muted-foreground">{p.desc}</p>
              </div>
            ))}
          </div>
        </aside>
      </div>
    </PageShell>
  );
}
