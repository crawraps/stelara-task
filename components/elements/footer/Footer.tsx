import { CSSProperties } from 'react'
import styles from './footer.module.css'

interface Props {
  codeClass?: string
  textClass?: string
  children: React.ReactNode
}

export default function Footer({
  codeClass,
  textClass,
  children,
}: Props): JSX.Element {
  return (
    <div className={styles.footer}>
      <p className={textClass + ' ' + styles.text}>{children}</p>
      <span className={codeClass + ' ' + styles.code}>СР-330488</span>
    </div>
  )
}
