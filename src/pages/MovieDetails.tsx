import React, { useEffect, useState } from 'react'
import { useLocation } from 'react-router-dom'
import styled from 'styled-components'
import Award from '../components/Award'
import { movieState } from '../data/movies'

// Page transition
import { motion } from 'framer-motion'
import { pageAnimation } from '../components/animation'

interface Movies {
  title: string
  mainImg: string
  secondaryImg: string
  url: string
  awards: {
    title: string
    description: string
  }[]
}

interface Movie {
  title: string
  mainImg: string
  secondaryImg: string
  url: string
  awards: {
    title: string
    description: string
  }[]
}

const MovieDetails = () => {
  const { pathname } = useLocation()

  const [movies, setMovies] = useState<Movies[]>(movieState)
  const [movie, setMovie] = useState<Movie | null>(null)

  useEffect(() => {
    const currentMovie = movies.find((movie) => movie.url === pathname)!
    setMovie(currentMovie)
  }, [pathname, movies])

  return (
    <>
      {movie && (
        <StyledDetails variants={pageAnimation} initial='hidden' animate='show' exit='exit'>
          <StyledHeadLine>
            <h2>{movie.title}</h2>
            <img src={movie.mainImg} alt={movie.title} />
          </StyledHeadLine>
          <StyledAwards>
            {movie.awards.map((award) => (
              <Award key={award.title} title={award.title} description={award.description} />
            ))}
          </StyledAwards>
          <ImageDisplay>
            <img src={movie.secondaryImg} alt={movie.title} />
          </ImageDisplay>
        </StyledDetails>
      )}
    </>
  )
}

const StyledDetails = styled(motion.div)`
  color: #fff;
`

const StyledHeadLine = styled.div`
  min-height: 90vh;
  padding-top: 20vh;
  position: relative;

  h2 {
    position: absolute;
    top: 10%;
    left: 50%;
    transform: translate(-50%, -10%);
  }

  img {
    width: 100%;
    height: 70vh;
    object-fit: cover;
  }
`

const StyledAwards = styled.div`
  min-height: 80vh;
  display: flex;
  margin: 5rem 10rem;
  align-items: center;
  justify-content: space-around;

  @media (max-width: 1500px) {
    display: block;
    margin: 2rem;
  }
`

const ImageDisplay = styled.div`
  min-height: 50vh;

  img {
    width: 100vw;
    height: 100vh;
    object-fit: cover;
  }
`

export default MovieDetails
