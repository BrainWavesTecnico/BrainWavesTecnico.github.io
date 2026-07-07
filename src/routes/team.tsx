import { createFileRoute } from "@tanstack/react-router";
import { PageShell, PageHeader } from "@/components/page-shell";
import { GraduationCap, User, Plane } from "lucide-react";
import leonorPhoto from "@/assets/LeonorAbreu.jpg";
import martaPhoto from "@/assets/MartaXavier.jpg";
import afonsoPhoto from "@/assets/AfonsoFernandes.jpeg";
import vaniaPhoto from "@/assets/foto_ohbm.jpeg";
import haeunPhoto from "@/assets/hauen.jpeg";

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

type Member = { name: string; role: string; bio: string; icon?: typeof User; photo?: string };

const current: Member[] = [
  {
    name: "Marta Xavier",
    role: "PhD Student",
    photo: martaPhoto,
    bio: "From Lisbon, with a background in Biological and Biomedical Engineering (IST-ULisboa). Marta is a final-year PhD student working on neuroimaging and computational neuroscience, between Lisbon and Barcelona. Outside the lab, she is usually writing, playing music, or exploring something creative.",
  },
  {
    name: "Afonso Fernandes",
    role: "PhD Student",
    photo: afonsoPhoto,
    bio: "Psychiatry resident from Braga, Portugal. Afonso studied Medicine at the University of Minho, where he is now pursuing a PhD. With an unusual appetite for complicated things — from the mind and neuroscience to abstract expressionism and Beckett's plays — he aims to understand the human mind a little better, one scan at a time.",
  },
  {
    name: "Vânia Miguel",
    role: "PhD Student",
    photo: vaniaPhoto,
    bio: "First-year Bioengineering PhD student, with a background in Medicinal Biotechnology (BSc) and Bioinformatics (MSc). At Tecnico, her project DYNAMIND combines ultra-fast fMRI, LEiDA, and machine learning to find early biomarkers of cognitive decline — in partnership with SensiPerception, Lda. Outside the lab, she is usually playing with her dog or fixing something.",
  },
  {
    name: "Haeun Sun",
    role: "PhD Student",
    photo: haeunPhoto,
    bio: "A PhD student from South Korea with BSc and MSc in physics. To contribute to overcoming psychiatric disease with physical solutions, entered the field of neuroscience and biomedical engineering. Working on a project to incorporate the CSF dynamics into the brain model for optimization of neurostimulation.",
  },
  { name: "PhD Student 5", role: "PhD Student", bio: "Brief research focus — replace with bio.", icon: GraduationCap },
  { name: "Master Student", role: "MSc Student", bio: "Thesis topic — replace with bio.", icon: User },
  {
    name: "Leonor Abreu",
    role: "Research Assistant",
    photo: leonorPhoto,
    bio: "Born in Porto, Leonor has 18+ years of experience in content editing, personal and team development, social impact and investigation. She holds a Master's in Psychology from ISPA (2008) and an MSc in Psychology and Neuroscience of Mental Health from King's College London (2025), where she received the Dean's Award for Outstanding Student Performance in Neuroimaging and Mental Health. Passionate about brain connectivity, she is committed to translating insights on brain health into practical strategies for prevention, treatment and social inclusion, and to fostering communication between researchers, society and policymakers. Outside the lab, she volunteers with ENCONTRAR+SE and loves running, dancing and time with her three boys.",
  },
];

const visiting: Member[] = [
  { name: "Visiting PhD 1", role: "Visiting PhD Student", bio: "Home institution and project — replace.", icon: Plane },
  { name: "Visiting PhD 2", role: "Visiting PhD Student", bio: "Home institution and project — replace.", icon: Plane },
];

const former: Member[] = [
  { name: "Former Member", role: "Alumnus", bio: "Now at — replace with current role.", icon: User },
];

function MemberCard({ m }: { m: Member }) {
  const Icon = m.icon ?? User;
  return (
    <div className="glass-card p-5 flex gap-4">
      <div className="shrink-0 h-12 w-12 rounded-full bg-secondary flex items-center justify-center text-primary overflow-hidden">
        {m.photo ? (
          <img src={m.photo} alt={`Photo of ${m.name}`} className="h-full w-full object-cover" />
        ) : (
          <Icon className="h-6 w-6" />
        )}
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
