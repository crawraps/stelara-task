import styles from '../styles/Home.module.css'

export default function Home(): JSX.Element {
  return (
    <>
      <div className={styles['heading']}>
        <div className={styles['heading-h']}>
          <h1>Выбираем оптимальную терапию</h1>
          <hr />
        </div>
        <p>
          Предлагаем Вам проверить себя и назначить пациенту необходимую
          терапию, учитывая жалобы и анамнез заболевания.
        </p>
      </div>
    </>
  )
}
