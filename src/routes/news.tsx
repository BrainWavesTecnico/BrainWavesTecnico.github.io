import { createFileRoute } from "@tanstack/react-router";
import { PageShell, PageHeader } from "@/components/page-shell";
import { Calendar } from "lucide-react";

export const Route = createFileRoute("/news")({
  head: () => ({
    meta: [
      { title: "News — BrainWaves Group" },
      { name: "description", content: "Latest news, conferences and announcements from the BrainWaves Group." },
      { property: "og:title", content: "News — BrainWaves Group" },
      { property: "og:description", content: "Latest news from the BrainWaves Group." },
    ],
  }),
  component: NewsPage,
});

type News = { date: string; tag: string; title: string; body: string };

const items: News[] = [
  { date: "Jun 2026", tag: "Conference", title: "Replace with news title", body: "Short description of the news item — attended conference, talk, paper accepted, new member, etc." },
  { date: "May 2026", tag: "Award", title: "Replace with news title", body: "Short description of the news item." },
];

function NewsPage() {
  return (
    <PageShell>
      <PageHeader eyebrow="Updates" title="News" description="Conferences, awards, new papers and group milestones." />
      <div className="container-page py-12">
        <ol className="relative border-l border-border/60 ml-3 space-y-8">
          {items.map((n, i) => (
            <li key={i} className="ml-6">
              <span className="absolute -left-2.5 h-5 w-5 rounded-full bg-primary/20 border-2 border-primary flex items-center justify-center">
                <Calendar className="h-2.5 w-2.5 text-primary" />
              </span>
              <div className="glass-card p-5">
                <div className="flex items-center gap-3 text-xs uppercase tracking-wider">
                  <span className="text-muted-foreground">{n.date}</span>
                  <span className="rounded-full bg-secondary px-2 py-0.5 text-primary">{n.tag}</span>
                </div>
                <h3 className="mt-2 font-semibold">{n.title}</h3>
                <p className="mt-2 text-sm text-muted-foreground">{n.body}</p>
              </div>
            </li>
          ))}
        </ol>
      </div>
    </PageShell>
  );
}
