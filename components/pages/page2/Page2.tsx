import Page from '../image/Page'
import { PageProps } from '../page1/Page1'
import image from '../../../assets/wooman-1.png'
import styles from './page2.module.css'
import { quiz } from 'components/Tablet'
import Quiz from 'components/elements/Quiz/Quiz'
import Footer from 'components/elements/footer/Footer'

interface Props extends PageProps {
  answers: number[]
  setAns(ans: number[]): void
}

export default function Page2({ answers, setAns, next }: Props): JSX.Element {
  return (
    <Page
      image
      src={image}
      imageWidth={40.1}
      className={styles.page2}
      imageClass={styles.image}
    >
      <Quiz
        heading='ЭФФЕКТИВНА ЛИ НАЗНАЧЕННАЯ ТЕРАПИЯ ПРЕПАРАТОМ КЛАССА иФНО-α?'
        mobileHeading='ОЦЕНИТЕ ТЯЖЕСТЬ ЗАБОЛЕВАНИЯ'
        next={next}
        quest={quiz[0]}
        ans={answers}
        setAns={setAns}
        questNumber={0}
        className={styles.quiz}
        headingClass={styles.heading}
        answerClass={styles.answer}
        buttonClass={styles.button}
      />
      <Footer
        textClass={styles['footer-text']}
        codeClass={styles['footer-code']}
      >
        иФНО-α – ингибитор фактора некроза опухоли альфа
      </Footer>
    </Page>
  )
}
