import React from 'react'
import {Button} from '@material-ui/core'
import styled from 'styled-components'
import {Link} from 'gatsby'

const HeaderButton = ({className, text, path}) => {
    return (
            <Button className={className} component={Link} to={path}>{text}</Button>
    )
}


export default styled(HeaderButton)`
    color: ${props => props.theme.palette.text.primary};
    font-size: 1.3rem;
    transition: 0.3s;
    line-height: 1.5;
    padding: 0.25rem;
    :hover {
        background-color: ${props => props.theme.palette.background.default};
    }
    :before {
        content: '';
        border-bottom: 0.2rem solid ${props => (props.currPage)? 
            props.theme.palette.primary.main : props.theme.palette.background.default};
        padding: 0;
        position: absolute;
        bottom: 0;
        left: 0;
        right: 0;
        margin: 0 auto;
        width: ${props => (props.currPage)? 
            "100%" : "0"};
        transition: 0.3s;
    }
    :hover:before {
        border-bottom: 0.2rem solid ${props => props.theme.palette.primary.main};
        width: 100%;
        padding: 0;
    }
    :active {
        background: #000;
        color: #fff;
        transition: none;
    }
`
