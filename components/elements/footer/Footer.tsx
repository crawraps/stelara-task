import { CSSProperties } from 'react'
import styles from './footer.module.css'

interface Props {
  codeStyle?: CSSProperties
  textStyle?: CSSProperties
  children: React.ReactNode
}

export default function Footer({
  codeStyle = {},
  textStyle = {},
  children,
}: Props): JSX.Element {
  return (
    <div className={styles.footer}>
      <p style={textStyle}>{children}</p>
      <span style={codeStyle}>СР-330488</span>
    </div>
  )
}
