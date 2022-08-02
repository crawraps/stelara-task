import { getClassNames } from '../../Tablet'
import styles from './background.module.css'
import BackgroundSvg from 'assets/background-image.svg'

interface Props {
  page: number
}

export default function Background({ page }: Props): JSX.Element {
  return (
    <div className={getClassNames(`background page-${page}`, styles)}>
      <BackgroundSvg />
    </div>
  )
}
