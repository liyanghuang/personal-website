import React from 'react'
import styled from 'styled-components'
import HeaderTitle from './HeaderTitle'
import HeaderButton from './HeaderButton'
import {Box, Grid, Hidden} from '@material-ui/core'

const Header = ({className, theme}) => {

    return (
        <Grid container direction="row" alignItems="flex-end" justify="center" className={className} spacing={0}>
            <Box className="border"></Box>
            <Grid item container direction="row" className="header-container" justify="flex-start" md={1} xs={12}>
                <Grid item className="title">
                    <Hidden smDown implementation="css">
                        <HeaderTitle theme={theme} />
                    </Hidden>
                </Grid>
            </Grid>
            <Grid item container className="buttons-container" direction = "row" justify="flex-end" md={11} xs={12} spacing={4}>
                <Grid item className="about">
                    <HeaderButton text="About" theme={theme} path="/about" currPage/>
                </Grid>
                <Grid item className="blog">
                    <HeaderButton text="Blog" theme={theme} path="/blog" />
                </Grid>
                <Grid item className="contact">
                    <HeaderButton text="Contact" theme={theme} path="/contact" />
                </Grid>
            </Grid>
        </Grid>
    )
}

export default styled(Header)`
    position:relative;
    height: 6rem;
    padding-left: 3rem;
    padding-right: 3rem;
    .border{
        position: absolute;
        bottom: 0.05rem;
        left: 4rem;
        right: 4rem;
        border-bottom: 1px solid rgb(125,125,125);
        border-bottom: 1px solid rgba(255,255,255,.25);
    }
    .title{
    }
    .about{
    }
    .blog{
    }
    .contact{
    }
    @media only screen and (max-width: 960px){
        .buttons-container{
            justify-content: center;
        }
    }
`