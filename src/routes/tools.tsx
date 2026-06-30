import { createFileRoute } from "@tanstack/react-router";
import { PageShell, PageHeader } from "@/components/page-shell";
import { Code2, Github } from "lucide-react";

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
  { name: "Tool name", desc: "Short description of what the tool does and which paper it accompanies.", lang: "Python", url: "https://github.com" },
  { name: "Tool name", desc: "Short description.", lang: "MATLAB", url: "https://github.com" },
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
              <Github className="h-5 w-5 text-muted-foreground group-hover:text-primary transition" />
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
