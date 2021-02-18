import { Grid, Typography } from '@material-ui/core'
import styled from 'styled-components'
import React from 'react'
import StyledLink from '../components/StyledLink'

function RelatedPost({className, theme, content}) {

    const {date, subtitle, title, category, path} = content
    let categoryAddition= (category === "Reflections")? "reflections/" : (category === "Tech")? "tech/" : ""


    return (
        <Grid className={className} container direction="column">
            <Grid container item direction="row" alignItems="center" justify="flex-start">
                <Grid item>
                    <Typography variant="h5" className="title-text">
                        <StyledLink className="link" theme={theme} to={path}>{title}</StyledLink>                       
                    </Typography>
                </Grid>
            </Grid>
            <Grid container item direction="row" justify="flex-start" alignItems="flex-start">
                <Typography>
                    {subtitle}
                </Typography>
            </Grid>
            <Grid container item direction="row" justify="flex-start" alignItems="flex-start" spacing={1}>
                <Grid item>
                    <Typography>
                        <StyledLink theme={theme} to={`/blog/${categoryAddition}`}>{category}</StyledLink>
                    </Typography>
                </Grid>
            </Grid>
            <Grid container item direction="row" justify="flex-start" alignItems="flex-start">
                <Grid item>
                    <Typography color="primary" variant="body2">
                        {date}
                    </Typography>
                </Grid>
            </Grid>
        </Grid>
    )
}

export default styled(RelatedPost)`
padding-right: 1rem;
padding-left: 2rem;
.title-text{
    font-weight: 600;
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
    padding-left: 0;
    padding-right: 0;
}
`