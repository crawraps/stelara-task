import Page from '../page/Page'
import { QuizPageProps } from '../page2/Page2'
import styles from './page7.module.css'
import image from '../../../assets/wooman-1.png'
import Quiz from 'components/elements/Quiz/Quiz'
import { quiz } from 'components/Tablet'
import Footer from 'components/elements/footer/Footer'

export default function Page7(props: QuizPageProps): JSX.Element {
  return (
    <Page
      image
      src={image}
      imageWidth={40.1}
      className={styles.page7}
      imageClass={styles.image}
    >
      <Quiz
        heading='УЧИТЫВАЯ ДАННЫЕ АНАМНЕЗА, КАКАЯ МОЖЕТ БЫТЬ ДАЛЬНЕЙШАЯ ТАКТИКА ВРАЧА?'
        mobileHeading='УЧИТЫВАЯ ДАННЫЕ АНАМНЕЗА, КАКАЯ МОЖЕТ БЫТЬ ДАЛЬНЕЙШАЯ ТАКТИКА ВРАЧА?'
        next={props.next}
        quest={quiz[2]}
        ans={props.answers}
        setAns={props.setAns}
        questNumber={2}
        className={styles.quiz}
        headingClass={styles.heading}
        answerClass={styles.answer}
        buttonClass={styles.button}
      />
      <Footer
        textClass={styles['footer-text']}
        codeClass={styles['footer-code']}
      >
        ГИБП – генно-инженерные биологические препараты, ГКС –
        глюкокортикостероиды
      </Footer>
    </Page>
  )
}
