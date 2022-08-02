import NextSvg from 'assets/slider-next.svg'
import PrevSvg from 'assets/slider-prev.svg'
import styles from './sliderButton.module.css'
import { getClassNames } from '../../Tablet'

interface Props {
  onClick: () => void
}

export function SliderNext({ onClick }: Props) {
  return (
    <button onClick={onClick} className={getClassNames('button', styles)}>
      <NextSvg />
    </button>
  )
}

export function SliderPrev({ onClick }: Props) {
  return (
    <button onClick={onClick} className={getClassNames('button', styles)}>
      <PrevSvg />
    </button>
  )
}
