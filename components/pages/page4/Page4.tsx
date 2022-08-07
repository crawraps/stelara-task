import Footer from 'components/elements/footer/Footer'
import Quiz from 'components/elements/Quiz/Quiz'
import { quiz } from 'components/Tablet'
import Page from '../page/Page'
import { QuizPageProps } from '../page2/Page2'
import styles from './page4.module.css'
import image from '/assets/wooman-2.png'

export default function Page4(props: QuizPageProps): JSX.Element {
  return (
    <Page
      image
      src={image}
      imageWidth={41.25}
      className={styles.page4}
      imageClass={styles.image}
    >
      <Quiz
        heading='СЛЕДУЕТ ЛИ НАЗНАЧИТЬ ПАЦИЕНТУ ДРУГОЙ ПРЕПАРАТ ИЗ КЛАССА иФНО-α ДЛЯ ДОСТИЖЕНИЯ ЭФФЕКТИВНОСТИ?'
        mobileHeading='СЛЕДУЕТ ЛИ НАЗНАЧИТЬ ПАЦИЕНТУ ДРУГОЙ ПРЕПАРАТ ИЗ КЛАССА иФНО-α ДЛЯ ДОСТИЖЕНИЯ ЭФФЕКТИВНОСТИ?'
        next={props.next}
        quest={quiz[1]}
        ans={props.answers}
        setAns={props.setAns}
        questNumber={1}
        className={styles.quiz}
        headingClass={styles.heading}
        answerClass={styles.answer}
        buttonClass={styles.button}
      />
      <Footer
        textClass={styles['footer-text']}
        codeClass={styles['footer-code']}
      >
        ГИБП — генно-инженерные биологические препараты, иФНО-α – ингибитор
        фактора некроза опухоли альфа , иФНО-α – ингибиторы фактора некроза
        опухоли альфа
      </Footer>
    </Page>
  )
}
