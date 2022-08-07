import Button from 'components/elements/Button/Button'
import Footer from 'components/elements/footer/Footer'
import { useClass } from 'components/Tablet'
import Page from '../page/Page'
import { PageProps } from '../page1/Page1'
import styles from './page3.module.css'

export default function Page3({ getGlobClass, next }: PageProps): JSX.Element {
  const getClass = useClass(styles)
  return (
    <Page className={getClass('page-3')}>
      <div className={getClass('blocks')}>
        <h1 className={getGlobClass('heading') + ' ' + styles.heading}>
          ПОЧЕМУ ТЕРАПИЯ ГИБП КЛАССА иФНО-α ОКАЗАЛАСЬ НЕЭФФЕКТИВНОЙ?
        </h1>
        <div
          className={
            getGlobClass('purple-block') + ' ' + getClass('block purple-block')
          }
        >
          <p>
            <b>Цели терапии язвенного колита у пациента не достигнуты</b> —
            через 8 месяцев после назначения ГИБП не достигнута клиническая
            ремиссия
            <sup>1-6</sup>:
            <ul>
              <li>учащенный стул до 5-6 раз в сутки;</li>
              <li>кровь в стуле.</li>
            </ul>
            <b>По частичной шкале Мейо у пациента сумма баллов — 7</b>, общее
            состояние средней тяжести, что соответствует средне тяжелой атаке ЯК
            <sup>1-6</sup>.
            <br />
            <b>По результатам лабораторных исследований</b> нарастание
            воспалительных маркеров, признаки анемии: СРБ – 12 мг/л ,
            кальпротектин – 1250 мг/кг, гемоглобин – 94 г/л.
            <br />
            <b>При проведении колоноскопии</b> — контактная кровоточивость,
            эрозии слизистой оболочки прямой и нисходящей ободочной кишки.
          </p>
        </div>
        <div
          className={
            getGlobClass('green-block') + ' ' + getClass('green-block')
          }
        >
          Клинический ответ на первый ингибитор ФНО-α снижается с течением
          времени
          <sup>7</sup>: <br />~ 20% теряют ответ в течение 12 месяцев
          <sup>7</sup> <br />
          {'>'} 60% пациентов с ЯК и {'>'} 50% пациентов с болезнью Крона имеют
          минимум 1 показатель недостаточной эффективности через 2 года терапии
          <sup>8,9</sup>
        </div>
        <Button title='далее' onClick={next} className={getClass('button')} />
      </div>
      <Footer
        textClass={getClass('footer-text')}
        codeClass={getClass('footer-code')}
      >
        ВЗК – воспалительные заболевания кишечника, ГИБП – генно-инженерные
        биологические препараты, ЯК – язвенный колит, иФНО-а – ингибитор фактора
        некроза опухоли альфа
        <br />
        1. Schroeder KW et al. N Engl J Med 1987; 317: 1625–1629; 2. D’Haens G
        et al. Gastroenterology 2007; 132: 763–786; 3. Sands BE et al. /N Engl J
        Med 2019; 381: 1204–1214; 4. Dhanda AD et al. Inflamm Bowel Dis 2012;
        18: 2056–2062; 5. IG-IBD. Partial Mayo. Available at:
        https://www.igibdscores.it/en/info-mayo-partial.html (Accessed January
        2021); 6. IG-IBD. Full Mayo. Available at:
        https://www.igibdscores.it/en/info-mayo-full.html (Accessed January
        2021);7.Hanauer et al. Lancet. 2002;359:1541-9; 8.Lindsay JO et al.
        United European Gastroenterol J. 2015;3(suppl):A427, abstr P0963;
        9.Armuzzi A et al. United European Gastroenterol J. 2015;3(suppl):A246,
        abstr P0346;
      </Footer>
    </Page>
  )
}
