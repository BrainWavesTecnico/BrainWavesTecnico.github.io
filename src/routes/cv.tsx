import { createFileRoute } from "@tanstack/react-router";
import { PageShell, PageHeader } from "@/components/page-shell";
import { Download, FolderKanban } from "lucide-react";
import cvPdf from "@/assets/CV_Joana_Cabral.pdf?url";
import logoCCA from "@/assets/logoCCA.svg";
import arqusLogo from "@/assets/arqus-color.png";
import fctTenureLogo from "@/assets/FctTenureLogo.png";
import idicaLogo from "@/assets/IdicaLogo.png";
import santanderLogo from "@/assets/SantanderLogo.png";
import tecnicoLogo from "@/assets/LogoTecnico.png";

export const Route = createFileRoute("/cv")({
  head: () => ({
    meta: [
      { title: "CV & Projects — BrainWaves Group" },
      { name: "description", content: "Curriculum vitae and active research projects of the BrainWaves Group PI." },
      { property: "og:title", content: "CV & Projects — BrainWaves Group" },
      { property: "og:description", content: "CV and research projects." },
    ],
  }),
  component: CvPage,
});

const education = [
  { degree: "PhD, Computational Neuroscience", institution: "Universitat Pompeu Fabra, Barcelona, Spain", years: "2008–2012" },
  { degree: "BSc/MSc, Biomedical Engineering", institution: "Universidade Nova de Lisboa, Portugal", years: "2002–2007" },
];

const positions = [
  { role: "Assistant Professor (FCT Tenure+)", place: "Dept. of Bioengineering, Instituto Superior Técnico, Universidade de Lisboa", years: "2025–present" },
  { role: "Principal Investigator", place: "LaSEEB, ISR-Lisboa/LARSyS, Lisbon, Portugal", years: "2025–present" },
  { role: "La Caixa Junior Leader Fellow (BRAINSTIM)", place: "Life and Health Sciences Research Institute (ICVS), Universidade do Minho, Braga", years: "2022–2025" },
  { role: "Independent Assistant Researcher", place: "Life and Health Sciences Research Institute (ICVS), Universidade do Minho, Braga", years: "2017–2022" },
  { role: "Postdoctoral Researcher (ERC Consolidator project)", place: "University of Oxford, UK", years: "2014–2017" },
  { role: "Postdoctoral Researcher (ERC Advanced project)", place: "Universitat Pompeu Fabra, Barcelona, Spain", years: "2012–2014" },
  { role: "PhD Researcher, Computational Neuroscience Group", place: "Universitat Pompeu Fabra, Barcelona, Spain", years: "2008–2012" },
];

const visitingPositions = [
  { role: "Visiting Researcher", place: "Champalimaud Foundation, Lisbon, Portugal", years: "2018–present" },
  { role: "Visiting Researcher", place: "Department of Psychiatry, University of Oxford, UK", years: "2017–2024" },
];

const projects = [
  {
    name: "FCT-Tenure",
    funder: "Fundação para a Ciência e a Tecnologia (FCT) · 2025–2030",
    desc: "A new FCT funding instrument to stabilise doctoral researchers in permanent career positions, designed to promote the hiring of PhD-holding researchers exclusively for permanent posts. Includes start-up funds.",
    link: "https://www.fct.pt/1-a-edicao-do-fct-tenure-com-1000-vagas-exclusivamente-para-posicoes-permanentes/",
    linkLabel: "Read more",
    logo: fctTenureLogo,
  },
  {
    name: "Shaping the Future",
    funder: "Instituto Superior Técnico & Banco Santander",
    desc: "A programme for Assistant Professors and Researchers in their probationary period, promoting full integration into Técnico's academic life and conveying the institution's ethical values and good practices. It combines mentoring and monitoring, access to start-up funds including funding for equipment and for a sabbatical period abroad, training activities, and classroom support.",
    link: "https://shapingthefuture.tecnico.ulisboa.pt/en/",
    linkLabel: "Read more",
    logos: [tecnicoLogo, santanderLogo],
  },
  {
    name: "3DS-Relax",
    funder: "IDI&CA, Universidade Politécnica de Lisboa · 2026–2027",
    desc: "Psychophysiological Monitoring of Emotional States via 3D Audio and Vibration with AI-based Assessment. The project uses the SonikB3D multisensory platform, combining immersive 3D audio and vibration to promote and evaluate relaxation. Through EEG, ECG and EDA monitoring, alongside AI, it identifies the user's emotional state in real time, contributing to stress regulation, mental health and well-being. A collaboration between Instituto Superior de Engenharia de Lisboa (ISEL), Universidade Lusófona (HEI-Lab) and IST-LaSEEB/ISR.",
    logo: idicaLogo,
  },
  {
    name: "CSF-MIND",
    funder: "2CA-Braga · 2026–2028",
    desc: "CSF-MIND: Cerebrospinal Fluid Monitoring of Dynamic Mental States. Principal Investigator, studying cerebrospinal fluid dynamics and how they relate to the organisation of brain networks.",
    link: "https://www.instagram.com/p/DYWoqgijUXO/?img_index=3",
    linkLabel: "View on Instagram",
    logo: logoCCA,
  },
  {
    name: "BrainStimPredict",
    funder: "Arqus Research Alliance · 2025–2027",
    desc: "A cross-disciplinary approach to Brain Response Prediction. Lead institution: University of Padua. Partner institutions: University of Granada, University of Minho. Develops an innovative computational pipeline to predict how the brain responds to stimulation, bridging neuroscience, control theory and data science — training six early-career researchers through joint research, mobility, and validation of models using high-resolution neuroimaging data. Supports digital transformation and clinical translation in mental health with open-source tools for precision therapies.",
    link: "https://arqus-alliance.eu/news/arqus-research-initiative-results/",
    linkLabel: "Read more",
    logo: arqusLogo,
  },
];

function CvPage() {
  return (
    <PageShell>
      <PageHeader eyebrow="About the PI" title="CV & Research Projects" description="Academic background, positions and active research projects." />
      <div className="container-page py-12 grid lg:grid-cols-3 gap-8">
        <section className="lg:col-span-2 space-y-6">
          <div className="glass-card p-6">
            <h2 className="font-display text-xl font-semibold">Curriculum Vitae</h2>
            <p className="mt-2 text-sm text-muted-foreground">
              Joana Cabral (MSc Biomedical Engineering, PhD Computational Neuroscience) is Assistant Professor in the Department of Bioengineering at Instituto Superior Técnico (IST), Universidade de Lisboa, where she holds a tenure track position under the FCT Tenure+ Programme. She leads her team at the Evolutionary Systems and Biomedical Engineering Lab (LaSEEB). Her research focuses on understanding the neural mechanisms underlying large-scale brain dynamics, with emphasis on how oscillatory brain dynamics organise functional brain networks across states of health and disease. She developed LEiDA (Leading Eigenvector Dynamics Analysis), a method used by over 50 research groups worldwide, and the Metastable Oscillatory Modes (MOMs) framework. She was awarded the L'Oréal UNESCO Award for Women in Science (Portugal) in 2019, and has authored over 70 peer-reviewed publications.
            </p>
            <a href={cvPdf} download className="mt-4 inline-flex items-center gap-2 rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground">
              <Download className="h-4 w-4" /> Download full CV (PDF)
            </a>
          </div>
          <div className="glass-card p-6">
            <h3 className="font-semibold">Education</h3>
            <ul className="mt-3 space-y-2 text-sm text-muted-foreground">
              {education.map((e) => (
                <li key={e.degree}>
                  <span className="text-foreground">{e.degree}</span> — {e.institution}, {e.years}
                </li>
              ))}
            </ul>
          </div>
          <div className="glass-card p-6">
            <h3 className="font-semibold">Positions</h3>
            <ul className="mt-3 space-y-2 text-sm text-muted-foreground">
              {positions.map((p) => (
                <li key={`${p.role}-${p.years}`}>
                  <span className="text-foreground">{p.years}</span> — {p.role}, {p.place}
                </li>
              ))}
            </ul>
          </div>
          <div className="glass-card p-6">
            <h3 className="font-semibold">Visiting Positions</h3>
            <ul className="mt-3 space-y-2 text-sm text-muted-foreground">
              {visitingPositions.map((p) => (
                <li key={`${p.role}-${p.years}`}>
                  <span className="text-foreground">{p.years}</span> — {p.role}, {p.place}
                </li>
              ))}
            </ul>
          </div>
        </section>

        <aside>
          <h2 className="font-display text-xl font-semibold mb-4">Active projects</h2>
          <div className="space-y-3">
            {projects.map((p) => (
              <div key={p.name} className="glass-card p-5">
                {p.logos ? (
                  <div className="flex items-center gap-2">
                    {p.logos.map((logo, i) => (
                      <div key={i} className="h-9 w-fit rounded-md bg-white px-2 py-1 flex items-center">
                        <img src={logo} alt={`${p.name} funder logo`} className="h-full w-auto object-contain" />
                      </div>
                    ))}
                  </div>
                ) : p.logo ? (
                  <div className="h-9 w-fit rounded-md bg-white px-2 py-1 flex items-center">
                    <img src={p.logo} alt={`${p.name} funder logo`} className="h-full w-auto object-contain" />
                  </div>
                ) : (
                  <FolderKanban className="h-5 w-5 text-primary" />
                )}
                <div className="mt-3 font-semibold">{p.name}</div>
                <div className="text-xs uppercase tracking-wider text-primary mt-1">{p.funder}</div>
                <p className="mt-2 text-sm text-muted-foreground">{p.desc}</p>
                {p.link && (
                  <a href={p.link} target="_blank" rel="noopener noreferrer" className="mt-3 inline-block text-sm font-medium text-primary hover:underline">
                    {p.linkLabel} →
                  </a>
                )}
              </div>
            ))}
          </div>
        </aside>
      </div>
    </PageShell>
  );
}
