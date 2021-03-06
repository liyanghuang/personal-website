import React from 'react'
import styled from 'styled-components'
import HeaderTitle from './HeaderTitle'
import HeaderButton from './HeaderButton'
import {Box, Grid, Hidden} from '@material-ui/core'

const Header = ({className, theme, currPage}) => {

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
                    <HeaderButton className="button-styles" text="About" theme={theme} to="/" currPage={currPage === "default"} size="1.3rem"/>
                </Grid>
                <Grid item className="blog">
                    <HeaderButton className="button-styles" text="Blog" theme={theme} to="/blog" currPage={currPage === "blog"} size="1.3rem"/>
                </Grid>
                <Grid item className="contact">
                    <HeaderButton className="button-styles" text="Contact" theme={theme} to="/contact" currPage={currPage === "contact"} size="1.3rem"/>
                </Grid>
            </Grid>
        </Grid>
    )
}

export default styled(Header)`
    position:relative;
    height: 12vh;
    padding-left: 3rem;
    padding-right: 3rem;
    width: 100vw;
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
        height: 8vh;
        .buttons-container{
            justify-content: center;
        }
        .button-styles{
            font-size: 1rem;
        }
        .about{
            padding-left: 0.25rem;
            padding-right: 0.25rem;
        }
        .contact{
            padding-left: 0.25rem;
            padding-right: 0.25rem;
        }
        .blog{
            padding-left: 0.25rem;
            padding-right: 0.25rem;
        }
    }
`