import FooterLast from 'components/elements/footer-last/FooterLast'
import React from 'react'
import Page from '../page/Page'
import { PageProps } from '../page1/Page1'
import styles from './page17.module.css'
import TableDesktop from '/assets/table-desktop.svg'
import TableMobile from '/assets/table-mobile.svg'
import ArrowLeft from '/assets/slider-prev.svg'

interface Props extends PageProps {
  prev(): void
}

export default function Page17(props: Props): JSX.Element {
  return (
    <Page className={styles['page-17']}>
      <div className={styles.content}>
        <h1>
          Краткая инструкция по медицинскому применению препарата СТЕЛАРА
          ЛП-005728.
        </h1>
        <p>
          <b>
            Перед применением ознакомьтесь с полной версией инструкции. Торговое
            наименование препарата – Стелара (устекинумаб), концентрат для
            приготовления раствора для инфузий. Показания к применению. Болезнь
            Крона.
          </b>{' '}
          Препарат Стелара в лекарственной форме концентрат для приготовления
          раствора для инфузий предназначен для терапии взрослых пациентов с
          болезнью Крона умеренной и тяжелой степени. Препарат Стелара в
          лекарственной форме концентрат для приготовления раствора для инфузий
          предназначен для: индукции клинического ответа, индукции клинической
          ремиссии, достижения бесстероидной ремиссии, индукции эндоскопической
          ремиссии, улучшения связанного со здоровьем качества жизни, у взрослых
          пациентов с активной болезнью Крона умеренной и тяжелой степени, у
          которых: прогрессирование заболевания продолжалось на фоне терапии
          иммуномодуляторами или кортикостероидами, или была выявлена
          непереносимость этих препаратов, или наблюдалась зависимость от
          кортикостероидов, или прогрессирование заболевания продолжалось на
          фоне терапии одним или несколькими ингибиторами ФНО, или была выявлена
          непереносимость одного или нескольких ингибиторов ФНО.{' '}
          <b>Язвенный колит.</b>
          Лечение взрослых пациентов с активным язвенным колитом умеренной и
          тяжелой степени с неадекватным ответом, утратой ответа или
          непереносимостью стандартной или биологической терапии, или имеющих
          медицинские противопоказания к проведению такой терапии.
          <b>Противопоказания:</b> клинически значимая повышенная
          чувствительность к устекинумабу или любому вспомогательному веществу
          препарата; клинически значимая активная инфекция (например, активный
          туберкулез); детский возраст до 18 лет.{' '}
          <b>Способ применения и дозы. Болезнь Крона и язвенный колит.</b>{' '}
          Дозы.Пациентам с болезнью Крона или язвенным колитом рекомендовано
          однократное, инициирующее терапию внутривенное введение препарата
          Стелара в дозе, рассчитанной на основании массы тела (Таблица 1).
        </p>

        {props.isMobile ? (
          <TableMobile />
        ) : (
          <TableDesktop className={styles.table} />
        )}

        <p>
          Через 8 недель после введения инициирующей дозы препарат Стелара
          вводится подкожно в дозе 90 мг (первое подкожное введение). Для
          подкожного введения используется препарат Стелара в лекарственной
          форме раствор для подкожного введения. Информация о последующих
          подкожных введениях препарата указана в инструкции по медицинскому
          применению препарата Стелара, раствор для подкожного введения.{' '}
          <b>Способ применения.</b> Препарат Стелара, концентрат для
          приготовления раствора для инфузий, 130 мг, предназначен только для
          внутривенного инфузионного введения. Внутривенное инфузионное введение
          препарата Стелара должно проводиться только квалифицированными
          медицинскими работниками. <b>Побочное действие.</b> Инфекции и инвазии
          (инфекции верхних дыхательных путей, назофарингит, синусит, воспаление
          подкожной жировой клетчатки, одонтогенные инфекции, опоясывающий
          лишай, вирусные инфекции верхних дыхательных путей, вульвовагинальные
          грибковые инфекции), нарушения со стороны психики (депрессия),
          нарушения со стороны нервной системы (головокружение, головная боль),
          нарушения со стороны дыхательной системы, органов грудной клетки и
          средостения (орофарингеальная боль, заложенность носа), нарушения со
          стороны ЖКТ (диарея, тошнота, рвота), нарушения со стороны кожи и
          подкожной клетчатки (зуд, акне), нарушения со стороны
          опорно-двигательного аппарата и соединительной ткани (боль в спине,
          миалгия, артралгия), общие нарушения и реакции в месте введения
          препарата (усталость, эритема в месте введения, боль в месте введения,
          реакции в месте введения (в том числе, кровотечение, гематома,
          уплотнение, припухлость и зуд), астения).{' '}
          <b>Пострегистрационные сообщения.</b> Нарушения со стороны иммунной
          системы (реакции гиперчувствительности (в том числе сыпь, крапивница),
          серьезные реакции гиперчувствительности (в том числе анафилаксия и
          ангионевротический отек), инфекции и инвазии (инфекции нижних отделов
          дыхательных путей), нарушения со стороны дыхательной системы, органов
          грудной клетки и средостения (аллергический альвеолит, эозинофильная
          пневмония), нарушения со стороны кожи и подкожной клетчатки
          (пустулёзный псориаз, эритродермический псориаз, лейкоцитокластический
          васкулит). <b>Особые указания. Инфекции.</b> Препарат Стелара является
          селективным иммунодепрессантом, и потенциально может увеличивать риск
          возникновения инфекций и реактивации латентных инфекций. В ходе
          клинических исследований у пациентов, получавших препарат Стелара,
          наблюдались случаи возникновения серьезных бактериальных и вирусных
          инфекций. Препарат Стелара не следует применять у пациентов с
          клинически значимой активной инфекцией. Следует с осторожностью
          применять препарат Стелара у пациентов с хронической инфекцией или
          рецидивирующей инфекцией в анамнезе.
          <b>Злокачественные новообразования.</b> Препараты-иммунодепрессанты
          могут способствовать увеличению риска развития злокачественных
          новообразований. У некоторых пациентов, получавших препарат Стелара в
          рамках клинических исследований, наблюдалось развитие кожных и
          некожных злокачественных новообразований. Следует проявлять
          осторожность при назначении препарата Стелара пациентам со
          злокачественными новообразованиями в анамнезе, а также при
          рассмотрении возможности продолжения терапии препаратом Стелара у
          пациентов с диагностированными злокачественными новообразованиями.
          <b>Реакции гиперчувствительности.</b> В ходе пострегистрационного
          наблюдения были зарегистрированы серьезные реакции
          гиперчувствительности, включая анафилаксию и ангионевротический отек.{' '}
          <b>Вакцинация.</b> Не рекомендуется применять живые вирусные или живые
          бактериальные вакцины одновременно с препаратом Стелара.{' '}
          <b>Иммуносупрессия.</b> В исследованиях у пациентов с болезнью Крона и
          язвенным колитом совместное применение препарата Стелара с
          иммуномодуляторами (6-меркаптопурином, азатиоприном, метотрексатом)
          или с кортикостероидами не влияло на безопасность и эффективность
          препарата Стелара. <b>Иммунотерапия.</b> Безопасность и эффективность
          применения препарата Cтелара у пациентов, прошедших иммунотерапию
          аллергических заболеваний, не установлена.
        </p>
      </div>
      <FooterLast />
      <div className={styles['arrow-container']} onClick={props.prev}>
        <ArrowLeft />
      </div>
    </Page>
  )
}
