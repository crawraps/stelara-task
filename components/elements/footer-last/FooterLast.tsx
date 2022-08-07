import Image from 'next/image'
import styles from './footerLast.module.css'
import logo from '/assets/company-logo.png'
import qr from '/assets/qr-code.png'

export default function FooterLast(): JSX.Element {
  return (
    <div className={styles.container}>
      <div className={styles.company}>
        <span>
          <Image src={logo} />
        </span>
      </div>
      <div className={styles.text}>
        <span className={styles.underlined} style={{ marginBottom: '1em' }}>
          Краткая инструкция по медицинскому применению препарата Стелара
        </span>
        <span style={{ marginBottom: '1em' }}>
          Материал предназначен для медицинских (фармацевтических) работников
        </span>
        <span>
          ООО «Джонсон и Джонсон»
          <br /> 121614, г. Москва, ул. Крылатская, д. 17, корп. 2 <br /> Тел.:
          +7 495 755-83-57, факс: +7-495-755-83-58 <br /> Дата подготовки
          материала – июль 2022
        </span>
      </div>
      <div className={styles.links}>
        <span className={styles.qr}>
          <Image src={qr} />
        </span>
        <span>CP-330488</span>
      </div>
    </div>
  )
}
