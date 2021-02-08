import React from 'react'
import {useTheme} from '@material-ui/core/styles'
import {Grid, Typography} from '@material-ui/core'
import Header from '../components/Header'
import Footer from '../components/Footer'
import styled from 'styled-components'
import {graphql} from 'gatsby'
import Img from 'gatsby-image'
import StyledLink from '../components/StyledLink'
import HeaderButton from '../components/HeaderButton'
import PostCard from '../components/PostCard'
import PageNav from '../components/PageNav'


function BlogListingTemplate({className, data, pageContext}) {

    const {postids, currpage, numpages} = pageContext

    const theme = useTheme()
    let {edges} = data.allMarkdownRemark
    edges = postids.map(thisID => edges.filter(e => e.node.frontmatter.postNumber === thisID)[0]);

    return (
        <Grid className={className} direction="column" container spacing={0}>
            <Grid item className="header">
                <Header theme={theme} currPage="blog"/> 
            </Grid>
            <Grid item container className="content-wrapper" direction="row" spacing={0}>
                <Grid item container direction="column" alignItems="flex-end" justify="center" className="side-content" xs={12} md={4} spacing={0}>
                    <Grid item container justify="center" alignItems="center" className="picture-box">
                        <Grid item>
                            <Img className="picture" fixed={data.file.childImageSharp.fixed} />
                        </Grid>
                    </Grid>
                    <Grid item container justify="center" alignItems="center" className="text-box">
                        <Grid item>
                            <Typography>
                                This is my website. I am very <StyledLink theme={theme} to="/about">cool</StyledLink> yup. I do the beep beep boop boop with my computer and then it
                                runs a program. <StyledLink theme={theme} to="/blog">Beepadaboop</StyledLink>.
                            </Typography>
                        </Grid>
                    </Grid>
                    <Grid item container className="button-box" direction="column" justify="center" alignItems="center">
                        <Grid item>
                            <HeaderButton theme={theme} to="/blog" text="Recent" currPage/>
                        </Grid>
                        <Grid item>
                            <HeaderButton theme={theme} to="/blog" text="Reflections" />
                        </Grid>
                        <Grid item>
                            <HeaderButton theme={theme} to="/blog" text="Tech" />
                        </Grid>
                    </Grid>
                </Grid>
                <Grid item container className="post-content" justify="flex-start" alignItems="flex-start" direction="column" xs={12} md={8}>
                    {edges.map( ({node}) => (
                        <Grid item className="full-width" key={node.id}>
                            <PostCard  theme={theme} content={{
                                date: node.frontmatter.date,
                                title: node.frontmatter.title,
                                description: node.frontmatter.description,
                                categories: "temp"
                            }}/>
                        </Grid>
                    ))}
                    <PageNav theme={theme} currPage={currpage} numPages={numpages}/>
                </Grid>
            </Grid>
            <Grid item className="footer">
                <Footer theme={theme}/>
            </Grid>
        </Grid>
    )
}

export const Query= graphql`
    query BlogPosts ($postids: [String]!){
        allMarkdownRemark(filter: {frontmatter:{ postNumber: {in: $postids}}}) {
            edges {
                node {
                    id
                    frontmatter {
                        title
                        path
                        date
                        author
                        description
                        postNumber
                    }
                }
            }
        }
        file(relativePath: { eq: "dog.png" }) {
            childImageSharp {
            # Specify the image processing specifications right in the query.
            # Makes it trivial to update as your page's design changes.
                fixed (width: 200){
                    ...GatsbyImageSharpFixed
                }
            }
        }
    }
`

export default styled(BlogListingTemplate)`
    position: relative;
    min-height: 100vh;
    overflow-x: hidden;

    .full-width{
        width: 100%;
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
        border-right: 1px solid rgb(125,125,125);
        border-right: 1px solid rgba(255,255,255, 0.25);
        max-height: 75vh;
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
`