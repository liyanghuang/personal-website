import React from 'react'
import {useTheme} from '@material-ui/core/styles'
import {Grid, Typography, Box, Hidden} from '@material-ui/core'
import Header from '../components/Header'
import Footer from '../components/Footer'
import styled from 'styled-components'
import {graphql} from 'gatsby'
import Img from 'gatsby-image'
import HeaderButton from '../components/HeaderButton'
import StyledLink from '../components/StyledLink'


function BlogTagListingTemplate({className, data}) {

    const theme = useTheme()
    let {edges} = data.allMarkdownRemark
    edges = [...new Set(edges.map(e =>  e.node.frontmatter.category))];

    return (
        <Grid className={className} direction="column" container spacing={0}>
            <Grid item className="header">
                <Header theme={theme} currPage="blog"/> 
            </Grid>
            <Grid item container className="content-wrapper" direction="row" spacing={0}>
                <Grid item container direction="column" alignItems="flex-end" justify="flex-start" className="side-content" xs={12} md={4} spacing={0}>
                    <Hidden smDown implementation="css">
                        <Box className="border-side"></Box>
                    </Hidden>
                    <Grid item container justify="flex-end" className="side-content-wrapper">
                        <Grid item container justify="center" alignItems="center" className="picture-box">
                            <Grid item>
                                <Img className="picture" fixed={data.file.childImageSharp.fixed} />
                            </Grid>
                        </Grid>
                        <Grid item container justify="center" alignItems="center" className="text-box">
                            <Grid item>
                                <Typography>
                                    Welcome to my blog! I write about my thoughts on life and happiness, as well as penning the occasional review of something I've enjoyed.
                                </Typography>
                            </Grid>
                        </Grid>
                        <Grid item container className="button-box" direction="column" justify="center" alignItems="center">
                            <Grid item>
                                <HeaderButton className="button" theme={theme} to="/blog/" text="Recent" size="1rem" />
                            </Grid>
                            <Grid item>
                                <HeaderButton className="button" theme={theme} to="/blog/tags/" text="Tags" size="1rem" currPage/>
                            </Grid>
                            <Grid item>
                                <HeaderButton className="button" theme={theme} to="/blog/reviews/" text="Reviews" size="1rem" />
                            </Grid>
                        </Grid>
                    </Grid>
                </Grid>
                <Grid item container className="post-content" justify="flex-start" alignItems="flex-start" direction="column" xs={12} md={8}>
                    <Grid item className="full-width">
                        <Typography variant="h4" className="tag-text">Tags</Typography>
                    </Grid>
                    {edges.map( e => (
                        <Grid item container className="full-width" key={e}>
                            <Grid item>
                                <Typography><strong>•&ensp;</strong></Typography>
                            </Grid>
                            <Grid item>
                                <StyledLink className="tag-link" theme={theme} to={`/blog/${e.toLowerCase()}/`}><Typography variant="body1">{e}</Typography></StyledLink>
                            </Grid>
                        </Grid>
                    ))}
                </Grid>
            </Grid>
            <Grid item className="footer">
                <Footer theme={theme}/>
            </Grid>
        </Grid>
    )
}

export const Query= graphql`
    query BlogTagPosts {
        allMarkdownRemark{
            edges {
                node {
                    id
                    frontmatter {
                        category
                    }
                }
            }
        }
        file(relativePath: { eq: "rockProf.jpg" }) {
            childImageSharp {
            # Specify the image processing specifications right in the query.
            # Makes it trivial to update as your page's design changes.
                fixed (quality: 90, width: 200, height:200, cropFocus: CENTER){
                    ...GatsbyImageSharpFixed
                }
            }
        }
    }
`

export default styled(BlogTagListingTemplate)`
    position: relative;
    min-height: 100vh;
    overflow-x: hidden;

    .full-width{
        width: 100%;
        padding-left: 4rem;
        padding-right: 10rem;
    }

    .tag-text{
        padding-top: 1rem;
        font-weight: 600;
        padding-bottom: 1rem;
    }

    .picture{
        border-radius: 50%;
    }

    .text-box{
        padding-right: 5rem;
        padding-top: 2rem;
        text-align: center;
        width: 60%;
    }

    .picture-box{
        padding-right: 5rem;
        width: 60%;
    }

    .button-box{
        padding-top: 2rem;
        padding-right: 5rem;
        width: 60%;
    }

    .post-content{
    }

    .side-content{
        position: relative;
    }

    .border-side{
        position:absolute;
        height: 72vh;
        right: 0;
        top: 0;
        width: 100%;
        border-right: 1px solid rgb(125,125,125);
        border-right: 1px solid rgba(255,255,255, 0.25);
        border-image: 
            linear-gradient(
            to bottom, 
            rgba(255, 255, 255, 0.25), 
            rgba(0, 0, 0, 0)
            ) 1 100%;
    }

    .header{
        height: 12vh;
    }
    .footer{
        height: 8vh;
    }
    .content-wrapper{
        padding-top: 2rem;
        padding-bottom: 2rem;
        min-height: 80vh;
        display: flex;
        align-items: stretch;
    }
    @media only screen and (max-width: 960px){
        .picture-box{
            padding: 0;
        }
        .side-content{
            align-items: center;
            border-right: 0px;
        }
        .side-content-wrapper{
            justify-content: center;
        }
        .text-box{
            padding: 0;
            padding-top: 2rem;
        }
        .button-box{
            margin-top: 2rem;
            padding: 0;
            flex-direction: row;
            width: 100%;
        }
        .button{
            margin-left: 0.5rem;
            margin-right: 0.5rem;
        }
        .post-content{
            margin-top: 2rem;
            align-items: center;
            justify-content: center;
        }
    }
`