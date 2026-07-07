import { createFileRoute } from "@tanstack/react-router";
import { PageShell } from "@/components/page-shell";
import { GraduationCap, User } from "lucide-react";
import leonorPhoto from "@/assets/LeonorAbreu.jpg";
import martaPhoto from "@/assets/MartaXavier.jpg";
import afonsoPhoto from "@/assets/AfonsoFernandes.jpeg";
import vaniaPhoto from "@/assets/foto_ohbm.jpeg";
import haeunPhoto from "@/assets/hauen.jpeg";
import giuliaPhoto from "@/assets/DSC038981-scaled.jpg";
import andreaPhoto from "@/assets/AndreaVeronese.jpg";
import joanaPhoto from "@/assets/Joana2025.jpeg";

export const Route = createFileRoute("/team")({
  head: () => ({
    meta: [
      { title: "Team — BrainWaves Group" },
      { name: "description", content: "Principal investigator, PhD students, research assistants and visiting researchers of the BrainWaves Group." },
      { property: "og:title", content: "Team — BrainWaves Group" },
      { property: "og:description", content: "Meet the BrainWaves Group team." },
    ],
  }),
  component: TeamPage,
});

type Member = { name: string; role: string; bio: string; icon?: typeof User; photo?: string; photoPosition?: string };

const pi: Member[] = [
  {
    name: "Joana Cabral",
    role: "Principal Investigator",
    photo: joanaPhoto,
    bio: "Joana's research has provided insight into brain function, uncovering synchronization mechanisms underlying functional connectivity, oscillations as collective emergent properties, and the functional relevance of non stationary brain dynamics. Her work also explores the links between spontaneous brain activity, mental health and cognitive function. Mother of three, she is endlessly curious, intrigued and fascinated by the mechanisms of life, mind and consciousness, both in her research and in life.",
  },
];

const phdStudents: Member[] = [
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
  {
    name: "Inês Bem-Haja",
    role: "PhD Student",
    icon: GraduationCap,
    bio: "Biomedical Engineer from Coimbra. Ines's PhD project involves finding signatures of brain health in components of fMRI signal associated with physiological noise.",
  },
];

const researchAssistants: Member[] = [
  {
    name: "Leonor Abreu",
    role: "Research Assistant",
    photo: leonorPhoto,
    photoPosition: "object-top",
    bio: "Background in social impact and team development and training. A strong desire to understand humanity led from impact evaluation in the social economy to the Psychology and Neuroscience of Mental Health MSc (King's College London), now exploring how large-scale brain dynamics, using fMRI and dynamical systems approaches, shift across mental health, emotions and women's health. Mother of three, enjoys running and dancing.",
  },
];

const visiting: Member[] = [
  {
    name: "Giulia Pagnin",
    role: "Visiting PhD Student",
    photo: giuliaPhoto,
    bio: "PhD candidate in Neuroscience at the University of Padova, with a background in Biomedical Engineering (BSc) and Bioengineering for Neuroscience (MSc). Her research focuses on dynamic functional connectivity and brain state analysis using computational neuroimaging approaches to investigate alterations in large-scale brain networks in neurodegenerative disorders. Outside research, she enjoys listening to music, surfing and spending time with her cat.",
  },
  {
    name: "Andrea Veronese",
    role: "Visiting PhD Student",
    photo: andreaPhoto,
    bio: "Andrea Veronese is a theoretical neuroscience PhD student (Camerino/Padua), passionate about complex systems. In his research, he combines computational whole-brain modeling with EEG data to study the brain's response to perturbations. Currently in Lisbon, he is extending this approach to investigate brain waves in rs-fMRI data.",
  },
];

const former: Member[] = [
  { name: "Borjan Milinkovic", role: "Visiting Postdoc", bio: "Paris Brain Institute." },
  { name: "Angeliki Plevri", role: "Research Assistant", bio: "Maastricht University." },
];

function MemberCard({ m, showAvatar = true }: { m: Member; showAvatar?: boolean }) {
  const Icon = m.icon ?? User;
  return (
    <div className="glass-card p-5 flex gap-4">
      {showAvatar && (
        <div className="shrink-0 h-24 w-24 rounded-full bg-secondary flex items-center justify-center text-primary overflow-hidden">
          {m.photo ? (
            <img src={m.photo} alt={`Photo of ${m.name}`} className={`h-full w-full object-cover ${m.photoPosition ?? ""}`} />
          ) : (
            <Icon className="h-12 w-12" />
          )}
        </div>
      )}
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
      <div className="container-page py-12 space-y-14">
        <section>
          <h2 className="text-xl font-semibold mb-5">Principal Investigator</h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {pi.map((m) => <MemberCard key={m.name} m={m} />)}
          </div>
        </section>
        <section>
          <h2 className="text-xl font-semibold mb-5">PhD students</h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {phdStudents.map((m) => <MemberCard key={m.name} m={m} />)}
          </div>
        </section>
        <section>
          <h2 className="text-xl font-semibold mb-5">Research assistant</h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {researchAssistants.map((m) => <MemberCard key={m.name} m={m} />)}
          </div>
        </section>
        <section>
          <h2 className="text-xl font-semibold mb-5">Visiting researchers</h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {visiting.map((m) => <MemberCard key={m.name} m={m} />)}
          </div>
        </section>
        <section>
          <h2 className="text-xl font-semibold mb-5">Former group members</h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {former.map((m) => <MemberCard key={m.name} m={m} showAvatar={false} />)}
          </div>
        </section>
      </div>
    </PageShell>
  );
}
