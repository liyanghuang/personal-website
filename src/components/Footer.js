import React from 'react'
import styled from 'styled-components'
import { Box, Grid, Hidden} from '@material-ui/core'
import {Tooltip} from '@material-ui/core'
import {FaGithubSquare, FaLinkedin} from 'react-icons/fa'
import {ImMail3} from 'react-icons/im'
import Copyright from './Copyright'


const Footer = ({className}) => {
    return (
        <Grid container direction="column" alignItems="center" justify="center" className={className}>
            <Grid container item direction="row" alignItems="center" justify="center" spacing={2} className="icons-container">
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
            <Grid item>
                <Copyright className="copyright"/>
            </Grid>
        </Grid>
    )
    
}

export default styled(Footer)`
    position:relative;
    min-height: 8vh;
    padding-top: 1rem;
    width: 100vw;
    .border{
        position: absolute;
        top: 0.5rem;
        left: 4rem;
        right: 4rem;
        border-bottom: 1px solid rgb(125,125,125);
        border-bottom: 1px solid rgba(255,255,255,.25);
    }
    .copyright{
        position: absolute;
        left: 4rem;
        top: 1.75rem;
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
    @media only screen and (max-width: 960px){
        .copyright{
            position: relative;
            left: 0;
            top: 0;
            margin-bottom: 1rem;
        }
        .icons-container{
            margin-top: 0.25rem;
            margin-bottom: 0.25rem;
        }
    }
`