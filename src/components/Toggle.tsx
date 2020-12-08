import { motion } from 'framer-motion'
import React, { useState } from 'react'

const Toggle: React.FC<{ question: string }> = ({ question, children }) => {
  const [toggle, setToggle] = useState(false)

  return (
    <motion.div layout onClick={() => setToggle((prevState) => !prevState)} className='question'>
      <motion.h4 layout>{question}</motion.h4>
      {toggle && children}
      <div className='faq-line' />
    </motion.div>
  )
}

export default Toggle
