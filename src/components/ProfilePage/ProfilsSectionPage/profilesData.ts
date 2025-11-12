export interface Profile {
  id: string;
  name: string;
  role: string;
  location?: string;
  summary?: string;
  image?: string;
  education?: string;
  email?: string;
  phone?: string;
  skills?: string[];
}

export const PROFILES: Profile[] = [
  { id: 'p1', name: 'Awa Diallo', role: 'Développeuse Frontend', location: 'Dakar, SN', summary: 'React, TypeScript, Tailwind', image: '/profiles/awa-diallo.jpg', education: 'Master en Informatique', email: 'ooo@ddnf.com', phone: '+221 77 123 45 67' },
  { id: 'p2', name: 'Jean-Pierre Mbaye', role: 'Consultant Juridique', location: 'Dakar, SN', summary: 'Droit des affaires, contrats' },
  { id: 'p3', name: 'Fatou Sarr', role: 'UI/UX Designer', location: 'Dakar, SN', summary: 'Figma, Design system' },
  { id: 'p4', name: 'Mamadou Cissé', role: 'Développeur Backend', location: 'Dakar, SN', summary: 'Node.js, PostgreSQL' },
  { id: 'p5', name: 'Aminata Ndour', role: 'Data Analyst', location: 'Dakar, SN', summary: 'Python, SQL, Visualisation' },
  { id: 'p6', name: 'Ousmane Kante', role: 'Ingénieur DevOps', location: 'Dakar, SN', summary: 'Docker, CI/CD' },
  { id: 'p7', name: 'Seynabou Fall', role: 'Marketing Specialist', location: 'Dakar, SN', summary: 'SEO, Campagnes digitales' },
  { id: 'p8', name: 'Pierre Ndiaye', role: 'Frontend Engineer', location: 'Dakar, SN', summary: 'Vue, Nuxt, SSR' },
  { id: 'p9', name: 'Khady Ba', role: 'Product Manager', location: 'Dakar, SN', summary: 'Roadmaps, discovery' },
];
