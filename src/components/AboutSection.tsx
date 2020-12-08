import { motion } from 'framer-motion'
import React from 'react'
import home1 from '../img/home1.png'

// Styles
import { StyledAbout, StyledDescription, StyledHide, StyledImageWrapper } from '../theme/styles'
import { fade, photoAnimation, titleAnimation } from './animation'
import Wave from './Wave'

const AboutSection = () => {
  return (
    <StyledAbout>
      <StyledDescription className='description'>
        <div className='title'>
          <StyledHide className='hide'>
            <motion.h2 variants={titleAnimation}>We work to make</motion.h2>
          </StyledHide>

          <StyledHide className='hide'>
            <motion.h2 variants={titleAnimation}>
              your <span>dreams</span>
            </motion.h2>
          </StyledHide>

          <StyledHide className='hide'>
            <motion.h2 variants={titleAnimation}>come true.</motion.h2>
          </StyledHide>
        </div>

        <motion.p variants={fade}>
          Contact us for any photography or videography ideas that you have. We have professionals
          with amazing skills
        </motion.p>

        <motion.button variants={fade}>Contact Us</motion.button>
      </StyledDescription>

      <StyledImageWrapper>
        <motion.img variants={photoAnimation} src={home1} alt='Home' />
      </StyledImageWrapper>

      <Wave />
    </StyledAbout>
  )
}

export default AboutSection
