import { FaCode, FaPaintBrush, FaBalanceScale, FaChartBar, FaGraduationCap, FaHospital, FaBuilding, FaCogs, FaUserTie } from 'react-icons/fa';
import type { IconType } from 'react-icons';

export interface Domain {
  title: string;
  icon: IconType;
  desc: string;
}

export const ALL_DOMAINS: Domain[] = [
  { title: 'Développement', icon: FaCode, desc: 'Développeurs Full-Stack, Frontend et Backend.' },
  { title: 'Design', icon: FaPaintBrush, desc: 'UI/UX designers et infographistes.' },
  { title: 'Juridique', icon: FaBalanceScale, desc: 'Assistants juridiques bilingues.' },
  { title: 'Marketing', icon: FaChartBar, desc: 'Spécialistes marketing digital et SEO.' },
  { title: 'Education', icon: FaGraduationCap, desc: 'Enseignants et formateurs qualifiés.' },
  { title: 'Santé', icon: FaHospital, desc: 'Professionnels de la santé.' },
  { title: 'Business', icon: FaBuilding, desc: 'Consultants en gestion et stratégie.' },
  { title: 'Ingénierie', icon: FaCogs, desc: 'Ingénieurs tous domaines.' },
  { title: 'RH', icon: FaUserTie, desc: 'Experts en ressources humaines.' }
];