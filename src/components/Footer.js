import React from 'react'
import styled from 'styled-components'
import { Box, Grid} from '@material-ui/core'
import {Tooltip} from '@material-ui/core'
import {FaGithubSquare, FaLinkedin} from 'react-icons/fa'
import {RiMailFill} from 'react-icons/ri'


const Footer = ({className}) => {
    return (
        <Grid container direction="row" alignItems="center" justify="center" className={className} spacing={2}>
            <Box className="border"></Box>
            <Grid item className="icon">
                <Tooltip title="Mail" arrow placement="top">
                    <a href="mailto: liyanghuang@ucla.edu" className="link"><RiMailFill color="white" size="1.7rem" /></a>
                </Tooltip>
            </Grid>
            <Grid item className="icon">
                <Tooltip title="GitHub" placement="top" arrow>
                    <a href="https://www.google.com" className="link"><FaGithubSquare color="white" size="1.5rem" /></a>
                </Tooltip>
            </Grid>
            <Grid item className="icon">
                <Tooltip title="LinkedIn" arrow placement="top">
                    <a href="https://www.google.com" className="link"><FaLinkedin color="white" size="1.5rem" /></a>
                </Tooltip>
            </Grid>
        </Grid>
    )
    
}

export default styled(Footer)`
    position:relative;
    height: 8vh;
    .border{
        position: absolute;
        top: 0rem;
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