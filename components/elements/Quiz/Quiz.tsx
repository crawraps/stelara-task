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

  const choosedDefault = new Array(props.quest.answers.length).fill(false)
  if (props.ans.length !== 0) {
    props.ans.forEach(a => (choosedDefault[a] = true))
  }

  const [choosed, setChoosed] = React.useState<boolean[]>(choosedDefault)
  const toggleChoose = (i: number) => {
    if (props.ans.length !== 0) return
    const arr = [...choosed]
    arr[i] = !arr[i]
    setChoosed(arr)
  }

  const [viewed, setViewed] = React.useState<boolean[]>(choosed)
  const submit = () => {
    if (choosed.every(el => !el)) return
    setViewed(choosed)
    props.setAns(
      choosed.map((c, i) => (c ? i : null)).filter(c => !c) as number[]
    )
    if (choosedDefault.every(item => !item)) {
      setTimeout(() => props.next(), 500)
    } else {
      props.next()
    }
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
          onClick={() => toggleChoose(index)}
        >
          {ans}
        </button>
      ))}
      <Button
        title={choosedDefault.every(item => !item) ? 'Ответить' : 'Далее'}
        onClick={submit}
        className={props.buttonClass}
      />
    </div>
  )
}
