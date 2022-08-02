import { getClassNames } from '../../Tablet'
import styles from './start.module.css'

interface Props {
  children: JSX.Element[] | JSX.Element
}

export default function StartPage({ children }: Props): JSX.Element {
  return <div className={getClassNames('page', styles)}>{children}</div>
}
