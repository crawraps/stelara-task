import Layout from './layout/Layout'

export default function Tablet(): JSX.Element {
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
