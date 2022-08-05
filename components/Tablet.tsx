import React from 'react'
import Background from './elements/background/Background'
import Layout from './layout/Layout'
import StartPage from './pages/start/StartPage'

export default function Tablet(): JSX.Element {
  const [currentPage, setCurrentPage] = React.useState<number>(0)

  const nextPage = (): void => {
    setCurrentPage(currentPage + 1)
  }
  const prevPage = (): void => {
    if (currentPage === 0) return
    setCurrentPage(currentPage - 1)
  }

  const slides = [<StartPage onClick={nextPage} />]

  return (
    <Layout page={currentPage} nextPage={nextPage} prevPage={prevPage}>
      <Background page={currentPage} />
      {slides[currentPage]}
    </Layout>
  )
}

// Function for quick access to styles
export function getClassNames(
  classNames: string,
  styles: { readonly [key: string]: string }
): string {
  return classNames
    .split(' ')
    .map(className => styles[className])
    .join(' ')
}
