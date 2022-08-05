import Button from 'components/elements/Button/Button'
import { getClassNames } from '../../Tablet'
import styles from './start.module.css'

interface Props {
  onClick(): void
}

export default function StartPage({ onClick }: Props): JSX.Element {
  return <div className={getClassNames('page', styles)} onClick={onClick} />
}
