import { useClass } from 'components/Tablet'
import React from 'react'
import Page from '../page/Page'
import { PageProps } from '../page1/Page1'
import styles from './page11.module.css'
import cellImage from '/assets/cell-icon.png'
import Image from 'next/image'
import FlatArrow from '/assets/flat-arrow-icon.svg'
import Arrow from '/assets/arrow-icon.svg'
import Footer from 'components/elements/footer/Footer'
import Button from 'components/elements/Button/Button'

export default function Page11(props: PageProps): JSX.Element {
  const getClass = useClass(styles)

  const cells = [
    'длительный эффект',
    'редкое ввеление',
    'Минимизация риска класс-специфических нежелательных явлений',
    'Более высокая «выживаемость» терапии устекинумабом по сравнению с другими ГИБП (ингибиторами ФНО-α и ведолизумабом) у пациентов с БК',
    'Устекинумаб ингибирует выработку цитокинов Th1,2 и Th17, влияя на ключевые звенья патогенеза внекишечных проявлений ВЗК',
    'Устекинумаб демонстрирует клиническую эффективность как на ранней, так и на поздних стадиях БК',
  ]

  const blocks = [
    {
      heading: 'Перевод на другой ГИБП',
      body: 'При недостаточной эффективности ГИБП перевод пациента на другой ГИБП может быть осуществлен без перерыва во время запланированного введения предыдущего ГИБП',
    },
    {
      heading: 'Использование доз',
      body: 'Дозы индукционного и поддерживающего периодов терапии должны использоваться согласно инструкции по медицинскому применению препарата',
    },
  ]

  const [isMobile, setIsMobile] = React.useState(window.innerWidth < 600)
  const winodwResizeHandler = () => {
    setIsMobile(window.innerWidth < 600)
  }
  React.useEffect(() => {
    window.addEventListener('resize', winodwResizeHandler)
    return () => window.removeEventListener('resize', winodwResizeHandler)
  })

  const [isTableShowed, setIsTableShowed] = React.useState(false)
  const toggleTable = () => {
    setIsTableShowed(!isTableShowed)
  }

  const [isBlocksHidden, setIsBlocksHidden] = React.useState([true, true, true])
  const toggleBlockHidden = (index: number) => {
    setIsBlocksHidden(
      isBlocksHidden.map((item, i) => (index === i ? !item : item))
    )
  }

  return (
    <Page className={getClass('page-11')}>
      <h2 className={getClass('pre-heading')}>
        КРИТЕРИИ ВЫБОРА УСТЕКИНУМАБА ПРИ ВЗК
      </h2>
      <h1 className={styles.heading}>Отличия ингибиторов ИЛ-12/23 при ВЗК</h1>
      <div className={styles.blocks}>
        <div
          className={getClass(`table block ${isTableShowed ? '' : 'hidden'}`)}
        >
          {cells.map((text, index) => (
            <div
              className={getClass(
                `cell ${index < 3 ? 'cell-bold' : ''} ${
                  index < 2 ? 'cell-mobile-wide' : ''
                }`
              )}
              key={text}
            >
              <span className={styles.icon}>
                <Image src={cellImage} alt='ok' />
              </span>
              <span className={styles.text}>{text}</span>
            </div>
          ))}
          {isMobile ? (
            <button className={getClass(`table-button`)} onClick={toggleTable}>
              <FlatArrow
                className={getClass(`${isTableShowed ? 'reverse' : ''}`)}
              />
            </button>
          ) : null}
        </div>

        {blocks.map((item, index) => (
          <div className={getClass(`block block-${index + 1}`)} key={index}>
            <div className={getClass('block-heading')}>
              <span className={getClass('icon')}>
                <Image src={cellImage} />
              </span>
              <h1>{item.heading}</h1>
              {isMobile ? (
                <button
                  className={getClass(`block-button`)}
                  onClick={() => toggleBlockHidden(index)}
                >
                  <Arrow
                    className={getClass(
                      ` ${isBlocksHidden[index] ? '' : 'reversed'}`
                    )}
                  />
                </button>
              ) : null}
            </div>
            <p className={getClass(`${isBlocksHidden[index] ? 'hidden' : ''}`)}>
              {item.body}
            </p>
          </div>
        ))}
      </div>

      <Button
        title='далее'
        className={getClass('button')}
        onClick={props.next}
      />

      <Footer
        textClass={getClass('footer-text')}
        codeClass={getClass('footer-code')}
      >
        ВЗК - воспалительные заболевания кишечника; ГИБП – генно-инженерные
        биологические препараты; ФНО-α – фактор некроза опухоли альфа; ИЛ –
        интерлейкины; ЖКТ – желудочно-кишечный тракт; БК– болезнь Крона 1
        .Абдулганиева Д. И. и др. Проект междисциплинарных рекомендаций по
        диагностике, методам оценки степени активности воспалительного процесса,
        терапевтической эффективности и применению генно-инженерных
        биологических препаратов у пациентов с сочетанными иммуновоспалительными
        заболеваниями (псориаз, псориатический артрит, болезнь Крона) //
        Альманах клинической медицины. 2018. 2. Абдулганиева Д. И. и др. Раннее
        назначение генно-инженерных биологических препаратов при
        иммуновоспалительных заболеваниях: возможности и перспективы. Позиция
        экспертов // Современная Ревматология. 2020. Т. 14. № 3. Макарчук П.А.,
        Ломакина Е.Ю., Белоусова Е.А. Опыт применения устекинумаба у пациентов с
        болезнью Крона с внекишечными проявлениями (псориаз). Медицинский совет.
        2020;(15):121–126. doi: 10.21518/2079-701X-2020-15-121-126.
      </Footer>
    </Page>
  )
}
