import { SliderNext, SliderPrev } from '../elements/sliderButtons/SliderButton'
import { getClassNames } from '../Tablet'
import styles from './layout.module.css'

interface Props {
  startPage: boolean
  nextPage: () => void
  prevPage: () => void
  children: JSX.Element
}

export default function Layout({
  startPage,
  children,
  nextPage,
  prevPage,
}: Props): JSX.Element {
  return (
    <div
      className={getClassNames(
        `layout ${startPage ? 'startPage' : ''}`,
        styles
      )}
    >
      {children}

      <div className={getClassNames('navigation', styles)}>
        <SliderPrev onClick={prevPage} />
        <SliderNext onClick={nextPage} />
      </div>
    </div>
  )
}
