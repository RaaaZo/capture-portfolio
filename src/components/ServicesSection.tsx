import React from 'react'

// Icons
import clock from '../img/clock.svg'
import diaphragm from '../img/diaphragm.svg'
import money from '../img/money.svg'
import teamwork from '../img/teamwork.svg'

// Images
import home from '../img/home2.png'

// Styles
import { StyledAbout, StyledDescription, StyledImageWrapper } from '../theme/styles'
import styled from 'styled-components'

// Animations
import { scrollReveal } from './animation'
import { useScroll } from '../hooks/useScroll'

const cards = [
  {
    image: clock,
    name: 'Efficient',
    txt: 'Lorem ipsum dolor sit amet.',
  },
  {
    image: diaphragm,
    name: 'Diaphragm',
    txt: 'Lorem ipsum dolor sit amet.',
  },
  {
    image: money,
    name: 'Affordable',
    txt: 'Lorem ipsum dolor sit amet.',
  },
  {
    image: teamwork,
    name: 'Teamwork',
    txt: 'Lorem ipsum dolor sit amet.',
  },
]

const ServicesSection = () => {
  const { element, controls } = useScroll()

  return (
    <StyledServices variants={scrollReveal} animate={controls} initial='hidden' ref={element}>
      <StyledDescription>
        <h2>
          High <span>Quality</span> services
        </h2>

        <StyledCards>
          {cards.map((card) => (
            <StyledCard key={card.name} className='card'>
              <div className='icon'>
                <img src={card.image} alt='card' />
                <h3>{card.name}</h3>
              </div>
              <p>{card.txt}</p>
            </StyledCard>
          ))}
        </StyledCards>
      </StyledDescription>
      <StyledImageWrapper>
        <img src={home} alt='Services' />
      </StyledImageWrapper>
    </StyledServices>
  )
}

const StyledServices = styled(StyledAbout)`
  h2 {
    padding-bottom: 5rem;
  }

  p {
    width: 70%;
    padding: 2rem 0 4rem 0;
  }
`

const StyledCards = styled.div`
  display: flex;
  flex-wrap: wrap;

  @media (max-width: 1200px) {
    justify-content: center;
  }
`

const StyledCard = styled.div`
  flex-basis: 20rem;

  .icon {
    display: flex;
    align-items: center;
  }

  h3 {
    margin-left: 1rem;
    background: #fff;
    color: #000;
    padding: 1rem;
  }
`

export default ServicesSection
