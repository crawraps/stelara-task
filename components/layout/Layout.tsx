import Footer from '../elements/footer/Footer'
import { getClassNames } from '../Tablet'
import styles from './layout.module.css'

interface Props {
  startPage: boolean
  children: JSX.Element
}

export default function Layout({ startPage, children }: Props): JSX.Element {
  return (
    <div
      className={getClassNames(
        `layout ${startPage ? 'startPage' : ''}`,
        styles
      )}
    >
      {children}
    </div>
  )
}
