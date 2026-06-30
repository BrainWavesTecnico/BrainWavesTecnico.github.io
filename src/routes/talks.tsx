import { createFileRoute } from "@tanstack/react-router";
import { PageShell, PageHeader } from "@/components/page-shell";
import { Mic } from "lucide-react";

export const Route = createFileRoute("/talks")({
  head: () => ({
    meta: [
      { title: "Talks — BrainWaves Group" },
      { name: "description", content: "Invited talks, keynotes and conference presentations by the BrainWaves Group." },
      { property: "og:title", content: "Talks — BrainWaves Group" },
      { property: "og:description", content: "Invited talks and conference presentations." },
    ],
  }),
  component: TalksPage,
});

const talks = [
  { date: "2026", venue: "Conference / Institution", title: "Talk title — replace", type: "Invited talk" },
  { date: "2025", venue: "Conference / Institution", title: "Talk title — replace", type: "Keynote" },
];

function TalksPage() {
  return (
    <PageShell>
      <PageHeader eyebrow="Outreach" title="Talks" description="Invited talks, keynotes and conference presentations." />
      <div className="container-page py-12">
        <ul className="space-y-3">
          {talks.map((t, i) => (
            <li key={i} className="glass-card p-5 flex items-start gap-4">
              <div className="shrink-0 h-10 w-10 rounded-full bg-secondary flex items-center justify-center text-primary">
                <Mic className="h-5 w-5" />
              </div>
              <div className="flex-1">
                <div className="flex flex-wrap items-center gap-2 text-xs uppercase tracking-wider">
                  <span className="text-muted-foreground">{t.date}</span>
                  <span className="rounded-full bg-secondary px-2 py-0.5 text-primary">{t.type}</span>
                </div>
                <div className="mt-1 font-semibold">{t.title}</div>
                <div className="text-sm text-muted-foreground mt-0.5">{t.venue}</div>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </PageShell>
  );
}
