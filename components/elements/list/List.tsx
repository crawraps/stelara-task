import styles from './list.module.css'

interface Props {
  children: JSX.Element[]
}

export default function List({ children }: Props): JSX.Element {
  return <div className={styles.list}>{children}</div>
}
