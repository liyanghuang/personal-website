import { Grid, Typography } from '@material-ui/core'
import styled from 'styled-components'
import React from 'react'
import StyledLink from '../components/StyledLink'

function PostCard({className, theme, content}) {

    const {date, description, title, categories} = content

    return (
        <Grid className={className} container direction="column">
            <Grid container item direction="row" alignItems="center" justify="flex-start">
                <Grid item container justify="flex-start" className="title">
                    <Grid item>
                        <Typography variant="h4" className="title-text">
                            {title}                        
                        </Typography>
                    </Grid>
                </Grid>
                <Grid item container justify="flex-end" className="date">
                    <Grid item>
                        <Typography variant="body2" color="primary">
                            {date}
                        </Typography>
                    </Grid>
                </Grid>
            </Grid>
            <Grid container item direction="row" justify="flex-start" alignItems="flex-start">
                <Typography>
                    {description}Short description (1-2 lines) about the post choo choo chupa chups clickity clack
                    I am just trying to fill the line so it looks realistic ohohoho I did it.
                </Typography>
            </Grid>
            <Grid container item direction="row" justify="flex-start" alignItems="flex-start" spacing={1}>
                <Grid item>
                    <Typography>
                        <StyledLink theme={theme} to="/blog">{categories}</StyledLink>
                    </Typography>
                </Grid>
                <Grid item>
                    <Typography>
                        <StyledLink theme={theme} to="/blog">Category</StyledLink>
                    </Typography>
                </Grid>
            </Grid>
        </Grid>
    )
}

export default styled(PostCard)`
padding-top: 1rem;
padding-bottom: 1rem;
padding-left: 4rem;
padding-right: 10rem;
.title-text{
    font-weight: 600;
}
.title{
    width: 50%;
}
.date{
    width: 50%;
}
`