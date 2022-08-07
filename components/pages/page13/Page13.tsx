import Button from 'components/elements/Button/Button'
import Footer from 'components/elements/footer/Footer'
import { useClass } from 'components/Tablet'
import React from 'react'
import Page from '../page/Page'
import { PageProps } from '../page1/Page1'
import styles from './page13.module.css'
import Arrow from '/assets/arrow-icon.svg'
import ArrowLeft from '/assets/arrow-thin-left.svg'
import ArrowDown from '/assets/arrow-down.svg'

export default function Page13(props: PageProps): JSX.Element {
  const getClass = useClass(styles)

  const [isBlocksHidden, setIsBlocksHidden] = React.useState([true, true, true])
  const toggleBlockHidden = (index: number) => {
    setIsBlocksHidden(
      isBlocksHidden.map((item, i) => (index === i ? !item : item))
    )
  }

  return (
    <Page className={getClass('page-13')}>
      <h2 className={getClass('pre-heading')}>
        ПОДХОДЫ К ВЕДЕНИЮ ПАЦИЕНТОВ С НЕЭФФЕКТИВНОСТЬЮ ПЕРВОГО ИФНО-α
      </h2>
      <h1 className={getClass('heading')}>
        КАКАЯ СТРАТЕГИЯ ЛУЧШЕ ПРИ НЕЭФФЕКТИВНОСТИ ПЕРВОГО иФНО-α
      </h1>
      {props.isMobile ? (
        <ArrowDown className={getClass('down')} />
      ) : (
        <div className={getClass('arrows')}>
          <ArrowLeft className={getClass('left')} />
          <ArrowLeft className={getClass('right')} />
        </div>
      )}
      <div className={getClass('blocks')}>
        <div className={getClass(`purple-block`)}>
          <div className={getClass('block-heading')}>
            <h3>Переключение на другой иФНО-α или устекинумаб при БК?</h3>
            {props.isMobile ? (
              <button
                className={getClass(`block-button`)}
                onClick={() => toggleBlockHidden(0)}
              >
                <Arrow
                  className={getClass(
                    ` ${isBlocksHidden[0] ? '' : 'reversed'}`
                  )}
                />
              </button>
            ) : null}
          </div>
          <p className={getClass(` ${isBlocksHidden[0] ? 'hidden' : ''}`)}>
            Переключение на УСТ после неэффективности первого иФНО-α связано с
            лучшими показателями клинической ремиссии и ответа в сравнении с
            переводом пациента на второй иФНО-α<sup>1</sup>
          </p>
        </div>
        <div className={getClass(`purple-block`)}>
          <div className={getClass('block-heading')}>
            <h3>Переключение на устекинумаб или ведолизумаб при БК?</h3>
            {props.isMobile ? (
              <button
                className={getClass(`block-button`)}
                onClick={() => toggleBlockHidden(1)}
              >
                <Arrow
                  className={getClass(
                    ` ${isBlocksHidden[1] ? '' : 'reversed'}`
                  )}
                />
              </button>
            ) : null}
          </div>
          <p className={getClass(` ${isBlocksHidden[1] ? 'hidden' : ''}`)}>
            Многоцентровое ретроспективное исследование: выживаемость на терапии
            УСТ была достоверно выше в сравнении с ВЕДО
            <br />
            <br />
            <span>
              (ОШ (УСТ vs. ВЕДО) = 2.36 [1.02–5.5], p = 0.04)<sup>2</sup>.
            </span>
          </p>
        </div>
        <div className={getClass(`green-block`)}>
          <p>
            Преимущества переключения на ГИБП с другим механизмом действия при
            потере эффективности на первый иФНО-α расширяет возможности терапии
            в сравнении с переключением на другой иФНО-α2–4
          </p>
          {props.isMobile ? (
            <button
              className={getClass(`block-button`)}
              onClick={() => toggleBlockHidden(2)}
            >
              <Arrow
                className={getClass(` ${isBlocksHidden[2] ? '' : 'reversed'}`)}
              />
            </button>
          ) : null}
        </div>
      </div>

      <Button
        title='далее'
        className={getClass('button')}
        onClick={props.next}
      />

      <Footer
        codeClass={getClass('footer-code')}
        textClass={getClass('footer-text')}
      >
        ОШ – отношение шансов, УСТ – устекинумаб, БК – болезнь Крона, ГИБП –
        генно-инженерные биологические препараты, иФНОа – ингибитор фактора
        некроза опухоли альфа 1.Cerpa Arencibia et al. ECCO 2020 #P679. 2..
        Rayer C, Roblin X, Laharie D, et al. Journal of Crohn's and Colitis,
        Volume 14, Issue Supplement_1, January 2020, Page S547,
        https://doi.org/10.1093/ecco-jcc/jjz203.793 3. Holzo P, et al.
        PharmacoEconomics 2018;36: 853–865 доступно на:
        https://www.ncbi.nlm.nih.gov/pmc/articles/PMC5999163/
      </Footer>
    </Page>
  )
}
