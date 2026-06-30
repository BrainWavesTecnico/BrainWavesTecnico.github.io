import { createFileRoute } from "@tanstack/react-router";
import { PageShell, PageHeader } from "@/components/page-shell";
import { GraduationCap, User, Plane } from "lucide-react";

export const Route = createFileRoute("/team")({
  head: () => ({
    meta: [
      { title: "Team — BrainWaves Group" },
      { name: "description", content: "PhD students, Master students, research assistants and visiting researchers of the BrainWaves Group." },
      { property: "og:title", content: "Team — BrainWaves Group" },
      { property: "og:description", content: "Meet the BrainWaves Group team." },
    ],
  }),
  component: TeamPage,
});

type Member = { name: string; role: string; bio: string; icon: typeof User };

const current: Member[] = [
  { name: "PhD Student 1", role: "PhD Student", bio: "Brief research focus — replace with bio.", icon: GraduationCap },
  { name: "PhD Student 2", role: "PhD Student", bio: "Brief research focus — replace with bio.", icon: GraduationCap },
  { name: "PhD Student 3", role: "PhD Student", bio: "Brief research focus — replace with bio.", icon: GraduationCap },
  { name: "PhD Student 4", role: "PhD Student", bio: "Brief research focus — replace with bio.", icon: GraduationCap },
  { name: "PhD Student 5", role: "PhD Student", bio: "Brief research focus — replace with bio.", icon: GraduationCap },
  { name: "Master Student", role: "MSc Student", bio: "Thesis topic — replace with bio.", icon: User },
  { name: "Research Assistant", role: "Research Assistant", bio: "Project focus — replace with bio.", icon: User },
];

const visiting: Member[] = [
  { name: "Visiting PhD 1", role: "Visiting PhD Student", bio: "Home institution and project — replace.", icon: Plane },
  { name: "Visiting PhD 2", role: "Visiting PhD Student", bio: "Home institution and project — replace.", icon: Plane },
];

const former: Member[] = [
  { name: "Former Member", role: "Alumnus", bio: "Now at — replace with current role.", icon: User },
];

function MemberCard({ m }: { m: Member }) {
  const Icon = m.icon;
  return (
    <div className="glass-card p-5 flex gap-4">
      <div className="shrink-0 h-12 w-12 rounded-full bg-secondary flex items-center justify-center text-primary">
        <Icon className="h-6 w-6" />
      </div>
      <div>
        <div className="font-semibold">{m.name}</div>
        <div className="text-xs uppercase tracking-wider text-primary mt-0.5">{m.role}</div>
        <p className="mt-2 text-sm text-muted-foreground">{m.bio}</p>
      </div>
    </div>
  );
}

function TeamPage() {
  return (
    <PageShell>
      <PageHeader eyebrow="People" title="The Team" description="PhD students, MSc students, research assistants and visiting researchers driving the BrainWaves Group." />
      <div className="container-page py-12 space-y-14">
        <section>
          <h2 className="text-xl font-semibold mb-5">Current members</h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {current.map((m) => <MemberCard key={m.name} m={m} />)}
          </div>
        </section>
        <section>
          <h2 className="text-xl font-semibold mb-5">Visiting researchers</h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {visiting.map((m) => <MemberCard key={m.name} m={m} />)}
          </div>
        </section>
        <section>
          <h2 className="text-xl font-semibold mb-5">Former lab members</h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {former.map((m) => <MemberCard key={m.name} m={m} />)}
          </div>
        </section>
      </div>
    </PageShell>
  );
}
