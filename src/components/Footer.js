import React from 'react'
import styled from 'styled-components'
import { useTheme, withStyles } from '@material-ui/core/styles'
import { Box} from '@material-ui/core'
import {Tooltip} from '@material-ui/core'
import {FaGithubSquare, FaLinkedin} from 'react-icons/fa'
import {RiMailFill} from 'react-icons/ri'


const Footer = ({className}) => {
    const theme = useTheme()
    return (
        <footer className={className}>
            <Box className="border"></Box>
            <Box component="span" className="icon">
                <Tooltip title="GitHub" placement="top" arrow>
                    <a href="https://www.google.com"><FaGithubSquare color="white" size="1.5rem" /></a>
                </Tooltip>
            </Box>
            <Box component="span" className="icon">
                <Tooltip title="LinkedIn" arrow placement="top">
                    <a href="https://www.google.com"><FaLinkedin color="white" size="1.5rem" /></a>
                </Tooltip>
            </Box>
            <Box component="span" className="icon">
                <Tooltip title="Mail" arrow placement="top">
                    <a href="mailto: liyanghuang@ucla.edu" ><RiMailFill color="white" size="1.8rem" /></a>
                </Tooltip>
            </Box>
        </footer>
    )
    
}

const StyledTooltip = withStyles(() => ({
  tooltip: {
    boxShadow: '0.3rem 0.3rem 1rem black',
    fontSize: 20,
    fontWeight: 700,
    fontFamily: 'Asap',
  },
}))(Tooltip);

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
        border-bottom: 1px solid gray;
    }
    .icon{
        display: inline-block;
        vertical-align: middle;
        margin-top: 1.25rem;
        margin-left: 0.5rem;
        margin-right: 0.5rem;
    }
`