import React from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'
import { movieState } from '../data/movies'

// Page transition
import { motion } from 'framer-motion'
import {
  pageAnimation,
  fade,
  photoAnimation,
  lineAnimation,
  slider,
  sliderContainer,
} from '../components/animation'

const OurWork = () => {
  return (
    <StylesWork
      variants={pageAnimation}
      initial='hidden'
      animate='show'
      exit='exit'
      style={{ backgroundColor: '#fff' }}
    >
      <motion.div variants={sliderContainer}>
        <Frame1 variants={slider}> </Frame1>
        <Frame2 variants={slider}> </Frame2>
        <Frame3 variants={slider}> </Frame3>
        <Frame4 variants={slider}> </Frame4>
      </motion.div>
      {movieState.map(({ title, mainImg, url }) => (
        <StyledMovie key={title}>
          <motion.h2 variants={fade}>{title}</motion.h2>
          <motion.div variants={lineAnimation} className='line' />
          <Link to={url}>
            <Hide>
              <motion.img variants={photoAnimation} src={mainImg} alt={title} />
            </Hide>
          </Link>
        </StyledMovie>
      ))}
    </StylesWork>
  )
}

const StylesWork = styled(motion.div)`
  min-height: 100vh;
  overflow: hidden;
  padding: 5rem 10rem;

  @media (max-width: 1300px) {
    padding: 2rem;
  }

  h2 {
    padding: 1rem 0;
  }
`

const StyledMovie = styled.div`
  padding-bottom: 10rem;

  .line {
    height: 0.5rem;
    background: #23d997;
    margin-bottom: 3rem;
  }

  img {
    width: 100%;
    height: 70vh;
    object-fit: cover;
  }
`

const Hide = styled.div`
  overflow: hidden;
`

const Frame1 = styled(motion.div)`
  position: fixed;
  left: 0;
  top: 10%;
  width: 100%;
  height: 100vh;
  background: #fffebf;
  z-index: 2;
`

const Frame2 = styled(Frame1)`
  background: #ff8efb;
`

const Frame3 = styled(Frame1)`
  background: #8ed2ff;
`

const Frame4 = styled(Frame1)`
  background: #8effa0;
`

export default OurWork
