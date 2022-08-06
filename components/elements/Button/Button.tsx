import React from 'react'
import styles from './button.module.css'

interface Props {
  title: string
  style?: React.CSSProperties
  className?: string
  onClick?(): void
}

export default function Button({
  title,
  style,
  className,
  onClick,
}: Props): JSX.Element {
  return (
    <button
      className={styles.button + ' ' + className}
      style={style}
      onClick={onClick}
    >
      {title}
    </button>
  )
}
