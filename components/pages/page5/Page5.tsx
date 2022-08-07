import Button from 'components/elements/Button/Button'
import Footer from 'components/elements/footer/Footer'
import { useClass } from 'components/Tablet'
import Page from '../page/Page'
import { PageProps } from '../page1/Page1'
import styles from './page5.module.css'

export default function Page5({ getGlobClass, next }: PageProps): JSX.Element {
  const getClass = useClass(styles)
  return (
    <Page className={getClass('page-5')}>
      <div className={getClass('blocks')}>
        <h1 className={getGlobClass('heading') + ' ' + styles.heading}>
          ПОЧЕМУ ПЕРЕКЛЮЧЕНИЕ ВНУТРИ КЛАССА иФНО-α НЕЭФФЕКТИВНО?
        </h1>
        <div
          className={
            getGlobClass('purple-block') + ' ' + getClass('block purple-block')
          }
        >
          <p>
            <b>
              Ограниченная эффективность второго и третьего ингибитора ФНО-α и
              переключение в рамках одного класса препаратов может приводить к
              длительной иммуносупрессии без существенных преимуществ
              <sup>1</sup>:
            </b>
            <br />
            <br />
            <ul>
              <li>
                меньшая вероятность клинического ответа на второй ингибитор
                ФНО-α;
              </li>
              <li>уменьшение возможности лечебного маневра в будущем;</li>
              <li>
                около 50% пациентов прекращают лечение третьим ингибитором ФНО-α
                в течение 13 месяцев.
              </li>
            </ul>
          </p>
        </div>
        <div
          className={
            getGlobClass('green-block') + ' ' + getClass('green-block')
          }
        >
          Преимущества переключения на ГИБП с другим механизмом действия при
          потере эффективности на первый иФНО-α расширяет возможности терапии в
          сравнении с переключением на другой иФНО-α<sup>2–4</sup>
        </div>
        <Button title='далее' onClick={next} className={getClass('button')} />
      </div>
      <Footer
        textClass={getClass('footer-text')}
        codeClass={getClass('footer-code')}
      >
        ГИБП – генно-инженерные биологические препараты, иФНО-α – ингибитор
        фактора некроза опухоли альфа 1. de Silva PS, et al. Aliment Pharmacol
        Ther 2012;36(5):459–466. 2. Cerpa Arencibia et al. ECCO 2020 #P679. 3..
        Rayer C, Roblin X, Laharie D, et al. Journal of Crohn's and Colitis,
        Volume 14, Issue Supplement_1, January 2020, Page S547,
        https://doi.org/10.1093/ecco-jcc/jjz203.793 4. Holzo P, et al.
        PharmacoEconomics 2018;36:853–865 доступно на:
        https://www.ncbi.nlm.nih.gov/pmc/articles/PMC5999163/
      </Footer>
    </Page>
  )
}
