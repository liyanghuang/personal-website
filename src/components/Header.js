import React from 'react'
import styled from 'styled-components'
import HeaderTitle from './HeaderTitle'
import HeaderButton from './HeaderButton'
import { useTheme } from '@material-ui/core/styles'
import {Box} from '@material-ui/core'

const Header = ({className}) => {
    const theme = useTheme()
    return (
        <header className={className}>
            <Box className="border"></Box>
            <Box component="span" className="title"><HeaderTitle theme={theme} /></Box>
            <Box component="span" className="about"><HeaderButton text="About" theme={theme} path="/about" currPage/></Box>
            <Box component="span" className="blog"><HeaderButton text="Blog" theme={theme} path="/blog" /></Box>
            <Box component="span" className="contact"><HeaderButton text="Contact" theme={theme} path="/contact" /></Box>
        </header>
    )
    
}

export default styled(Header)`
    position:relative;
    height: 8rem;
    margin-left: 4rem;
    margin-right: 4rem;
    .border{
        position: absolute;
        width: 100%;
        bottom: 0.1rem;
        border-bottom: 1px solid gray;
    }
    .title{
        position: absolute;
        bottom: 0;
        left: 0;
    }
    .about{
        position: absolute;
        bottom: 0;
        right: 13.5rem;
    }
    .blog{
        position: absolute;
        bottom: 0;
        right: 7rem;
    }
    .contact{
        position: absolute;
        bottom: 0;
        right: 0;
    }
`