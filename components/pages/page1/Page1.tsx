import man1 from 'assets/man-1.png'
import Button from '../../elements/Button/Button'
import Footer from '../../elements/footer/Footer'
import { useClass } from 'components/Tablet'
import styles from './page1.module.css'
import List from 'components/elements/list/List'
import ListItem from 'components/elements/list/ListItem'
import Page from '../page/Page'

export interface PageProps {
  next(): void
  getGlobClass(name: string): string
}

export default function Page1({ next, getGlobClass }: PageProps) {
  const getClass = useClass(styles)
  return (
    <Page image src={man1} imageWidth={39.21} imageClass={getClass('image')}>
      <div className={getClass('page-1') + ' ' + getGlobClass('content')}>
        <h1 className={getGlobClass('heading')}>
          {`
      На приеме\nгипотетический пациент\nс язвенным колитом
      `}
        </h1>
        <span>Антон, 32 года*</span>
        <div className={getClass('blocks')}>
          <div
            className={getClass('block-1') + ' ' + getGlobClass('purple-block')}
          >
            <h2>Анамнез заболевания</h2>
            <p>Диагноз установлен в 27 лет.</p>
            <ul>
              <li>В течение 8 месяцев получает терапию ГИБП класса иФНО-α.</li>
              <li>
                При назначении иФНО-α через 3 месяца была достигнута ремиссия.
              </li>
            </ul>
            <p>
              2 месяца назад вновь участился стул до 3-4 раз в сутки, появилась
              кровь в стуле. <br />
              <br /> Лечащий врач эскалировал дозу препарата иФНО-α, добавил к
              терапии ГКС 1 мг/кг веса.
            </p>
            <h2>Жалобы</h2>
            <p>
              За последние 2 недели стул увеличился до 5-6 раз в сутки,
              появилась кровь в стуле.
            </p>
          </div>
          <div className={getClass('right-col')}>
            <div
              className={
                getClass('block-2') + ' ' + getGlobClass('purple-block')
              }
            >
              <h2>результаты исследования</h2>
              <p>СРБ – 12 мг/л</p>
              <p>Кальпротектин – 1250 мг/кг</p>
              <p>Гемоглобин – 94 г/л</p>
            </div>
            <Button title='далее' onClick={next} />
          </div>
        </div>

        <List>
          <ListItem title='Анамнез' subtitle='Антон, 32 года*'>
            <p>Диагноз установлен в 27 лет.</p>
            <ul>
              <li>В течение 8 месяцев получает терапию ГИБП класса иФНО-α.</li>
              <li>
                При назначении иФНО-α через 3 месяца была достигнута ремиссия.
              </li>
            </ul>
            <p>
              2 месяца назад вновь участился стул до 3-4 раз в сутки, появилась
              кровь в стуле. <br />
              <br /> Лечащий врач эскалировал дозу препарата иФНО-α, добавил к
              терапии ГКС 1 мг/кг веса.
            </p>
          </ListItem>
          <ListItem title='Жалобы'>
            За последние 2 недели стул увеличился до 5-6 раз в сутки, появилась
            кровь в стуле.
          </ListItem>
          <ListItem title='Результаты исследования'>
            <p>СРБ – 12 мг/л</p>
            <p>Кальпротектин – 1250 мг/кг</p>
            <p>Гемоглобин – 94 г/л</p>
          </ListItem>
        </List>
        <Button title='далее' onClick={next} className={getClass('button')} />
      </div>
      <Footer
        textClass={getClass('footer-text')}
        codeClass={getClass('footer-code')}
      >
        *Гипотетический пациент
        <br />
        ГИБП – генно-инженерные биологические препараты, иФНО-α – ингибитор
        фактора некроза опухоли альфа, ГКС – глюкокортикостероиды, СРБ –
        С-реактивный белок
      </Footer>
    </Page>
  )
}
