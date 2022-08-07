import Button from 'components/elements/Button/Button'
import Footer from 'components/elements/footer/Footer'
import React from 'react'
import Page from '../page/Page'
import { PageProps } from '../page1/Page1'
import styles from './page15.module.css'
import woomanImage from '/assets/wooman-3.png'

export default function Page14(props: PageProps): JSX.Element {
  const items = [
    'с неэффективностью ГИБП в предыдущей схеме лечения (неэффективность одного иФНО-α)',
    'с неэффективностью ведолизумаба',
    'с непереносимостью и/или осложнениями на фоне ГИБП',
    'с возобновлением биологической терапии после «медикаментозных каникул»',
    'множественные «неответчики»',
  ]

  return (
    <Page
      image
      src={woomanImage}
      imageWidth={40.83}
      className={styles['page-14']}
      imageClass={styles.image}
    >
      <div className={styles.content}>
        <h1 className={styles.heading}>
          Стелара® — препарат первого выбора для пациентов с ВЗК:
        </h1>
        <div className={styles.message}>
          {items.map(text => (
            <div className={styles.item}>
              <svg
                width='18'
                height='13'
                viewBox='0 0 18 13'
                fill='none'
                xmlns='http://www.w3.org/2000/svg'
              >
                <path
                  d='M17 1L6 12L1 7'
                  stroke='#532F88'
                  stroke-width='2'
                  stroke-linecap='round'
                  stroke-linejoin='round'
                />
              </svg>
              <p>{text}</p>
            </div>
          ))}
        </div>
        <Button
          title='завершить'
          className={styles.button}
          onClick={props.next}
        />
      </div>

      <Footer
        codeClass={styles['footer-code']}
        textClass={styles['footer-text']}
      >
        ГИБП – генно-инженерные биологические препараты, иФНО-α – ингибитор
        фактора некроза опухоли альфа; ВЗК – воспалительные заболевания
        кишечника
      </Footer>
    </Page>
  )
}
