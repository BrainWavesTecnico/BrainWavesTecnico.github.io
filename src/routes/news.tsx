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

type News = { date: string; tag: string; title: string; body: string; url?: string };

const items: News[] = [
  {
    date: "December 2025",
    tag: "Media",
    title: "\"O mistério das ondas cerebrais\" — Mentes Brilhantes, Observador",
    body: "Joana Cabral is featured in Observador's \"Mentes Brilhantes\" series, discussing how the brain's mysterious activity patterns are altered in neurological and psychiatric disease, and how her research aims to decode these signals.",
    url: "https://observador.pt/programas/mentes-brilhantes/o-misterio-das-ondas-cerebrais/",
  },
  {
    date: "June 2025",
    tag: "Preprint",
    title: "Updated preprint: \"Cognitive reserve linked to network-specific brain-ventricle coupling modes\"",
    body: "Co-first authors Fulvia Francesca Campo and Vânia Miguel, with Elvira Brattico, Vicente Magalhães, Salvatore Nigro, Benedetta Tafuri, Giancarlo Logroscino and Joana Cabral (and the Alzheimer's Disease Neuroimaging Initiative), have revised their bioRxiv preprint linking distinct brain-ventricle coupling modes to cognitive reserve across the Alzheimer's disease spectrum.",
    url: "https://www.biorxiv.org/content/10.1101/2025.01.04.631289v4",
  },
];

function NewsPage() {
  return (
    <PageShell>
      <PageHeader eyebrow="Updates" title="News" description="Conferences, awards, new papers and group milestones." />
      <div className="container-page py-12">
        <ol className="relative border-l border-border/60 ml-3 space-y-8">
          {items.map((n, i) => {
            const card = (
              <div className="glass-card p-5">
                <div className="flex items-center gap-3 text-xs uppercase tracking-wider">
                  <span className="text-muted-foreground">{n.date}</span>
                  <span className="rounded-full bg-secondary px-2 py-0.5 text-primary">{n.tag}</span>
                </div>
                <h3 className="mt-2 font-semibold">{n.title}</h3>
                <p className="mt-2 text-sm text-muted-foreground">{n.body}</p>
              </div>
            );
            return (
              <li key={i} className="ml-6">
                <span className="absolute -left-2.5 h-5 w-5 rounded-full bg-primary/20 border-2 border-primary flex items-center justify-center">
                  <Calendar className="h-2.5 w-2.5 text-primary" />
                </span>
                {n.url ? (
                  <a href={n.url} target="_blank" rel="noopener noreferrer" className="block hover:opacity-90 transition-opacity">
                    {card}
                  </a>
                ) : (
                  card
                )}
              </li>
            );
          })}
        </ol>
      </div>
    </PageShell>
  );
}
