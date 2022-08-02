import { CSSProperties } from 'react'
import { getClassNames } from '../../Tablet'
import styles from './footer.module.css'

interface Props {
  codeStyle?: CSSProperties
  textStyle?: CSSProperties
  children: string
}

export default function Footer({
  codeStyle = {},
  textStyle = {},
  children,
}: Props): JSX.Element {
  return (
    <div className={getClassNames('footer', styles)}>
      <p style={textStyle}>{children}</p>
      <span style={codeStyle}>СР-330488</span>
    </div>
  )
}
