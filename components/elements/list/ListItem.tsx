import { useClass } from 'components/Tablet'
import styles from './list.module.css'
import Arrow from '../../../assets/list-arrow.svg'
import React from 'react'

interface Props {
  title: string
  children: React.ReactNode
  subtitle?: string
}

export default function ListItem({
  title,
  children,
  subtitle,
}: Props): JSX.Element {
  const [showed, setShowed] = React.useState<boolean>(false)
  const toggleShowed = () => setShowed(!showed)
  const getClass = useClass(styles)

  return (
    <div className={getClass('item')}>
      <div onClick={toggleShowed} className={getClass('heading')}>
        <Arrow className={getClass('arrow')} />
        <h3>{title}</h3>
        {subtitle ? <h4>{subtitle}</h4> : null}
      </div>
      <div className={getClass(`body ${showed ? 'showed' : ''}`)}>
        {children}
      </div>
    </div>
  )
}
