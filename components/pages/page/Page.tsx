import Image, { StaticImageData } from 'next/image'
import React from 'react'
import styles from './page.module.css'

interface Props {
  className?: string
  image?: boolean
  imageWidth?: number
  imageClass?: string
  src?: StaticImageData
  children: JSX.Element | JSX.Element[]
}

export default function Page({
  className,
  image = false,
  imageWidth,
  src,
  children,
  imageClass,
}: Props): JSX.Element {
  return (
    <div className={className + ' ' + styles.page}>
      {image ? (
        <span
          className={styles.image + ' ' + imageClass}
          style={{
            width: `${imageWidth}%`,
          }}
        >
          <Image src={src ?? ''} />
        </span>
      ) : null}
      {children}
    </div>
  )
}
