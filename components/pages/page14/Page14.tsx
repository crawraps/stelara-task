import Button from 'components/elements/Button/Button'
import Footer from 'components/elements/footer/Footer'
import React from 'react'
import Page from '../page/Page'
import { PageProps } from '../page1/Page1'
import styles from './page14.module.css'
import manImage from '/assets/man-3.png'

export default function Page14(props: PageProps): JSX.Element {
  return (
    <Page
      image
      src={manImage}
      imageWidth={41.25}
      className={styles['page-14']}
      imageClass={styles.image}
    >
      <div className={styles.content}>
        <h1 className={styles.heading}>
          Эффективность назначенной терапии У ГИПОТЕТИЧЕСКОГО ПАЦИЕНТА
        </h1>
        <div className={styles.message}>
          {props.isMobile
            ? 'Отлично! Вы подобрали оптимальную терапию пациенту, его качество жизни и общее самочувствие улучшилось уже на 1 месяце терапии.'
            : 'Отлично! Вы подобрали оптимальную терапию  пациенту!'}
        </div>
        <Button title='далее' className={styles.button} onClick={props.next} />
      </div>

      <Footer
        codeClass={styles['footer-code']}
        textClass={styles['footer-text']}
      >
        ИАБК — индекс активности болезни Крона, CDAI — Crohn’s disease activity
        index, СРБ — С-реактивный белок
      </Footer>
    </Page>
  )
}
