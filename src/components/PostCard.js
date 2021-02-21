import { Grid, Typography } from '@material-ui/core'
import styled from 'styled-components'
import React from 'react'
import StyledLink from '../components/StyledLink'

function PostCard({className, theme, content}) {

    const {date, description, title, category, path} = content
    let categoryAddition= (category === "Reflections")? "reflections/" : (category === "Reviews")? "reviews/" : ""


    return (
        <Grid className={className} container direction="column">
            <Grid container item direction="row" alignItems="center" justify="flex-start">
                <Grid item container justify="flex-start" className="title" md={6} sm={12}>
                    <Grid item>
                        <Typography variant="h4" className="title-text">
                            <StyledLink className="link" theme={theme} to={path}>{title}</StyledLink>                       
                        </Typography>
                    </Grid>
                </Grid>
                <Grid item container justify="flex-end" className="date" md={6} sm={12}>
                    <Grid item>
                        <Typography variant="body2" color="primary">
                            {date}
                        </Typography>
                    </Grid>
                </Grid>
            </Grid>
            <Grid container item direction="row" justify="flex-start" alignItems="flex-start">
                <Typography>
                    {description}
                </Typography>
            </Grid>
            <Grid container item direction="row" justify="flex-start" alignItems="flex-start" spacing={1}>
                <Grid item>
                    <Typography>
                        <StyledLink theme={theme} to={`/blog/${categoryAddition}`}>{category}</StyledLink>
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
}
.date{
}
.link{
    color: ${props=> props.theme.palette.text.primary};
}
.link:hover{
    color: ${props=> props.theme.palette.primary.main};
}
.link:active{
    color: ${props=> props.theme.palette.primary.main};
}
@media only screen and (max-width: 960px){
    padding-left: 5rem;
    padding-right: 5rem;
    .date{
        justify-content: flex-start;
    }
}
`