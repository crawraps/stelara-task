import React from 'react'
import Background from './elements/background/Background'
import Layout from './layout/Layout'
import Page1 from './pages/page1/Page1'
import Page2 from './pages/page2/Page2'
import StartPage from './pages/start/StartPage'
import styles from './tablet.module.css'

export default function Tablet(): JSX.Element {
  const [currentPage, setCurrentPage] = React.useState<number>(0)

  const getClass = useClass(styles)
  const getGlobClass = (names: string) => getClass(names)

  const nextPage = (): void => {
    setCurrentPage(currentPage + 1)
  }
  const prevPage = (): void => {
    if (currentPage === 0) return
    setCurrentPage(currentPage - 1)
  }

  const pageAttrs = { getGlobClass, next: nextPage }

  const [answers, setAnswers] = React.useState<number[][]>(
    Array(quiz.length).fill([])
  )
  const changeAnswers = (quest: number) => {
    return (ans: number[]) => {
      setAnswers((answers: number[][]) => {
        answers[quest] = ans
        return answers
      })
    }
  }

  const slides = [
    <StartPage onClick={nextPage} />,
    <Page1 {...pageAttrs} />,
    <Page2 {...pageAttrs} answers={answers[0]} setAns={changeAnswers(0)} />,
  ]

  return (
    <Layout page={currentPage} nextPage={nextPage} prevPage={prevPage}>
      <Background page={currentPage} />
      {slides[currentPage]}
    </Layout>
  )
}

export interface Quest {
  answers: string[]
  correct: number[]
  slide: number
}

export const quiz: Quest[] = [
  {
    answers: [
      'Терапия неэффективна, необходимо ПЕРЕСМОТРЕТЬ тактику ведения пациента',
      'Терапия эффективна, т.к. у пациента была достигнута ремиссия при назначении иФНО-α',
    ],
    correct: [0],
    slide: 2,
  },
  {
    answers: ['нет', 'да'],
    correct: [0],
    slide: 4,
  },
  {
    answers: [
      'Необходимо назначить препарат другого класса ГИБП',
      'Увеличение дозы ГКС',
      'Лечение ГИБП в данном случае неэффективно, необходимо направить пациента на хирургическое лечение',
    ],
    correct: [0],
    slide: 7,
  },
  {
    answers: [
      'Да, устекинумаб не повышает риск малигнизации и осложнений со стороны ССС у пациентов с ВЗК',
      'Да, устекинумаб не повышает риск серьезных и оппортунистических инфекций',
      'Нет, все ГИБП повышают риск развития серьезных и оппортунистических инфекций',
      'Нет, все ГИБП повышают риск малигнизации у пациентов с ВЗК',
    ],
    correct: [0, 1],
    slide: 10,
  },
  {
    answers: [
      'Эффективно влияет на проявления ВЗК (в том числе внекишечные)',
      'Эффективен у рефрактерных пациентов и множественных неответчиков на ГИБП',
      'Выживаемость сопоставима с другими ГИБП',
    ],
    correct: [0, 1],
    slide: 12,
  },
]

// Hook for quick access to styles
export function useClass(styles: {
  readonly [key: string]: string
}): (name: string) => string {
  return (name: string) =>
    name
      .split(' ')
      .map(className => styles[className])
      .join(' ')
}
