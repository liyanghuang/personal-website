import React from 'react'
import {useTheme} from '@material-ui/core/styles'
import {Grid} from '@material-ui/core'
import Header from '../components/Header'
import Footer from '../components/Footer'
import styled from 'styled-components'

function About({className}) {

    const theme = useTheme()

    return (
        <Grid className={className} direction="column" container spacing={0}>
            <Grid item className="header">
                <Header theme={theme} currPage="about"/> 
            </Grid>
            <Grid item container className="content-wrapper" direction="row" spacing={0}>
            </Grid>
            <Grid item className="footer">
                <Footer theme={theme}/>
            </Grid>
        </Grid>
    )
}

export default styled(About)`
    position: relative;
    min-height: 100vh;
    overflow-x: hidden;

    .header{
        height: 12vh;
    }
    .footer{
        height: 8vh;
    }
    .content-wrapper{
        padding-top: 3rem;
        padding-bottom: 3rem;
        min-height: 80vh;
    }
`