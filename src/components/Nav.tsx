import React from 'react'
import { Link, NavLink } from 'react-router-dom'
import styled from 'styled-components'

const Nav = () => {
  return (
    <StyledNav>
      <h1>
        <Link id='logo' to='/'>
          Capture
        </Link>
      </h1>
      <ul>
        <li>
          <StyledNavLink exact to='/' activeClassName='active'>
            About Us
          </StyledNavLink>
        </li>
        <li>
          <StyledNavLink to='/our-work' activeClassName='active'>
            Our Work
          </StyledNavLink>
        </li>
        <li>
          <StyledNavLink to='/contact' activeClassName='active'>
            Contact Us
          </StyledNavLink>
        </li>
      </ul>
    </StyledNav>
  )
}

const StyledNav = styled.nav`
  min-height: 10vh;
  display: flex;
  margin: auto;
  justify-content: space-between;
  align-items: center;
  padding: 1rem 10rem;
  background-color: #282828;
  position: sticky;
  top: 0;
  z-index: 10;

  a {
    color: #fff;
    text-decoration: none;
  }

  ul {
    display: flex;
    list-style: none;
  }

  #logo {
    font-size: 1.5rem;
    font-family: 'Lobster', cursive;
    font-weight: lighter;
  }

  li {
    padding-left: 10rem;
    position: relative;
  }

  @media (max-width: 1300px) {
    flex-direction: column;
    padding: 2rem 1rem;
  }

  #logo {
    display: inline-block;
    margin: 1rem;
  }

  ul {
    padding: 2rem;
    justify-content: space-around;
    width: 100%;
  }

  li {
    padding: 0;
  }
`

const StyledNavLink = styled(NavLink)`
  transition: color 0.4s ease;

  &.active {
    color: #23d997;
  }

  &:hover {
    color: #23d997;
  }
`

export default Nav
