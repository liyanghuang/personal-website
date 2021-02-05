import React from 'react'
import {Button} from '@material-ui/core'
import styled from 'styled-components'
import {Link} from 'gatsby'

const HeaderButton = ({className}) => {
    return (
        <Button className={className} component={Link} to="/">LIYANG HUANG</Button>
    )
}


export default styled(HeaderButton)`
    color: ${props => props.theme.palette.text.primary};
    width: 5.5rem;
    line-height:1.2;
    font-size: 1.5rem;
    transition: 0.3s;
    padding-left: 0;
    padding-right: 0rem;
    padding-top: 0.3rem;
    padding-bottom: 0.4rem;
    font-weight: 600;
    :hover {
        background-color: transparent;
        color: ${props => props.theme.palette.text.primary};
    }
    :before {
        content: '';
        border-bottom: 0.2rem solid ${props => props.theme.palette.info.main};
        padding: 0;
        position: absolute;
        bottom: 0;
        left: 0;
        right: 0;
        margin: 0 auto;
        width: 100%;
        transition: 0.3s;
    }
    :hover:before {
        border-bottom: 0.2rem solid ${props => props.theme.palette.primary.main};
        width: 100%;
        padding: 0;
    }
    :active {
        background: transparent;
        color: ${props => props.theme.palette.text.primary};
        transition: none;
    }
`