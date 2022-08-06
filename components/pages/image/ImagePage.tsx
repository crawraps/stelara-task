import Image, { StaticImageData } from 'next/image'
import React from 'react'
import styles from './imagePage.module.css'

interface Props {
  className?: string
  imageWidth: number
  imageClass?: string
  src: StaticImageData
  children: JSX.Element | JSX.Element[]
}

export default function ImagePage({
  className,
  imageWidth,
  src,
  children,
  imageClass,
}: Props): JSX.Element {
  return (
    <div className={className + ' ' + styles.page}>
      <span
        className={styles.image + ' ' + imageClass}
        style={{
          width: `${imageWidth}%`,
        }}
      >
        <Image src={src} />
      </span>
      {children}
    </div>
  )
}
