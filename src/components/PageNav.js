import React from 'react'
import styled from 'styled-components'
import {Grid, Typography} from '@material-ui/core'
import StyledLink from '../components/StyledLink'
import * as path from 'path'

function PageNav({theme, currPage, className, numPages}) {

    const previousPage = (currPage === 1)? "disabled" : (currPage - 1 === 1)? "/blog/" : `/blog/page/${currPage - 1}`
    const nextPage = (currPage === numPages)? "disabled" : `/blog/page/${currPage + 1}`

    console.log(currPage)
    console.log(numPages)



    return (
        <Grid className={className} container direction="row" justify="center" alignItems="center">
            <Grid item>
                <Typography variant="h5" className="link-text">
                    {(previousPage === "disabled")? "<" : 
                    <StyledLink className="link" theme={theme} to={previousPage}>&#60;</StyledLink>
                    }
                </Typography>
            </Grid>
            <Grid item>
                <Typography variant="h5" className="link-text">
                    {(nextPage === "disabled")? ">" : 
                    <StyledLink className="link" theme={theme} to={nextPage}>&#62;</StyledLink>
                    }
                </Typography>
            </Grid>

        </Grid>
    )
}

export default styled(PageNav)`
    .link{
        color: ${props=> props.theme.palette.text.primary};
    }
    .link:hover{
        color: ${props=> props.theme.palette.primary.main};
    }
    .link:active{
        color: ${props=> props.theme.palette.primary.main};
    }
    .link-text{
        color: ${props=> props.theme.palette.text.secondary};
        cursor: default;
    }
`
