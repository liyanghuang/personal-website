import React from 'react'
import styled from 'styled-components'
import HeaderTitle from './HeaderTitle'
import HeaderButton from './HeaderButton'
import { useTheme } from '@material-ui/core/styles'

const Header = ({className}) => {
    const theme = useTheme()
    return (
        <header className={className}>
            <div className="border"></div>
            <HeaderTitle theme={theme} className="title"/>
            <HeaderButton text="About" theme={theme} path="/about" className="about" currPage/>
            <HeaderButton text="Blog" theme={theme} path="/blog" className="blog"/>
            <HeaderButton text="Contact" theme={theme} path="/contact" className="contact"/>
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
        right: 10rem;
    }
    .blog{
        position: absolute;
        bottom: 0;
        right: 5rem;
    }
    .contact{
        position: absolute;
        bottom: 0;
        right: 0;
    }
`