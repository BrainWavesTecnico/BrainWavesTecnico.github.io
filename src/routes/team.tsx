import { createFileRoute } from "@tanstack/react-router";
import { PageShell } from "@/components/page-shell";
import { User } from "lucide-react";
import type { ReactNode } from "react";
import leonorPhoto from "@/assets/LeonorAbreu.jpg";
import martaPhoto from "@/assets/MartaXavier.jpg";
import afonsoPhoto from "@/assets/AfonsoFernandes.jpeg";
import vaniaPhoto from "@/assets/foto_ohbm.jpeg";
import haeunPhoto from "@/assets/hauen.jpeg";
import joanaPhoto from "@/assets/Joana2025.jpeg";
import inesPhoto from "@/assets/InesBh.jpeg";
import beatrizPhoto from "@/assets/Beatriz_Santos_Phd.jpeg";
import martaBaptistaPhoto from "@/assets/foto_MartaBaptista.jpg";
import sterrePhoto from "@/assets/SterreMeijer.jpeg";
import nicolaPhoto from "@/assets/PortraitNicolaCinardi.jpeg";
import groupBanner from "@/assets/BrainWavesLabOct26_banner.jpg";

export const Route = createFileRoute("/team")({
  head: () => ({
    meta: [
      { title: "Team — BrainWaves Group" },
      { name: "description", content: "Principal investigator, postdoctoral researchers, PhD students and Master students of the BrainWaves Group." },
      { property: "og:title", content: "Team — BrainWaves Group" },
      { property: "og:description", content: "Meet the BrainWaves Group team." },
    ],
  }),
  component: TeamPage,
});

type Member = { name: string; role: ReactNode; bio: string; icon?: typeof User; photo?: string; photoPosition?: string };

const pi: Member[] = [
  {
    name: "Joana Cabral",
    role: (
      <>
        Principal Investigator and Assistant Professor at the{" "}
        <a href="https://dbe.tecnico.ulisboa.pt/" target="_blank" rel="noopener noreferrer" className="hover:underline">
          Bioengineering Department
        </a>
      </>
    ),
    photo: joanaPhoto,
    bio: "Joana leads research that has reshaped how we understand brain function — revealing the synchronization mechanisms behind functional connectivity, showing that oscillations emerge as collective properties of brain dynamics, and uncovering why non-stationary activity matters for cognition. Her work bridges spontaneous brain activity, mental health and cognitive function, turning fundamental discoveries about brain dynamics into clinical insight. Mother of three, she brings the same restless curiosity to her research and her life — endlessly fascinated by the mechanisms of life, mind and consciousness.",
  },
];

const postdocs: Member[] = [
  {
    name: "Nicola Cinardi",
    role: "Postdoctoral Researcher",
    photo: nicolaPhoto,
    bio: "Nicola is a theoretical physicist with a PhD in Complex Systems. His research combines dynamical systems theory, complex networks, higher-order interactions, information theory and statistical physics to understand how collective phenomena emerge from the interactions between individual components — from neuroscience to biological systems and collective social behaviour. In neuroscience, he explores the interplay between brain structure, function and dynamics, with particular interest in collective neural activity, brain eigenmodes and the physical mechanisms underlying brain organisation. His broader interests include mathematical and computational frameworks for complex adaptive systems, with potential implications for artificial intelligence and artificial neural networks.",
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
    photo: inesPhoto,
    bio: "Inês is a PhD student in Bioengineering at IST. She previously completed her BSc and MSc in Biomedical Engineering, with a specialisation in Neuroscience, at the University of Coimbra. Her current research focuses on rethinking fMRI preprocessing to preserve cerebrospinal fluid signals and explore their role in cognitive decline. Away from the computer, she's at the beach with family, camera ready, music playing, before retreating home to her cats.",
  },
  {
    name: "Beatriz Santos",
    role: "PhD Student",
    photo: beatrizPhoto,
    bio: "With a background in Biomedical Engineering and Biophysics (BSc, MSc), Beatriz is a PhD student at IST and Champalimaud Foundation. Her research focus is on optimization of current brain stimulation targeting strategies in the treatment of neuropsychiatric disorders, combining neuroimaging, biophysical modelling and expertise as a TMS technician. Outside the lab she can be found reading, exploring or spending time with friends and family.",
  },
  {
    name: "Leonor Abreu",
    role: "PhD Student",
    photo: leonorPhoto,
    photoPosition: "object-top",
    bio: "Background in social impact and team development and training. A strong desire to understand humanity led from impact evaluation in the social economy to the Psychology and Neuroscience of Mental Health MSc (King's College London). Leonor is now a PhD student on WOMBRAIN – Women's Brain Dynamics and Menstrual-Cycle Mood Vulnerability: From Neurobiology to Clinical Protocol Development, in partnership with Hospital CUF Descobertas, exploring how large-scale brain dynamics, using fMRI and dynamical systems approaches, shift across mental health, emotions and women's health. Mother of three, enjoys running and dancing.",
  },
];

const masterStudents: Member[] = [
  {
    name: "Catarina Banha",
    role: "Master Student",
    bio: "Master's thesis: \"Brain Dynamics in Postoperative Delirium\", developed in collaboration with Dr. Albino Oliveira-Maia and Dr. Gonçalo Cotovio at the Champalimaud Foundation.",
  },
  {
    name: "Marta Baptista",
    role: "Master Student",
    photo: martaBaptistaPhoto,
    photoPosition: "object-top",
    bio: "Master's thesis: \"Brain State Dynamics in Cocaine Dependence before and after Transcranial Magnetic Stimulation\", developed in collaboration with Dr. Diego Angeles Valdez at the Center for Neuropsychiatry, University Medical Center Groningen, Netherlands.",
  },
  {
    name: "Maria Eduarda Silva",
    role: "Master Student",
    bio: "Master's thesis: \"Towards Standardization of Magnetic Resonance Elastography (MRE) Data and Processing\", developed in collaboration with Prof. Rodrigo Moreno at the KTH Royal Institute of Technology, Sweden.",
  },
  {
    name: "Afonso Couteiro Martins",
    role: "Master Student",
    bio: "Master's thesis: \"Brain State Dynamics during Propofol Anesthesia: Linking Network Phase-Locking to GABA-A Receptor Mechanisms Through a Dynamical Systems Framework\".",
  },
  {
    name: "Sterre Meijer",
    role: "Master Student",
    photo: sterrePhoto,
    bio: "Master's internship: \"Longitudinal Brain State Dynamics in Alzheimer's Disease: Linking Functional Connectivity, Structural Atrophy and Cognitive Decline\", using longitudinal ADNI resting-state fMRI and LEiDA as part of her MSc at Eindhoven University of Technology (TU/e).",
  },
  {
    name: "Francisco Ameixial",
    role: "Master Student",
    bio: "Master's thesis: \"Conscious Detection of Prediction Errors Across Rhythmic Contexts\", developed in collaboration with Prof. Mattia Rosso at the Centre for Music in the Brain, Aarhus University, Denmark.",
  },
];

const former: Member[] = [
  { name: "Borjan Milinkovic", role: "Visiting Postdoc", bio: "Paris Brain Institute." },
  { name: "Angeliki Plevri", role: "Research Assistant", bio: "Maastricht University." },
  { name: "Giulia Pagnin", role: "Visiting PhD Student", bio: "University of Padova." },
  { name: "Andrea Veronese", role: "Visiting PhD Student", bio: "Camerino/Padua." },
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
      <div className="container-page pt-12">
        <img
          src={groupBanner}
          alt="The BrainWaves Group team"
          className="w-full rounded-2xl object-cover max-h-80"
        />
      </div>
      <div className="container-page py-12 space-y-14">
        <section>
          <h2 className="text-xl font-semibold mb-5">Principal Investigator</h2>
          {pi.map((m) => <MemberCard key={m.name} m={m} />)}
        </section>
        <section>
          <h2 className="text-xl font-semibold mb-5">Postdoctoral researchers</h2>
          {postdocs.map((m) => <MemberCard key={m.name} m={m} />)}
        </section>
        <section>
          <h2 className="text-xl font-semibold mb-5">PhD students</h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {phdStudents.map((m) => <MemberCard key={m.name} m={m} />)}
          </div>
        </section>
        <section>
          <h2 className="text-xl font-semibold mb-5">Master students</h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {masterStudents.map((m) => <MemberCard key={m.name} m={m} />)}
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
