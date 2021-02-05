import React from 'react'
import {useTheme} from '@material-ui/core/styles'
import {Grid} from '@material-ui/core'
import Header from '../components/Header'
import Footer from '../components/Footer'
import styled from 'styled-components'

function BlogListingTemplate({className, data}) {

    const theme = useTheme()

    return (
        <Grid className={className} direction="column" container spacing={0}>
            <Grid item className="header">
                <Header theme={theme}/> 
            </Grid>
            <Grid item container className="content-wrapper" direction="row" spacing={0}>
            </Grid>
            <Grid item className="footer">
                <Footer theme={theme}/>
            </Grid>
        </Grid>
    )
}

export const Query= graphql`
    query BlogPosts ($Ids: [String]!){
        allMarkdownRemark(filter: {id: {in: "$Ids"}}) {
            edges {
                node {
                    id
                    frontmatter {
                        title
                        path
                        date
                        author
                        description
                    }
                }
            }
        }
    }
`

export default styled(Blog)`

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
        display: flex;
        align-items: stretch;
    }
`