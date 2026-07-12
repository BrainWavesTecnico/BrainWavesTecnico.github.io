import { createFileRoute } from "@tanstack/react-router";
import { PageShell, PageHeader } from "@/components/page-shell";
import { Calendar } from "lucide-react";
import posterLeonor from "@/assets/PosterLeonor.jpeg";
import posterOhbm from "@/assets/PosterOHBM.jpeg";

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

type News = { date: string; tag: string; title: string; body: string; url?: string; images?: string[] };

const items: News[] = [
  {
    date: "June 2026",
    tag: "Conference",
    title: "OHBM Annual Meeting — Bordeaux, France",
    body: "Joana, Haeun, Giulia and Leonor attended the Annual Meeting of the Organization for Human Brain Mapping (OHBM) in Bordeaux, France.",
    images: [posterLeonor, posterOhbm],
  },
  {
    date: "June 2026",
    tag: "Workshop",
    title: "Gradients in Brain Organization",
    body: "Joana gave a talk and participated in a round table about structure-function relationships in the brain, at Château du Feÿ, France.",
  },
  {
    date: "June 2026",
    tag: "Preprint",
    title: "Cognitive function linked to temporal occupancy of Brain-Ventricle (BraVe) modes",
    body: "We've revised our bioRxiv preprint! It's the fruit of a collaboration with a visiting PhD student from the University of Bari, linking how much time the brain spends in distinct Brain-Ventricle (BraVe) coupling modes to cognitive function across the Alzheimer's disease spectrum.",
    url: "https://www.biorxiv.org/content/10.1101/2025.01.04.631289v4",
  },
  {
    date: "May 2026",
    tag: "Grant",
    title: "New research grant: CSF-MIND",
    body: "We received a research grant from Braga's Clinical Academic Center to kick off the project CSF-MIND, where we explore the link between cerebrospinal fluid dynamics and resting-state fluctuations in fMRI signals relating with mental function!",
  },
  {
    date: "April 2026",
    tag: "Milestone",
    title: "Marta Xavier submitted her PhD thesis!",
    body: "Our PhD student Marta Xavier submitted her PhD thesis!",
  },
  {
    date: "December 2025",
    tag: "Media",
    title: "\"O mistério das ondas cerebrais\" — Mentes Brilhantes, Observador",
    body: "Joana Cabral is featured in Observador's \"Mentes Brilhantes\" series, discussing how the brain's mysterious activity patterns are altered in neurological and psychiatric disease, and how her research aims to decode these signals.",
    url: "https://observador.pt/programas/mentes-brilhantes/o-misterio-das-ondas-cerebrais/",
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
                {n.images && (
                  <div className="mt-3 flex flex-wrap gap-3">
                    {n.images.map((src, j) => (
                      <img key={j} src={src} alt={`${n.title} photo ${j + 1}`} className="h-32 w-auto rounded-lg object-cover" />
                    ))}
                  </div>
                )}
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
