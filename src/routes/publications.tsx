import { createFileRoute } from "@tanstack/react-router";
import { PageShell, PageHeader } from "@/components/page-shell";
import { ExternalLink } from "lucide-react";

export const Route = createFileRoute("/publications")({
  head: () => ({
    meta: [
      { title: "Publications — BrainWaves Group" },
      { name: "description", content: "Peer-reviewed publications from the BrainWaves Group." },
      { property: "og:title", content: "Publications — BrainWaves Group" },
      { property: "og:description", content: "Peer-reviewed publications from the BrainWaves Group." },
    ],
  }),
  component: PublicationsPage,
});

type Pub = { year: number; authors: string; title: string; venue: string; url: string };

const pubs: Pub[] = [
  { year: 2025, authors: "Author A, Author B, et al.", title: "Replace with publication title.", venue: "Journal Name", url: "https://example.com" },
  { year: 2024, authors: "Author A, Author B, et al.", title: "Replace with publication title.", venue: "Journal Name", url: "https://example.com" },
];

function PublicationsPage() {
  const byYear = pubs.reduce<Record<number, Pub[]>>((acc, p) => {
    (acc[p.year] ||= []).push(p);
    return acc;
  }, {});
  const years = Object.keys(byYear).map(Number).sort((a, b) => b - a);

  return (
    <PageShell>
      <PageHeader eyebrow="Research output" title="Publications" description="Selected peer-reviewed publications. Click any entry to open the paper." />
      <div className="container-page py-12 space-y-12">
        {years.map((y) => (
          <section key={y}>
            <h2 className="text-xl font-semibold mb-4 text-primary">{y}</h2>
            <ul className="space-y-3">
              {byYear[y].map((p, i) => (
                <li key={i} className="glass-card p-5">
                  <a href={p.url} target="_blank" rel="noopener noreferrer" className="group flex items-start justify-between gap-4">
                    <div>
                      <div className="text-sm text-muted-foreground">{p.authors}</div>
                      <div className="mt-1 font-medium group-hover:text-primary transition">{p.title}</div>
                      <div className="mt-1 text-sm italic text-muted-foreground">{p.venue}</div>
                    </div>
                    <ExternalLink className="h-4 w-4 mt-1 text-muted-foreground group-hover:text-primary transition" />
                  </a>
                </li>
              ))}
            </ul>
          </section>
        ))}
      </div>
    </PageShell>
  );
}
