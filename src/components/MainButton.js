import React from "react"
import {Button} from '@material-ui/core'
import styled from 'styled-components'
import {Link} from 'gatsby'

const MainButton = ({className, text, to}) => {

    return (
      <Button color='primary' component={Link} variant='outlined' className={className} to={to}>{text}</Button>
    )
}

export default styled(MainButton)`
    width: 14rem;
    color: ${props => props.theme.palette.primary.main};
    background-color: ${props => props.theme.palette.background.default};
    transition: background 0.3s, color 0.3s, border 0.3s;
    border-color:${props => props.theme.palette.primary.main};
    :hover{
        background-color: ${props => props.theme.palette.primary.transparent};
        color: ${props => props.theme.palette.primary.main};
    }
`