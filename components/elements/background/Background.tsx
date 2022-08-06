import { useClass } from '../../Tablet'
import styles from './background.module.css'
import BackgroundSvg from 'assets/background-image.svg'

interface Props {
  page: number
}

export default function Background({ page }: Props): JSX.Element {
  const getClass = useClass(styles)
  return (
    <div className={getClass(`background page-${page}`)}>
      <BackgroundSvg />
    </div>
  )
}
