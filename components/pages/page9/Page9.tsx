import React from 'react'
import { useClass } from 'components/Tablet'
import Page from '../page/Page'
import styles from './page9.module.css'
import Arrow from '/assets/arrow-icon.svg'
import { PageProps } from '../page1/Page1'
import Button from 'components/elements/Button/Button'
import Footer from 'components/elements/footer/Footer'

export default function Page9(props: PageProps): JSX.Element {
  const getClass = useClass(styles)

  const [isBlocksHidden, setIsBlocksHidden] = React.useState([true, true])
  const toggleBlockHidden = (index: number) => {
    setIsBlocksHidden(
      isBlocksHidden.map((item, i) => (index === i ? !item : item))
    )
  }

  return (
    <Page className={getClass('page-9')}>
      <h2 className={getClass('pre-heading')}>
        особенности механизма действия ведолизумаба и янус-киназ обуславливают:
      </h2>
      <div className={styles.blocks}>
        <div
          className={
            getClass('block block-1') + ' ' + props.getGlobClass('purple-block')
          }
        >
          <div className={getClass('block-heading')}>
            <h1>
              {isBlocksHidden[0]
                ? 'Терапия ведолизубамом'
                : `
                Терапия препаратом класса ингибиторов α4β7-интегринов
                (ведолизумаб)
                `}
            </h1>
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
          <ul className={getClass(`${isBlocksHidden[0] ? 'hidden' : ''}`)}>
            <li>
              Частота гастроэнтеритов в группе <b>ведолизумаба</b> и плацебо
              составила 3,7 на 100 и 0 на 100 пациенто-лет соответственно у
              пациентов с ЯК и 4,2 на 100 и 2,3 на 100 пациенто-лет у пациентов
              с БК.{' '}
            </li>
            <li>
              Частота{' '}
              <b>клостридиальных инфекций (вкл. Clostridium difficile)</b> на
              терапии ведолизумабом выше в сравнении с группой плацебо.
            </li>
            <li>
              Ведолизумаб имеет{' '}
              <b>селективное действие преимущественно в ЖКТ</b>, характеризуется
              недостаточной эффективностью при ВЗК с внекишечными проявлениями.
            </li>
          </ul>
        </div>
        <div
          className={
            getClass('block block-2') + ' ' + props.getGlobClass('purple-block')
          }
        >
          <div className={getClass('block-heading')}>
            <h1>
              {isBlocksHidden[1]
                ? 'Терапия препаратом из класса янус-киназ (тофацитиниб)'
                : `
                    Терапия препаратом класса ингибиторы янус-киназ (тофацитиниб)
                `}
            </h1>
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
          <ul className={getClass(`${isBlocksHidden[1] ? 'hidden' : ''}`)}>
            <li>
              Обуславливает <b>изменение липидного спектра крови</b> (повышение
              общего холестерина, липопротеидов низкой плотности),{' '}
              <b>креатинфосфокиназы</b>, что может повышать риск
              сердечно-сосудистых осложнений.
            </li>
            <li>
              Повышает риск реактивации вируса <b>Herpes zoster (HZV).</b>
            </li>
            <li>
              Характеризуется <b>дозозависимым</b> риском инфекций.
            </li>
          </ul>
        </div>
      </div>
      <Button
        title='далее'
        onClick={props.next}
        className={getClass('button')}
      />
      <Footer
        textClass={getClass('footer-text')}
        codeClass={getClass('footer-code')}
      >
        ЖКТ – желудочно-кишечный тракт; БК – болезнь Крона; ЯК – язвенный колит;
        ГКС – глюкокортикостероид. 1. Click B., Regueiro M. Curr. Gastroenterol.
        Rep. 2019 Jan 11; 21 (2): 1. DOI: 10.1007/s11894-019-0669-6. 2. Colombel
        J.F., Sands B.E., Rutgeerts P., Sandborn W., Danese S., D'Haens G., et
        al. The safety of vedolizumab for ulcerative colitis and Crohn’s
        disease. Gut. 2017; 66 (5): 839–51 3. Sandborn WJ, et al. N Engl J Med
        2017;376:1723–1736. Sandborn W. et al. UEGW 2017. Abstract OP 353 4. Kim
        et al. DDW 2018. Sa1696. Электронный ресурс 21.02.2019
        https://ddw.org/education/abstracts. 5. Dubinsky M.C., Cross R.K., MD,
        Sandborn W.J., Long M. et. al., Extraintestinal Manifestations in
        Vedolizumab and Anti-TNF-Treated Patients With Inflammatory Bowel
        Disease., Inflamm Bowel Dis; V. 00, N. 00, Month 2018.
      </Footer>
    </Page>
  )
}
