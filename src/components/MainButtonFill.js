import React from "react"
import {Button} from '@material-ui/core'
import styled from 'styled-components'

const MainButtonFill = ({className, text}) => {

    return (
        <Button color='primary' variant='outlined' className={className}>{text}</Button>
    )
}

export default styled(MainButtonFill)`
    width: 12rem;
    background-color: ${props => props.theme.palette.primary.main};
    color: ${props => props.theme.palette.background.default};
    transition: background 250ms, color 250ms;
    border-color:${props => props.theme.palette.primary.main};
    :hover{
        background-color: ${props => props.theme.palette.primary.dark};
        border-color:${props => props.theme.palette.primary.dark};
    }
`