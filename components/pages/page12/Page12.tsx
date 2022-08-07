import styles from './page12.module.css'
import Page from '../page/Page'
import { QuizPageProps } from '../page2/Page2'
import image from '../../../assets/wooman-3.png'
import Quiz from 'components/elements/Quiz/Quiz'
import { quiz } from 'components/Tablet'
import Footer from 'components/elements/footer/Footer'

export default function Page7(props: QuizPageProps): JSX.Element {
  return (
    <Page
      image
      src={image}
      imageWidth={40.83}
      className={styles.page12}
      imageClass={styles.image}
    >
      <Quiz
        heading='КАКИЕ ПРЕИМУЩЕСТВА ЕСТЬ ЕЩЁ У ПРЕПАРАТА УСТЕКИНУМАБ (СТЕЛАРА®)?'
        mobileHeading='КАКИЕ ПРЕИМУЩЕСТВА ЕСТЬ ЕЩЁ У ПРЕПАРАТА УСТЕКИНУМАБ (СТЕЛАРА®)?'
        next={props.next}
        quest={quiz[4]}
        ans={props.answers}
        setAns={props.setAns}
        questNumber={4}
        className={styles.quiz}
        headingClass={styles.heading}
        answerClass={styles.answer}
        buttonClass={styles.button}
      />
      <Footer
        textClass={styles['footer-text']}
        codeClass={styles['footer-code']}
      >
        ГИБП – генно-инженерные биологические препараты, БК – болезнь Крона, ВЗК
        - воспалительные заболевания кишечника
      </Footer>
    </Page>
  )
}
