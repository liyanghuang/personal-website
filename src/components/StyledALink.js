import React from 'react'
import styled from 'styled-components'

const ALink = ({className, to, children}) => {
  return (
    <a target="_blank" rel="noreferrer" className={className} href={to}>{children}</a>
  )
}

export default styled(ALink)`
  text-decoration: none;
  transition: 0.3s;
  color: ${props => props.theme.palette.secondary.main};
  :hover{
    color:${props => props.theme.palette.primary.main};
  }
`