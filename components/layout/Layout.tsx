import { SliderNext, SliderPrev } from '../elements/sliderButtons/SliderButton'
import { getClassNames } from '../Tablet'
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
  return (
    <div
      className={getClassNames(
        `layout ${page === 0 ? 'startPage' : ''}`,
        styles
      )}
    >
      <div className={getClassNames('container', styles)}>
        {children}
        <div className={getClassNames('navigation', styles)}>
          <SliderPrev onClick={prevPage} />
          <SliderNext onClick={nextPage} />
        </div>
      </div>
    </div>
  )
}
