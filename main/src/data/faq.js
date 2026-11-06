import {
  Heart,
  TriangleAlert,
  Users,
  HandCoins,
  BadgeCheck,
  PawPrint,
  MapPin,
  Scissors,
} from 'lucide-react'

const c = (text) => ({ confirm: text })

export const faqItems = [
  {
    question: 'Como funciona a adoção?',
    icon: Heart,
    needsConfirm: true,
    answer: [
      'Conectamos animais recuperados com famílias comprometidas, em busca de um lar seguro e definitivo. ',
      c('Descrever as etapas: formulário, visita, termo...'),
    ],
  },
  {
    question: 'Encontrei um animal ferido. O que faço?',
    icon: TriangleAlert,
    needsConfirm: true,
    answer: [
      'Priorizamos cães atropelados, gravemente feridos ou em risco imediato de vida nas ruas de Teresina. Avise pelo ',
      c('WhatsApp da ONG'),
      ' e vamos avaliar a gravidade do caso antes de definir o atendimento.',
    ],
  },
  {
    question: 'Como posso ser voluntário?',
    icon: Users,
    needsConfirm: true,
    answer: [
      'Os voluntários ajudam diariamente com banho, alimentação, medicação e limpeza do abrigo. Para se inscrever, fale com a gente em ',
      c('canal de contato'),
      '.',
    ],
  },
  {
    question: 'Para onde vão as doações?',
    icon: HandCoins,
    answer: [
      'Para cuidado veterinário (cirurgias, transfusões, internações), alimentação e o dia a dia do abrigo. Exemplo: o tratamento da Michele, de cerca de R$ 6.000, foi 100% coberto por doações da comunidade.',
    ],
  },
  {
    question: 'O Lar do Nando é uma ONG registrada?',
    icon: BadgeCheck,
    answer: [
      'Sim. O projeto foi formalizado como ONG em 17 de março de 2021 e é registrado com o CNPJ 41.794.269/0001-74.',
    ],
  },
  {
    question: 'Quantos animais vocês abrigam?',
    icon: PawPrint,
    answer: [
      'O abrigo comporta até 90 animais ao mesmo tempo. Desde a formalização, em 2021, já foram mais de 200 animais resgatados.',
    ],
  },
  {
    question: 'Onde fica o abrigo? Posso visitar?',
    icon: MapPin,
    needsConfirm: true,
    answer: [
      'O abrigo funciona na casa dos fundadores, no Residencial Jacinta Andrade, Zona Norte de Teresina. ',
      c('Visitas: informar se aceitam, dias e horários'),
    ],
  },
  {
    question: 'Vocês fazem castração gratuita?',
    icon: Scissors,
    answer: [
      'Sim, em parceria com a SEMARH-PI realizamos castrações gratuitas dos animais abrigados, para controlar a reprodução irresponsável.',
    ],
  },
]
