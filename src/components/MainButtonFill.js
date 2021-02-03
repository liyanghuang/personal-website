import React from "react"
import {Button} from '@material-ui/core'
import styled from 'styled-components'
import {Link} from 'gatsby'

const MainButtonFill = ({className, text, to}) => {

    return (
        <Button color='primary' variant='outlined' component={Link} className={className} to={to}>{text}</Button>
    )
}

export default styled(MainButtonFill)`
    width: 14rem;
    background-color: ${props => props.theme.palette.primary.main};
    color: ${props => props.theme.palette.background.default};
    transition: background 250ms, color 250ms;
    border-color:${props => props.theme.palette.primary.main};
    :hover{
        background-color: ${props => props.theme.palette.primary.dark};
        border-color:${props => props.theme.palette.primary.dark};
    }
`