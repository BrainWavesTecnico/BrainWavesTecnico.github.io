import { createFileRoute } from "@tanstack/react-router";
import { PageShell, PageHeader } from "@/components/page-shell";
import { Calendar } from "lucide-react";
import posterLeonor from "@/assets/PosterLeonor.jpeg";
import posterOhbm from "@/assets/PosterOHBM.jpeg";
import brainWaterImg from "@/assets/BrainWaterMentalHealth.jpg";
import braveModesImg from "@/assets/BraVeModes.png";

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

type News = { date: string; tag: string; title: string; body: string; url?: string; images?: string[]; imagesFit?: "cover" | "contain"; youtubeId?: string };

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
    url: "https://doi.org/10.1101/2025.01.04.631289",
    images: [braveModesImg],
    imagesFit: "contain",
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
    date: "February 2026",
    tag: "Outreach",
    title: "\"The Brain's Water and Mental Health\" — Alto Minho Science Fest",
    body: "Our image \"The Brain's Water and Mental Health\" featured in the science exhibition \"Brain, Health and Well-Being,\" organised by ICVS/School of Medicine of the University of Minho as part of the Alto Minho Science Fest. This mid-sagittal image was acquired on the 3 Tesla MRI scanner at Hospital de Braga by Celina Gomes (Radiologist at Braga Academic Clinical Centre, 2CA) and processed by Joana Cabral. Aimed at the general public, it highlights in blue the spaces filled by cerebrospinal fluid, illustrating the growing recognition of this fluid's dynamics in brain health — from clearing metabolic waste during sleep to its links with neurological and psychiatric disorders.",
    images: [brainWaterImg],
  },
  {
    date: "December 2025",
    tag: "Media",
    title: "\"O mistério das ondas cerebrais\" — Mentes Brilhantes, Observador",
    body: "Joana Cabral is featured in Observador's \"Mentes Brilhantes\" series, discussing how the brain's mysterious activity patterns are altered in neurological and psychiatric disease, and how her research aims to decode these signals.",
    url: "https://observador.pt/programas/mentes-brilhantes/o-misterio-das-ondas-cerebrais/",
    youtubeId: "Ca2GfXBXWjU",
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
                    {n.images.map((src, j) =>
                      n.imagesFit === "contain" ? (
                        <img key={j} src={src} alt={`${n.title} figure ${j + 1}`} className="max-h-80 w-auto max-w-full rounded-lg bg-white object-contain p-2" />
                      ) : (
                        <img key={j} src={src} alt={`${n.title} photo ${j + 1}`} className="h-32 w-auto rounded-lg object-cover" />
                      )
                    )}
                  </div>
                )}
                {n.youtubeId && (
                  <div className="mt-3 aspect-video max-w-lg overflow-hidden rounded-lg">
                    <iframe
                      className="h-full w-full"
                      src={`https://www.youtube.com/embed/${n.youtubeId}`}
                      title={n.title}
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                      allowFullScreen
                    />
                  </div>
                )}
                {n.url && n.youtubeId && (
                  <a href={n.url} target="_blank" rel="noopener noreferrer" className="mt-3 inline-block text-sm font-medium text-primary hover:underline">
                    Read on Observador →
                  </a>
                )}
              </div>
            );
            return (
              <li key={i} className="ml-6">
                <span className="absolute -left-2.5 h-5 w-5 rounded-full bg-primary/20 border-2 border-primary flex items-center justify-center">
                  <Calendar className="h-2.5 w-2.5 text-primary" />
                </span>
                {n.url && !n.youtubeId ? (
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
