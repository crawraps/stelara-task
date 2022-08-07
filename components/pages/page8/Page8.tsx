import Button from 'components/elements/Button/Button'
import Footer from 'components/elements/footer/Footer'
import { useClass } from 'components/Tablet'
import Image from 'next/image'
import React from 'react'
import Page from '../page/Page'
import { PageProps } from '../page1/Page1'
import styles from './page8.module.css'
import cellImage from '/assets/cell-icon.png'
import excl from '/assets/excl-icon.png'
import FlatArrow from '/assets/flat-arrow-icon.svg'
import Arrow from '/assets/arrow-icon.svg'

export default function Page8(props: PageProps): JSX.Element {
  const desktopCells = [
    'Клиническую форму заболевания',
    'Режим дозирования, способ введения препарата',
    'Иммуногенность',
    'Скорость наступления терапевтического эффекта',
    'Возможность длительного применения препарата (потенциальная «выживаемость» или ожидаемая устойчивость эффекта терапии)',
    'Возможность применения комбинированной или монотерапии ГИБП',
    'Планирование беременности',
    'Стоимость',
    'Доступность',
    'Предпочтения пациента',
  ]
  const mobileCells = [...desktopCells]
  mobileCells[1] = desktopCells[2]
  mobileCells[2] = desktopCells[1]

  const blocks = [
    {
      heading: `
              Наличие сопутствующих заболеваний, течение которых может
              ухудшиться на фоне применения стандартной терапии
            `,
      body: `(например, сахарный диабет, кардиоваскулярные заболевания, патология
            верхних отделов ЖКТ, почек, печени, метаболические нарушения,
            онкологические заболевания, депрессия и др.)`,
    },
    {
      heading: `Наличие сопутствующих вирусных и инфекционных заболеваний`,
      body: `(например, герпетическая, цитомегаловирусная инфекции, вирусные гепатиты, латентный туберкулез и др.)`,
    },
    {
      heading: `ухудшиться на фоне применения стандартной терапии`,
      body: `(например, ВЗК, увеит)`,
    },
  ]
  const getClass = useClass(styles)

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
    <Page className={getClass('page-8')}>
      <h2 className={getClass('pre-heading')}>
        Факторы, влияющие на выбор ГИБП
      </h2>
      <h1 className={styles.heading}>При выборе ГИБП необходимо учитывать</h1>
      <div className={styles.blocks}>
        <div
          className={getClass(`table block ${isTableShowed ? '' : 'hidden'}`)}
        >
          {(props.isMobile ? mobileCells : desktopCells).map((text, index) => (
            <div
              className={getClass(
                `cell ${index === 4 || index === 5 ? 'wide' : ''}`
              )}
              key={text}
            >
              <span className={styles.icon}>
                <Image src={cellImage} alt='ok' />
              </span>
              <span className={styles.text}>{text}</span>
            </div>
          ))}
          {props.isMobile ? (
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
              <span className={getClass('excl')}>
                <Image src={excl} height={40} width={9.82} />
              </span>
              <h1>{item.heading}</h1>
              {props.isMobile ? (
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

      <Button title='далее' className={styles.button} onClick={props.next} />

      <Footer
        textClass={getClass('footer-text')}
        codeClass={getClass('footer-code')}
      >
        ГИБП – генно-инженерные биологические препараты; ВЗК – воспалительные
        заболевания кишечника, ЖКТ – желудочно-кишечный тракт <br /> 1.
        Абдулганиева Д. И. и др. Проект междисциплинарных рекомендаций по
        диагностике, методам оценки степени активности воспалительного процесса,
        терапевтической эффективности и применению генно-инженерных
        биологических препаратов у пациентов с сочетанными иммуновоспалительными
        заболеваниями (псориаз, псориатический артрит, болезнь Крона) //
        Альманах клинической медицины. 2018.
      </Footer>
    </Page>
  )
}
