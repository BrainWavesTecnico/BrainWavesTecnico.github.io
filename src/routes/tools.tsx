import { createFileRoute } from "@tanstack/react-router";
import { PageShell, PageHeader } from "@/components/page-shell";
import { Code2, ExternalLink } from "lucide-react";

export const Route = createFileRoute("/tools")({
  head: () => ({
    meta: [
      { title: "Tools — BrainWaves Group" },
      { name: "description", content: "Open-source scripts, tools and software released by the BrainWaves Group." },
      { property: "og:title", content: "Tools — BrainWaves Group" },
      { property: "og:description", content: "Open-source scripts and tools." },
    ],
  }),
  component: ToolsPage,
});

const tools = [
  { name: "LEiDA Python", desc: "Leading Eigenvector Dynamics Analysis (LEiDA) toolbox for analyzing brain dynamics data, implemented in Python.", lang: "Python", url: "https://zenodo.org/records/14762794" },
  { name: "LEiDA MATLAB", desc: "Leading Eigenvector Dynamics Analysis (LEiDA) toolbox for analyzing brain dynamics data, implemented in MATLAB.", lang: "MATLAB", url: "https://zenodo.org/records/14762824" },
  { name: "LEiDA Voxel", desc: "Leading Eigenvector Dynamics Analysis (LEiDA) applied directly in voxel space rather than predefined parcellations, clustering recurrent BOLD phase-coherence patterns into coupling modes.", lang: "MATLAB", url: "https://github.com/BrainWavesTecnico/LEiDA_Voxel" },
];

function ToolsPage() {
  return (
    <PageShell>
      <PageHeader eyebrow="Open science" title="Tools & Scripts" description="Code we release to support our publications and the broader community." />
      <div className="container-page py-12 grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {tools.map((t, i) => (
          <a key={i} href={t.url} target="_blank" rel="noopener noreferrer" className="glass-card p-6 group hover:border-primary/60 transition">
            <div className="flex items-center justify-between">
              <Code2 className="h-6 w-6 text-primary" />
              <ExternalLink className="h-5 w-5 text-muted-foreground group-hover:text-primary transition" />
            </div>
            <div className="mt-4 font-semibold group-hover:text-primary transition">{t.name}</div>
            <div className="text-xs uppercase tracking-wider text-primary mt-1">{t.lang}</div>
            <p className="mt-2 text-sm text-muted-foreground">{t.desc}</p>
          </a>
        ))}
      </div>
    </PageShell>
  );
}
