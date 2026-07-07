import { createFileRoute } from "@tanstack/react-router";
import { PageShell, PageHeader } from "@/components/page-shell";
import { Mic } from "lucide-react";

export const Route = createFileRoute("/talks")({
  head: () => ({
    meta: [
      { title: "Talks — BrainWaves Group" },
      { name: "description", content: "Invited talks, keynotes and conference presentations by the BrainWaves Group." },
      { property: "og:title", content: "Talks — BrainWaves Group" },
      { property: "og:description", content: "Invited talks and conference presentations." },
    ],
  }),
  component: TalksPage,
});

type Talk = { year: number; date: string; title: string; venue: string; type: string; url?: string };

const talks: Talk[] = [
  // 2026
  { year: 2026, date: "12 June 2026", title: "Functional modes of cognition resonate beyond neurons alone", venue: "Colloquium 'Mechanisms of Whole-Brain Communication', Paris Brain Institute (PBI) · Paris, France", type: "Invited talk" },
  { year: 2026, date: "11 June 2026", title: "Resonant waves shaping functional Gradients", venue: "Gradients in Brain Organization Workshop · Château du Feÿ, France", type: "Invited talk" },
  { year: 2026, date: "12 May 2026", title: "Pressure Waves and Phase Locks captured with single-slice fMRI", venue: "International Society for Magnetic Resonance in Medicine (ISMRM) Annual Meeting · Cape Town, South Africa", type: "Symposium" },
  { year: 2026, date: "24 March 2026", title: "Ondas en el cerebro: de redes neuronales a dinámicas de continuo", venue: "Encuentros de biología teórica, Museo Nacional de Ciencias Naturales · Madrid, Spain", type: "Invited talk" },
  { year: 2026, date: "19 March 2026", title: "Beyond Networks: Functional Connectivity as Eigenmode Resonance", venue: "Making Connections Seminar Series — Brains and other Complex Systems · Online", type: "Invited talk" },
  { year: 2026, date: "13 February 2026", title: "From Brain Dynamics to Mathematical Frameworks", venue: "Centre for Mathematical Analysis, Geometry, and Dynamical Systems · Lisbon, Portugal", type: "Invited talk" },
  { year: 2026, date: "14 January 2026", title: "Resonance in the Brain Continuum", venue: "Workshop on the Physics of Excitable Media (POEM III) · Bad Honnef, Germany", type: "Invited talk" },
  // 2025
  { year: 2025, date: "20 December 2025", title: "Harmonic motion in Brain Dynamics", venue: "Harmony Workshop · Osa Major, Mallorca, Spain", type: "Invited talk" },
  { year: 2025, date: "26 October 2025", title: "Insights into Brain Function from Spiralling Eigenmodes", venue: "International School on Magnetic Resonance and Brain Function (ISMRBF), Ettore Majorana Foundation · Erice, Italy", type: "Invited talk", url: "https://ismrbf.marbilab.eu/workshops/program-2025" },
  { year: 2025, date: "18 October 2025", title: "Computational Models of Brain Network Dynamics", venue: "17th Workshop in Biomedical Engineering, Faculty of Sciences, University of Lisbon · Lisbon, Portugal", type: "Invited talk" },
  { year: 2025, date: "8 October 2025", title: "Wave mechanics in Brain Modes", venue: "Brain Modes · Toronto, Canada", type: "Invited talk", url: "http://www.fields.utoronto.ca/activities/25-26/BrainModes" },
  { year: 2025, date: "21 August 2025", title: "Functional modes in Brain dynamics", venue: "Seminar to Biomedical Engineering students, Universidad de Valparaiso · Valparaiso, Chile", type: "Invited talk" },
  { year: 2025, date: "28 June 2025", title: "The Network Illusion in Functional Neuroimaging", venue: "Annual Meeting of the Organization for Human Brain Mapping (OHBM) · Brisbane, Australia", type: "Keynote" },
  { year: 2025, date: "21 June 2025", title: "The dark energy shaping brain connectivity", venue: "Brain Connectivity Workshop (BCW) · Stradbroke Island, Australia", type: "Invited talk" },
  { year: 2025, date: "15 May 2025", title: "LEiDA workshop", venue: "Groningen Hospital · Groningen, The Netherlands", type: "Workshop" },
  { year: 2025, date: "3–4 April 2025", title: "Spatiotemporal dynamics in Neural Networks: New Data and Mathematical Approaches", venue: "Inaugural Fields Lab for Network Science Symposium, Fields Institute · Toronto, Canada", type: "Invited talk" },
  // 2024
  { year: 2024, date: "16 December 2024", title: "Intrinsic macroscale oscillatory modes driving long range functional connectivity", venue: "Coimbra Institute for Biomedical Imaging and Translational Research (CIBIT) · Coimbra, Portugal", type: "Invited talk" },
  { year: 2024, date: "25 November 2024", title: "Superposition of resonating standing waves in spontaneous brain activity", venue: "Statistical Physics of Cognition Workshop, Institute of Physics · King's Cross, London, UK", type: "Invited talk" },
  { year: 2024, date: "24 September 2024", title: "Modes of brain function", venue: "McGill University · Montreal, Canada", type: "Invited talk" },
  { year: 2024, date: "23 August 2024", title: "Where do Brain Waves come from?", venue: "Public Lecture, Celebrando 100 años de ondas cerebrales · Valparaiso, Chile", type: "Public lecture" },
  { year: 2024, date: "27 July 2024", title: "Dynamics of the Whole Brain", venue: "Symposium, Neuro 2024 · Fukuoka, Japan", type: "Invited talk" },
  { year: 2024, date: "23 July 2024", title: "Metastable synchrony generates collective brain oscillations at reduced frequencies", venue: "Institute for Physiological Sciences · Okazaki, Japan", type: "Invited talk" },
  { year: 2024, date: "July 2024", title: "Networks or Waves at the basis of cognition?", venue: "Educational Course on Whole Brain Models, OHBM · Seoul, South Korea", type: "Course" },
  { year: 2024, date: "21 June 2024", title: "Self-organizing principles of dynamic functional connectivity", venue: "Brain Connectivity Workshop · Shanghai, China", type: "Invited talk" },
  { year: 2024, date: "5 June 2024", title: "Functional coupling modes in health and disease", venue: "University of Bari · Bari, Italy", type: "Invited talk" },
  { year: 2024, date: "3 June 2024", title: "Alterations in functional coupling modes over the progression of Alzheimer's disease", venue: "Center for Neurodegenerative Diseases · Tricase, Italy", type: "Invited talk" },
  { year: 2024, date: "23 March 2024", title: "Whole brain network models and correlates of consciousness", venue: "Mediterranean Association for Consciousness Science MESEC Winter School · Catalunya, Spain", type: "Invited talk" },
  { year: 2024, date: "4 March 2024", title: "Intrinsic Modes of Brain Function: Evidence and Generative Mechanisms", venue: "Symposium, University of Melbourne · Melbourne, Australia", type: "Invited talk" },
  { year: 2024, date: "4 March 2024", title: "Modes of Brain Function: Evidence and Generative Mechanisms", venue: "Symposium, Monash University · Melbourne, Australia", type: "Invited talk" },
  { year: 2024, date: "28 February 2024", title: "Resonant waves captured with ultrafast fMRI", venue: "Noosa Workshop on Brain Function · Noosa, Australia", type: "Invited talk" },
  // 2023
  { year: 2023, date: "November 2023", title: "Inferring Neural Networks from Electrophysiological and Functional Imaging", venue: "Workshop, Centre de Recherches Mathématiques (CRM), Université de Montreal · Montreal, Canada", type: "Invited talk" },
  { year: 2023, date: "November 2023", title: "Annual Meeting of the Portuguese Society of Neurosurgery", venue: "Braga, Portugal", type: "Invited talk" },
  { year: 2023, date: "November 2023", title: "Taller Multidisciplinario de Neurociencias y Redes Neuronales", venue: "El Colegio Nacional · Mexico City, Mexico", type: "Invited talk" },
  { year: 2023, date: "September 2023", title: "Complexity and the Brain: What next", venue: "Symposium, King's College London · London, UK", type: "Invited talk", url: "https://braincomplexityworkshop.weebly.com/" },
  { year: 2023, date: "July 2023", title: "Symposium and Educational Course", venue: "OHBM · Montreal, Canada", type: "Course" },
  { year: 2023, date: "June 2023", title: "Eudaimonia Seminar Series", venue: "Linacre College, Oxford · Oxford, UK", type: "Invited talk" },
  { year: 2023, date: "21 April 2023", title: "Macroscale brain networks: from function to generative mechanisms", venue: "Computational Neuroscience Seminars, University of Bristol · Bristol, UK", type: "Invited talk" },
  { year: 2023, date: "28 February 2023", title: "Intrinsic oscillatory modes driving functional connectivity", venue: "Whistler Workshop in Brain Function · Whistler, Canada", type: "Invited talk" },
  { year: 2023, date: "26 February 2023", title: "Intrinsic modes of brain function and their relationship with cognition", venue: "Glasgow University Psychology Society Conference · Glasgow, UK", type: "Invited talk" },
  { year: 2023, date: "10 January 2023", title: "Brain Energy Landscapes", venue: "Keynote, Alpine Brain Imaging Meeting (ABIM) · Champéry, Switzerland", type: "Keynote" },
  // 2022
  { year: 2022, date: "21 November 2022", title: "Metastable Oscillatory Modes emerge from Synchronization in the Brain Spacetime Connectome", venue: "BrainModes conference · Viña del Mar, Chile", type: "Invited talk" },
  { year: 2022, date: "7 November 2022", title: "Functional Networks in Brain Activity", venue: "Seminar, Sagol Department of Neurobiology, University of Haifa · Haifa, Israel (online)", type: "Invited talk" },
  { year: 2022, date: "26–30 September 2022", title: "Brain rhythms: A signature of synchronization in the brain spacetime network?", venue: "Lorentz Center Workshop: Bridging the Gap — from Brain Mechanics to Brain Dynamics · Leiden, The Netherlands", type: "Invited talk" },
  { year: 2022, date: "13 September 2022", title: "Weakly-stable synchronization in brain networks as a framework for transient integrative processing", venue: "Satellite Workshop 'Large-scale cortical networks: from dynamics to cognition', Bernstein Conference · Berlin, Germany", type: "Invited talk" },
  { year: 2022, date: "8 September 2022", title: "Models of large-scale brain dynamics", venue: "Invited lecture, Donders Cognition, Brain and Technology Summer School (DCBT) · Nijmegen, The Netherlands", type: "Invited talk" },
  { year: 2022, date: "20 July 2022", title: "Synchronization in the Connectome: Emergence of Metastable Oscillatory Modes", venue: "Workshop: Graph modeling of macroscopic brain functional activity dynamics, OCNS · Melbourne, Australia (online)", type: "Invited talk" },
  { year: 2022, date: "27–28 June 2022", title: "Resonant waves drive long-range correlations in fMRI signals", venue: "Iberian Chapter of the International Society for Magnetic Resonance in Medicine · Lisbon, Portugal", type: "Invited talk" },
  { year: 2022, date: "19 June 2022", title: "Resting-state activity from the perspective of Dynamical Systems Theory", venue: "Educational Course: Time-varying Connectivity in Resting-state fMRI, OHBM · Glasgow, UK", type: "Course" },
  { year: 2022, date: "20 June 2022", title: "Spectral properties of large-scale biophysical models of oscillatory brain networks", venue: "Symposium 'Frequency-dependent plasticity: The reshaping of oscillatory networks by entrainment', OHBM · Glasgow, UK", type: "Invited talk" },
  { year: 2022, date: "2 June 2022", title: "Modelling Brain Network Dynamics", venue: "Technion Class · Haifa, Israel", type: "Invited talk" },
  { year: 2022, date: "May 2022", title: "The interplay of complex and coherent dynamics in brain function", venue: "CY Cergy Paris Université · Cergy, France", type: "Invited talk" },
  { year: 2022, date: "6 May 2022", title: "Insights into intrinsic brain activity from the physics of coupled oscillators", venue: "University College London · London, UK", type: "Invited talk" },
  { year: 2022, date: "March 2022", title: "Synchronization in the Connectome", venue: "Neurotwin workshop · Barcelona, Spain", type: "Invited talk" },
  { year: 2022, date: "February 2022", title: "Resonant waves driving long-range functional connectivity", venue: "Center for Brain and Cognition · Barcelona, Spain", type: "Invited talk" },
  { year: 2022, date: "February 2022", title: "Network Neuroscience Tutorial", venue: "NetSci-X 2020 (recorded talk)", type: "Course" },
  // 2021
  { year: 2021, date: "September 2021", title: "Brain Stimulation Strategies to Rebalance Functional Networks", venue: "Portuguese Neurosurgery Society (online)", type: "Invited talk" },
  { year: 2021, date: "June 2021", title: "Mechanistic principles of Resting-State Networks and their modulation over time", venue: "Educational course on Dynamic Functional Connectivity, OHBM (online)", type: "Course" },
  { year: 2021, date: "26 April 2021", title: "Models of Brain Network Dynamics", venue: "'The Connected Brain', hosted by Olaf Sporns, Dept. of Psychological and Brain Sciences, Indiana University · Bloomington, USA (online)", type: "Invited talk" },
  { year: 2021, date: "13 April 2021", title: "Patho-connectomics: how disrupted functional networks lead to psychiatric disorders", venue: "Festival of Neuroscience, Symposium 'From human connectomics to cognition', British Neuroscience Association · UK (online)", type: "Invited talk", url: "https://www.youtube.com/watch?v=tLVfdJ-yqA4&t=1s" },
  { year: 2021, date: "7 April 2021", title: "Ressonância no cérebro revela princípios físicos da consciência", venue: "Desmascarar a Ciência, Physics Association of the University of Aveiro · Aveiro, Portugal", type: "Public lecture", url: "https://www.youtube.com/watch?v=jk8lBEjG6eA" },
  { year: 2021, date: "February 2021", title: "Dynamic behaviour of Brain Network States", venue: "Krembil Centre for Neuroinformatics (KCNI) Speaker Series · Toronto, Canada (virtual)", type: "Invited talk", url: "https://www.youtube.com/watch?v=bnxQVQ5Mmqw" },
  // 2020
  { year: 2020, date: "9 November 2020", title: "Insights into Psychopathology from Brain Network Dynamics", venue: "Cognitive Neuroscience Brown Bag Series, Dept. of Psychology and Beckman Institute, University of Illinois · Illinois, USA (online)", type: "Invited talk" },
  { year: 2020, date: "6 November 2020", title: "Phase-relationships underlying dynamic functional connectivity", venue: "e-Workshop 'The analysis of brain functional data using dynamic models and analytics', King's College London, UK (online)", type: "Invited talk" },
  { year: 2020, date: "24–27 August 2020", title: "Ghost attractors in Whole-Brain Network Dynamics", venue: "Mini-Symposium 'Multiple Scales in Mathematical Neuroscience', Dynamic Days Digital (online)", type: "Invited talk", url: "https://www.youtube.com/watch?v=YF6gMwSjIgY" },
  { year: 2020, date: "26 June 2020", title: "Wandering around functionally relevant Network States", venue: "Educational course on Dynamic Functional Connectivity, OHBM · Montreal, Canada (online)", type: "Course", url: "https://drive.google.com/file/d/1_7KdtggGoiuk2eStCiwSEosMCkJnl3kz/view?usp=sharing" },
  // 2019
  { year: 2019, date: "16–17 July 2019", title: "Emergence of frequency-specific long-range coherence in the neuroanatomical Connectome", venue: "Workshop 'Computational modelling of brain networks in Electroencephalography', OCNS · Barcelona, Spain", type: "Invited talk" },
  { year: 2019, date: "16–17 July 2019", title: "Collective oscillatory modes in the Connectome spacetime structure", venue: "Workshop 'Emergent Phenomena in Macroscopic Brain Networks', OCNS · Barcelona, Spain", type: "Invited talk", url: "https://sites.google.com/view/brainnet-cns2019/home" },
  { year: 2019, date: "1 June 2019", title: "Pathological Functional Connectivity in Patients with Obsessive Compulsive Disorder", venue: "Portuguese Neuroscience Society (SPN) meeting, session 'Psychiatric disorders and addiction' · Lisbon, Portugal", type: "Invited talk" },
  { year: 2019, date: "10–13 June 2019", title: "Modulating trajectories within a repertoire of metastable connectivity patterns", venue: "Symposium 'The Dynamic interplay between neuromodulation and whole-brain network structure', OHBM · Rome, Italy", type: "Invited talk" },
  { year: 2019, date: "15 May 2019", title: "The Switching Choreography of the Functional Connectome", venue: "Educational Course, Centre de Recherche INRIA Sophia Antipolis – Méditerranée · Nice, France", type: "Course" },
  { year: 2019, date: "5 April 2019", title: "A Máquina por trás da doença", venue: "3ª edição Brain 4.0, Universidade de Coimbra · Coimbra, Portugal", type: "Invited talk" },
  { year: 2019, date: "10–13 March 2019", title: "The Connectome Resonator: emergent collective oscillatory modes from complex network interactions", venue: "Brain Functional Organization, Connectivity and Behavior — Whistler Scientific Summer Workshop · Noosa, Australia", type: "Invited talk" },
  { year: 2019, date: "7–25 January 2019", title: "Latin-American Summer School in Computational Neuroscience (LACONEU)", venue: "Invited teacher · Valparaíso, Chile", type: "Invited teacher" },
  // 2018
  { year: 2018, date: "5 December 2018", title: "Resonance of Local Field Potentials in the Structural Connectome", venue: "Symposium, Aix-Marseille University · Marseille, France", type: "Invited talk" },
  { year: 2018, date: "23–25 November 2018", title: "Computational models of macroscopic brain dynamics in the Connectome", venue: "8th International Conference 'Aspects of Neuroscience', University of Warsaw · Warsaw, Poland", type: "Keynote" },
  { year: 2018, date: "23–27 July 2018", title: "Whole-brain network dynamics: mathematical models and mechanistic scenarios", venue: "European Conference on Mathematical and Theoretical Biology · Lisbon, Portugal", type: "Invited talk" },
  { year: 2018, date: "17 July 2018", title: "Network mechanisms linking neural oscillations to BOLD signal fluctuations", venue: "Workshop 'Bridging Spatial and Temporal Scales in Brain Connectomics', Computational Neuroscience Meeting · Seattle, USA", type: "Invited talk" },
  { year: 2018, date: "17 June 2018", title: "Models of Network Dynamics", venue: "Educational Course in Network Neuroscience, Human Brain Mapping · Singapore", type: "Course", url: "https://www.humanbrainmapping.org/files/2018/ED/Network%20Neuroscience.pdf" },
  { year: 2018, date: "19 June 2018", title: "The Switching Choreography of the Functional Connectome", venue: "Symposium 'Dynamics of resting-state functional connectivity', Human Brain Mapping · Singapore", type: "Invited talk", url: "https://www.humanbrainmapping.org/files/2018/Symposia/Dynamics.pdf" },
  { year: 2018, date: "24 April 2018", title: "Dynamics of Functional Networks in Health and Disease", venue: "Ciência Falada, Health and Life Sciences Research Institute, University of Minho · Braga, Portugal", type: "Invited talk" },
  { year: 2018, date: "4 April 2018", title: "Functional Brain Networks in healthy aging and Parkinson's disease", venue: "Symposium on 'Cognition, Emotion and Behavior: the Brain at work', Faculty of Psychology and Education Sciences, University of Porto · Porto, Portugal", type: "Invited talk" },
  { year: 2018, date: "4–7 March 2018", title: "The switching Choreography of the Functional Connectome", venue: "Keynote speaker, Whistler Workshop on Brain Functional Organization · Whistler, Canada", type: "Keynote", url: "http://medicine.yale.edu/mrrc/home/seminars/workshop/" },
  { year: 2018, date: "January 2018", title: "Meta-stable functional brain networks: Evidence, models and mechanisms", venue: "Institute for Systems and Robotics, Instituto Superior Técnico · Lisbon, Portugal", type: "Invited talk" },
  // 2017
  { year: 2017, date: "September 2017", title: "Interactions of Gamma oscillations through the structural connectome", venue: "Gamma oscillations Meeting, University of Oxford · Oxford, UK", type: "Invited talk" },
  { year: 2017, date: "July 2017", title: "Spontaneous switching between states of Functional Connectivity relates to cognition", venue: "Annual Meeting of the Organization for Computational Neuroscience · Antwerp, Belgium", type: "Invited talk" },
  { year: 2017, date: "June 2017", title: "Connectome Frequencies and Macro-scale Brain Rhythms", venue: "Brain Dynamics on Multiple Scales, Max-Planck Institute for the Physics of Complex Systems · Dresden, Germany", type: "Invited talk", url: "https://www.pks.mpg.de/msbdy17/" },
  { year: 2017, date: "January 2017", title: "Temporal Scales: From Cellular Activity to Network Dynamics", venue: "Biological and Astronomical Signal Processing (BASP) Frontiers Workshop · Villars-sur-Ollon, Switzerland", type: "Invited talk", url: "http://www.baspfrontiers.org/archive/2017/program.php.html" },
  // 2016
  { year: 2016, date: "July 2016", title: "Single or multi-frequency generators in on-going MEG data", venue: "Workshop Multi-Area Models of Cortex, Computational Neuroscience Meeting · Jeju, South Korea", type: "Invited talk" },
  { year: 2016, date: "March 2016", title: "Metastability and collective frequencies in oscillatory brain networks", venue: "International Conference on Biological Oscillations · Lancaster University, UK", type: "Invited talk" },
  // 2015
  { year: 2015, date: "October 2015", title: "Using computational models to understand brain network dynamics", venue: "European MEG Society Meeting · Brussels, Belgium", type: "Invited talk" },
  { year: 2015, date: "April 2015", title: "Whole-Brain Computational Connectomics: Complex Brain Activity from a Network Perspective", venue: "Biomedical Engineering Workshop · Lisbon, Portugal", type: "Invited talk" },
  // 2014
  { year: 2014, date: "August 2014", title: "Metastability and collective frequencies in oscillatory brain networks", venue: "BioMag — International Conference on Biomagnetism · Halifax, Canada", type: "Invited talk" },
  { year: 2014, date: "October 2014", title: "Computational Modelling in Neuroscience", venue: "Advanced Course on Analysis Methods and Modelling in Biomedical Research · Coimbra, Portugal", type: "Course" },
  // 2013
  { year: 2013, date: "3 December 2013", title: "Exploring mechanisms of spontaneous MEG functional connectivity", venue: "Brain Modes · Amsterdam, The Netherlands", type: "Invited talk" },
  // 2011
  { year: 2011, date: "June 2011", title: "Exploring the phase dynamics of neuronal oscillation through the Kuramoto model", venue: "Computational, Cognitive and Clinical Neuroimaging Laboratory (C3NL), Imperial College · London, UK", type: "Invited talk" },
];

function TalksPage() {
  const byYear = talks.reduce<Record<number, Talk[]>>((acc, t) => {
    (acc[t.year] ||= []).push(t);
    return acc;
  }, {});
  const years = Object.keys(byYear).map(Number).sort((a, b) => b - a);

  return (
    <PageShell>
      <PageHeader eyebrow="Outreach" title="Talks" description="Invited talks, keynotes and conference presentations." />
      <div className="container-page py-12 space-y-12">
        {years.map((y) => (
          <section key={y}>
            <h2 className="text-xl font-semibold mb-4 text-primary">{y}</h2>
            <ul className="space-y-3">
              {byYear[y].map((t, i) => {
                const content = (
                  <>
                    <div className="shrink-0 h-10 w-10 rounded-full bg-secondary flex items-center justify-center text-primary">
                      <Mic className="h-5 w-5" />
                    </div>
                    <div className="flex-1">
                      <div className="flex flex-wrap items-center gap-2 text-xs uppercase tracking-wider">
                        <span className="text-muted-foreground">{t.date}</span>
                        <span className="rounded-full bg-secondary px-2 py-0.5 text-primary">{t.type}</span>
                      </div>
                      <div className="mt-1 font-semibold">{t.title}</div>
                      <div className="text-sm text-muted-foreground mt-0.5">{t.venue}</div>
                    </div>
                  </>
                );
                return (
                  <li key={i} className="glass-card p-5">
                    {t.url ? (
                      <a href={t.url} target="_blank" rel="noopener noreferrer" className="group flex items-start gap-4">
                        {content}
                      </a>
                    ) : (
                      <div className="flex items-start gap-4">{content}</div>
                    )}
                  </li>
                );
              })}
            </ul>
          </section>
        ))}
      </div>
    </PageShell>
  );
}
