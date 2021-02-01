import React from 'react'
import styled from 'styled-components'
import HeaderButton from './HeaderButton'
import { useTheme } from '@material-ui/core/styles'
import { Box } from '@material-ui/core'

const Footer = ({className}) => {
    const theme = useTheme()
    return (
        <footer className={className}>
            <Box className="border"></Box>
            <Box component="span" className="about"><HeaderButton text="About" theme={theme} path="/about"  currPage/></Box>
            <Box component="span" className="blog"><HeaderButton text="Blog" theme={theme} path="/blog" /></Box>
            <Box component="span" className="contact"><HeaderButton text="Contact" theme={theme} path="/contact" /></Box>
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
        border-bottom: 1px solid gray;
    }
    .about{
        display: inline-block;
    }
    .blog{
        display: inline-block;
    }
    .contact{
        display: inline-block;
    }
`