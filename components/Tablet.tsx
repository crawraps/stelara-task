import React from 'react'
import Layout from './layout/Layout'

export default function Tablet(): JSX.Element {
  const [currentPage, setCurrentPage] = React.useState<number>(0)

  const nextPage = (): void => {
    setCurrentPage(currentPage + 1)
  }
  const prevPage = (): void => {
    if (currentPage < 0) setCurrentPage(currentPage - 1)
  }

  return (
    <Layout startPage={true}>
      <div></div>
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
