import React from 'react'
import { GlobalStyle } from './theme/GlobalStyle'
import { Route, Switch, useLocation } from 'react-router-dom'
import UseScrollToTop from './hooks/useScrollToTop'

// Components
import AboutUs from './pages/AboutUs'
import Contact from './pages/Contact'
import OurWork from './pages/OurWork'
import Nav from './components/Nav'
import MovieDetails from './pages/MovieDetails'

// Animation
import { AnimatePresence } from 'framer-motion'

function App() {
  const location = useLocation()

  return (
    <>
      <GlobalStyle />
      <Nav />
      <AnimatePresence exitBeforeEnter>
        <UseScrollToTop />
        <Switch key={location.key} location={location}>
          <Route exact path='/' component={AboutUs} />
          <Route path='/our-work/:id' component={MovieDetails} />
          <Route path='/our-work' component={OurWork} />
          <Route path='/contact' component={Contact} />
        </Switch>
      </AnimatePresence>
    </>
  )
}

export default App
