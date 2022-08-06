import Button from 'components/elements/Button/Button'
import { useClass } from '../../Tablet'
import styles from './start.module.css'

interface Props {
  onClick(): void
}

export default function StartPage({ onClick }: Props): JSX.Element {
  const getClass = useClass(styles)
  return <div className={getClass('page')} onClick={onClick} />
}
