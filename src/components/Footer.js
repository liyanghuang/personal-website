import React from 'react'
import styled from 'styled-components'
import { Box, Grid} from '@material-ui/core'
import {Tooltip} from '@material-ui/core'
import {FaGithubSquare, FaLinkedin} from 'react-icons/fa'
import {ImMail3} from 'react-icons/im'


const Footer = ({className}) => {
    return (
        <Grid container direction="row" alignItems="center" justify="center" className={className} spacing={2}>
            <Box className="border"></Box>
            <Grid item className="icon">
                <Tooltip title="Mail" arrow placement="top">
                    <a href="mailto: liyanghuang@ucla.edu" aria-label="Mail" className="link"><ImMail3 className="mail" color="white" size="1.5rem" /></a>
                </Tooltip>
            </Grid>
            <Grid item className="icon">
                <Tooltip title="GitHub" placement="top" arrow>
                    <a href="https://www.github.com/liyanghuang" rel="noreferrer" aria-label="GitHub" target="_blank" className="link"><FaGithubSquare color="white" size="1.5rem" /></a>
                </Tooltip>
            </Grid>
            <Grid item className="icon">
                <Tooltip title="LinkedIn" arrow placement="top">
                    <a href="https://www.linkedin.com/in/liyang-huang-767b28154/" aria-label="LinkedIn" rel="noreferrer" target="_blank" className="link"><FaLinkedin color="white" size="1.5rem" /></a>
                </Tooltip>
            </Grid>
        </Grid>
    )
    
}

export default styled(Footer)`
    position:relative;
    height: 8vh;
    padding-top: 1.25rem;
    width: 100vw;
    .border{
        position: absolute;
        top: 0.5rem;
        left: 4rem;
        right: 4rem;
        border-bottom: 1px solid rgb(125,125,125);
        border-bottom: 1px solid rgba(255,255,255,.25);
    }
    .icon{
    }
    .link {
        padding-top: 0.25rem;
    }
    .link svg{
        fill: ${props => props.theme.palette.text.primary};
        transition: 0.3s;
    }
    .link svg.mail{
        padding-top: 0.09rem;
        padding-bottom: 0.07rem;
        padding-right: 0.17rem;
    }
    .link:hover svg{
        fill: ${props => props.theme.palette.primary.main};

    }
`