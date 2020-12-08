import { AnimateSharedLayout } from 'framer-motion'
import React from 'react'
import styled from 'styled-components'
import { useScroll } from '../hooks/useScroll'

// Styles
import { StyledAbout } from '../theme/styles'
import { scrollReveal } from './animation'
import Toggle from './Toggle'

const questions = [
  {
    question: 'How do I start?',
    answer:
      'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptas suscipit magni distinctio saepe obcaecati ex.',
  },
  {
    question: 'Daily schedule.',
    answer:
      'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptas suscipit magni distinctio saepe obcaecati ex.',
  },
  {
    question: 'Different payment methods.',
    answer:
      'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptas suscipit magni distinctio saepe obcaecati ex.',
  },
  {
    question: 'What products do you offer?',
    answer:
      'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptas suscipit magni distinctio saepe obcaecati ex.',
  },
]

const FaqSection = () => {
  const { element, controls } = useScroll()

  return (
    <Faq variants={scrollReveal} animate={controls} initial='hidden' ref={element}>
      <h2>
        Any Questions <span>FAQ</span>
      </h2>
      <AnimateSharedLayout>
        {questions.map(({ answer, question }) => (
          <Toggle question={question} key={question}>
            <div className='answer'>
              <p>{answer}</p>
            </div>
          </Toggle>
        ))}
      </AnimateSharedLayout>
    </Faq>
  )
}

const Faq = styled(StyledAbout)`
  display: block;

  span {
    display: block;
  }

  h2 {
    padding-bottom: 2rem;
    font-weight: lighter;
  }

  .faq-line {
    background: #ccc;
    height: 0.2rem;
    margin: 2rem 0;
    width: 100%;
  }

  .question {
    padding: 3rem 0;
    cursor: pointer;
  }

  .answer {
    padding: 2rem 0;
    p {
      padding: 1rem 0;
    }
  }
`

export default FaqSection
