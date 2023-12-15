import React from 'react'
import Carousel from './carousel'

const items = [
  {
    nome: 'Mirelle Lucena',
    cargo: 'Product Owner',
    depoimento:
      '“Ingressar na Tech Pro Bem foi um divisor de águas para mim. O voluntariado surgiu em um momento que estava precisando colocar muito do que tinha de conhecimento teórico em prática, estava buscando uma oportunidade para melhorar minha comunicação em time e ter cases práticos. Foi um estímulo e um motivador enquanto ainda não estava inserida no mercado de trabalho.”',
  },
  {
    nome: 'Roxane Nayara',
    cargo: 'Analista de Qualidade',
    depoimento:
      'A Tech contribuiu para que meu conhecimento teórico se transformasse em prática. Pude ter contato com uma equipe real e com profissionais da área ao atuar num time ágil como QA Jr voluntária. Desenvolvi muito minhas habilidades analíticas e de comunicação. Sou muito grata a toda equipe por me proporcionar crescer como pessoa e como profissional. Estou muito feliz e grata por todo aprendizado.',
  },
  {
    nome: 'Mirelle Lucena',
    cargo: 'Product Owner',
    depoimento:
      '“Ingressar na Tech Pro Bem foi um divisor de águas para mim. O voluntariado surgiu em um momento que estava precisando colocar muito do que tinha de conhecimento teórico em prática, estava buscando uma oportunidade para melhorar minha comunicação em time e ter cases práticos. Foi um estímulo e um motivador enquanto ainda não estava inserida no mercado de trabalho.”',
  },
  {
    nome: 'Roxane Nayara',
    cargo: 'Analista de Qualidade',
    depoimento:
      'A Tech contribuiu para que meu conhecimento teórico se transformasse em prática. Pude ter contato com uma equipe real e com profissionais da área ao atuar num time ágil como QA Jr voluntária.',
  },
  {
    nome: 'Will',
    cargo: 'Dev Brabo',
    depoimento:
      'A Tech contribuiu para que meu conhecimento teórico se transformasse em prática. Pude ter contato com uma equipe real e com profissionais da área ao atuar num time ágil como QA Jr voluntária.',
  },

  // Adicione URLs das imagens que deseja exibir
]

export const DepoimentsManual: React.FC = () => {
  return (
    <div>
      <Carousel items={items} />
    </div>
  )
}
