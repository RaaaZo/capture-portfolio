import React from 'react'
import styled from 'styled-components'

interface Props {
  title: string
  description: string
}

const Award: React.FC<Props> = ({ title, description }) => {
  return (
    <StyledAward>
      <h3>{title}</h3>
      <div className='line'></div>
      <p>{description}</p>
    </StyledAward>
  )
}

const StyledAward = styled.div`
  padding: 5rem;

  h3 {
    font-size: 1.6rem;
  }

  .line {
    width: 90%;
    background-color: #23d997;
    height: 0.5rem;
    margin: 1.5rem 0;
  }
`

export default Award
