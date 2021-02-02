import React from 'react'
import styled from 'styled-components'
import { Box} from '@material-ui/core'
import {Tooltip} from '@material-ui/core'
import {FaGithubSquare, FaLinkedin} from 'react-icons/fa'
import {ImMail3} from 'react-icons/im'


const Footer = ({className}) => {
    return (
        <footer className={className}>
            <Box className="border"></Box>
            <Box component="span" className="mail">
                <Tooltip title="Mail" arrow placement="top">
                    <a href="mailto: liyanghuang@ucla.edu" className="link"><ImMail3 color="white" size="1.3rem" /></a>
                </Tooltip>
            </Box>
            <Box component="span" className="icon">
                <Tooltip title="GitHub" placement="top" arrow>
                    <a href="https://www.google.com" className="link"><FaGithubSquare color="white" size="1.5rem" /></a>
                </Tooltip>
            </Box>
            <Box component="span" className="icon">
                <Tooltip title="LinkedIn" arrow placement="top">
                    <a href="https://www.google.com" className="link"><FaLinkedin color="white" size="1.5rem" /></a>
                </Tooltip>
            </Box>
        </footer>
    )
    
}

export default styled(Footer)`
    position:relative;
    height: 4rem;
    margin-left: 4rem;
    margin-right: 4rem;
    text-align: center;
    .border{
        position: absolute;
        width: 100%;
        top: 0rem;
        border-bottom: 1px solid rgb(125,125,125);
        border-bottom: 1px solid rgba(255,255,255,.25);
    }
    .icon{
        display: inline-block;
        vertical-align: middle;
        margin-top: 1.25rem;
        margin-left: 0.5rem;
        margin-right: 0.5rem;
    }
    .mail{
        display: inline-block;
        vertical-align: middle;
        margin-top: 1.25rem;
        margin-left: 0.5rem;
        margin-right: 0.63rem;
    }
    .link svg{
        transition: transform 0.15s;
        animation-name: fadeIn;
        animation-duration: 0.3s;
        animation-fill-mode: forwards;
        fill: ${props => props.theme.palette.text.primary};
    }
    .link:hover svg{
        fill: ${props => props.theme.palette.primary.main};

    }
`