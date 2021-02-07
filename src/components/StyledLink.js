import React from 'react'
import {Link} from 'gatsby'
import styled from 'styled-components'

const ThemeLink = ({className, to, children}) => {
  return (
    <Link to={to} className={className}>{children}</Link>
  )
}

export default styled(ThemeLink)`
  text-decoration: none;
  transition: 0.3s;
  color: ${props => props.theme.palette.secondary.main};
  :hover{
    color:${props => props.theme.palette.primary.main};
  }
`