import React from 'react'
import Background from './elements/background/Background'
import Layout from './layout/Layout'
import Page1 from './pages/page1/Page1'
import Page2 from './pages/page2/Page2'
import Page3 from './pages/page3/Page3'
import Page4 from './pages/page4/Page4'
import Page5 from './pages/page5/Page5'
import Page6 from './pages/page6/Page6'
import Page7 from './pages/page7/Page7'
import Page10 from './pages/page10/Page10'
import StartPage from './pages/start/StartPage'
import styles from './tablet.module.css'
import Page12 from './pages/page12/Page12'
import Page8 from './pages/page8/Page8'
import Page9 from './pages/page9/Page9'
import Page11 from './pages/page11/Page11'
import Page13 from './pages/page13/Page13'
import Page14 from './pages/page14/Page14'
import Page15 from './pages/page15/Page15'
import Page16 from './pages/page16/Page16'
import Page17 from './pages/page17/Page17'

export default function Tablet(): JSX.Element {
  const [currentPage, setCurrentPage] = React.useState<number>(0)

  const getClass = useClass(styles)
  const getGlobClass = (names: string) => getClass(names)

  const nextPage = (): void => {
    if (currentPage === slides.length - 1) return
    setCurrentPage(currentPage + 1)
  }
  const prevPage = (): void => {
    if (currentPage === 0) return
    setCurrentPage(currentPage - 1)
  }

  const [isMobile, setIsMobile] = React.useState(false)
  const winodwResizeHandler = () => {
    setIsMobile(window.innerWidth < 600)
  }
  React.useEffect(() => {
    window.addEventListener('resize', winodwResizeHandler)
    return () => window.removeEventListener('resize', winodwResizeHandler)
  })

  const pageAttrs = { getGlobClass, next: nextPage, isMobile }

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
    <Page3 {...pageAttrs} />,
    <Page4 {...pageAttrs} answers={answers[1]} setAns={changeAnswers(1)} />,
    <Page5 {...pageAttrs} />,
    <Page6 {...pageAttrs} />,
    <Page7 {...pageAttrs} answers={answers[2]} setAns={changeAnswers(2)} />,
    <Page8 {...pageAttrs} />,
    <Page9 {...pageAttrs} />,
    <Page10 {...pageAttrs} answers={answers[3]} setAns={changeAnswers(3)} />,
    <Page11 {...pageAttrs} />,
    <Page12 {...pageAttrs} answers={answers[4]} setAns={changeAnswers(4)} />,
    <Page13 {...pageAttrs} />,
    <Page14 {...pageAttrs} />,
    <Page15 {...pageAttrs} />,
    <Page16 {...pageAttrs} />,
    <Page17 {...pageAttrs} prev={prevPage} />,
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
