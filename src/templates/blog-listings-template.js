import React from 'react'
import {useTheme} from '@material-ui/core/styles'
import {Grid, Box} from '@material-ui/core'
import Header from '../components/Header'
import Footer from '../components/Footer'
import styled from 'styled-components'
import {graphql} from 'gatsby'

function BlogListingTemplate({className, data}) {

    const theme = useTheme()

    return (
        <Grid className={className} direction="column" container spacing={0}>
            <Grid item className="header">
                <Header theme={theme} currPage="blog"/> 
            </Grid>
            <Grid item container className="content-wrapper" direction="row" spacing={0}>
                {data.allMarkdownRemark.edges.map(({node}) => (
                    <Box key={node.id}>{node.id}</Box>
                ))}
            </Grid>
            <Grid item className="footer">
                <Footer theme={theme}/>
            </Grid>
        </Grid>
    )
}

export const Query= graphql`
    query BlogPosts ($Ids: [String]!){
        allMarkdownRemark(filter: {id: {in: $Ids}}) {
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

export default styled(BlogListingTemplate)`
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