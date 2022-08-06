import { SliderNext, SliderPrev } from '../elements/sliderButtons/SliderButton'
import { useClass } from '../Tablet'
import styles from './layout.module.css'

interface Props {
  page: number
  nextPage: () => void
  prevPage: () => void
  children: JSX.Element | JSX.Element[]
}

export default function Layout({
  page,
  children,
  nextPage,
  prevPage,
}: Props): JSX.Element {
  const getClass = useClass(styles)
  return (
    <div className={getClass(`layout ${page === 0 ? 'startPage' : ''}`)}>
      <div className={getClass('container')}>
        {children}
        <div className={getClass('navigation')}>
          <SliderPrev onClick={prevPage} />
          <SliderNext onClick={nextPage} />
        </div>
      </div>
    </div>
  )
}
