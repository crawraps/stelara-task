import { useClass, Quest } from 'components/Tablet'
import React, { useEffect } from 'react'
import Button from '../Button/Button'
import styles from './quiz.module.css'

interface Props {
  heading: string
  mobileHeading: string
  next(): void
  quest: Quest
  questNumber: number
  className?: string
  headingClass?: string
  answerClass?: string
  buttonClass?: string
  ans: number[]
  setAns(ans: number[]): void
}

export default function Quiz(props: Props): JSX.Element {
  const getClass = useClass(styles)
  const [choosed, setChoosed] = React.useState<boolean[]>(
    new Array(props.quest.answers.length).fill(false)
  )
  const toggleChoose = (i: number) => {
    if (props.ans.length !== 0) return
    const arr = [...choosed]
    arr[i] = !arr[i]
    setChoosed(arr)
  }

  const [submited, setSubmited] = React.useState(false)

  const [viewed, setViewed] = React.useState<boolean[]>(choosed)
  const submit = () => {
    if (choosed.every(el => !el)) return
    setViewed(choosed)
    setSubmited(true)
  }

  const [isMobile, setIsMobile] = React.useState(window.innerWidth < 600)
  const winodwResizeHandler = () => {
    setIsMobile(window.innerWidth < 600)
  }
  useEffect(() => {
    window.addEventListener('resize', winodwResizeHandler)
    return () => window.removeEventListener('resize', winodwResizeHandler)
  })

  return (
    <div className={getClass('container') + ' ' + props.className}>
      <h1 className={getClass('heading') + ' ' + props.headingClass}>
        {!isMobile ? <span>1/{props.questNumber + 1} </span> : null}
        {isMobile ? props.mobileHeading : props.heading}
      </h1>
      {props.quest.answers.map((ans, index) => (
        <button
          className={
            getClass(
              `answer ${choosed[index] ? 'choosed' : ''} ${
                viewed[index]
                  ? props.quest.correct.includes(index)
                    ? 'correct'
                    : 'wrong'
                  : ''
              }`
            ) +
            ' ' +
            props.answerClass
          }
          key={ans}
          data-number={index + 1}
          onClick={() => (submited ? null : toggleChoose(index))}
        >
          {ans}
        </button>
      ))}
      <Button
        title={submited ? 'Далее' : 'Ответить'}
        onClick={submited ? props.next : submit}
        className={props.buttonClass}
      />
    </div>
  )
}
