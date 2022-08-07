import styles from './page10.module.css'
import Page from '../page/Page'
import { QuizPageProps } from '../page2/Page2'
import image from '../../../assets/wooman-2.png'
import Quiz from 'components/elements/Quiz/Quiz'
import { quiz } from 'components/Tablet'
import Footer from 'components/elements/footer/Footer'

export default function Page7(props: QuizPageProps): JSX.Element {
  return (
    <Page
      image
      src={image}
      imageWidth={41.25}
      className={styles.page10}
      imageClass={styles.image}
    >
      <Quiz
        heading='МОЖЕТ ЛИ БЫТЬ РЕКОМЕНДОВАН ПАЦИЕНТУ УСТЕКИНУМАБ И ПОЧЕМУ?'
        mobileHeading='МОЖЕТ ЛИ БЫТЬ РЕКОМЕНДОВАН ПАЦИЕНТУ УСТЕКИНУМАБ И ПОЧЕМУ?'
        next={props.next}
        quest={quiz[3]}
        ans={props.answers}
        setAns={props.setAns}
        questNumber={3}
        className={styles.quiz}
        headingClass={styles.heading}
        answerClass={styles.answer}
        buttonClass={styles.button}
      />
      <Footer
        textClass={styles['footer-text']}
        codeClass={styles['footer-code']}
      >
        ГИБП – генно-инженерные биологические препараты, ССС-
        сердечно-сосудистая система, ВЗК – воспалительные заболевания кишечника
      </Footer>
    </Page>
  )
}
