import {
  TriangleAlert,
  HeartPulse,
  HouseHeart,
  Scissors,
  Heart,
  Users,
} from 'lucide-react'
import resgateEmergenciaImage from '../assets/images/resgate-emergencia.jpg'
import adocaoFamiliaImage from '../assets/images/adocao-familia.jpg'

export const services = [
  {
    id: 'resgate-emergencia',
    icon: TriangleAlert,
    title: 'Resgate de emergência',
    description:
      'Priorizamos cães atropelados, gravemente feridos, debilitados ou em risco imediato de vida nas ruas de Teresina.',
    tag: 'Emergência',
    photo: resgateEmergenciaImage,
    stat: { value: '200+', label: 'animais resgatados desde 2021' },
  },
  {
    id: 'cuidado-veterinario',
    icon: HeartPulse,
    title: 'Cuidado veterinário',
    description:
      'Cobrimos cirurgias, transfusões de sangue, internações e tratamentos longos — como o caso da Michele.',
    link: { label: 'Ver a história da Michele', to: '/historias/michele' },
  },
  {
    id: 'abrigo-propria-casa',
    icon: HouseHeart,
    title: 'Abrigo na própria casa',
    description:
      'Os animais vivem na residência dos fundadores enquanto se recuperam e aguardam adoção, com cuidado 24h.',
    tag: 'Até 90 animais',
  },
  {
    id: 'castracao-gratuita',
    icon: Scissors,
    title: 'Castração gratuita',
    description:
      'Em parceria com a SEMARH-PI, realizamos castrações gratuitas dos animais abrigados, controlando a reprodução irresponsável.',
    tag: '25+ castrações feitas',
  },
  {
    id: 'adocao-responsavel',
    icon: Heart,
    title: 'Adoção responsável',
    description:
      'Conectamos animais recuperados com famílias comprometidas, garantindo um lar seguro e definitivo para cada um.',
    photo: adocaoFamiliaImage,
    cta: { label: 'Quero adotar', hash: 'apoio' },
  },
  {
    id: 'rede-voluntarios',
    icon: Users,
    title: 'Rede de voluntários',
    description:
      'Coordenamos voluntários que ajudam com banho, alimentação, medicação e limpeza do abrigo diariamente.',
    link: { label: 'Quero ser voluntário', hash: 'apoio' },
  },
]
