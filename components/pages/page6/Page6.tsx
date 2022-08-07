import Page from '../page/Page'
import { PageProps } from '../page1/Page1'
import image from 'assets/man-2.png'
import styles from './page6.module.css'
import Button from 'components/elements/Button/Button'
import Footer from 'components/elements/footer/Footer'

export default function Page6(props: PageProps): JSX.Element {
  return (
    <Page
      image
      src={image}
      imageClass={styles.image}
      className={styles['page-6']}
      imageWidth={44.48}
    >
      <div className={props.getGlobClass('content') + ' ' + styles.content}>
        <h1 className={props.getGlobClass('heading') + ' ' + styles.heading}>
          ДОПОЛНИТЕЛЬНЫЕ ДАННЫЕ АНАМНЕЗА
        </h1>
        <p>
          «Доктор, мне назначали за этот год уже столько препаратов, а симптомы
          вернулись снова. За год я обращался к офтальмологу два раза из-за
          увеита. Я лечился от кишечной инфекции. На теле 2 раза появлялся
          герпес, была постгерпетическая невралгия, повысился холестерин. Я не
          хочу так мучиться всю оставшуюся жизнь, я так еще молод. Подберите мне
          подходящую терапию»
        </p>
        <Button
          title='подобрать терапию'
          onClick={props.next}
          className={styles.button}
        />
      </div>
      <Footer
        codeClass={styles['footer-code']}
        textClass={styles['footer-text']}
      >
        *Гипотетический пациент
      </Footer>
    </Page>
  )
}
