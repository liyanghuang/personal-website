import React from 'react'
import {useTheme} from '@material-ui/core/styles'
import {Grid, Typography, Container} from '@material-ui/core'
import Header from '../components/Header'
import Footer from '../components/Footer'
import styled from 'styled-components'
import StyledLink from '../components/StyledLink'
import {graphql} from 'gatsby'
import Img from 'gatsby-image'
import RelatedPost from '../components/RelatedPost'
import {Helmet} from 'react-helmet'

function BlogPostTemplate({className, data}) {

    const theme = useTheme()
    let categoryAddition= `${data.markdownRemark.frontmatter.category.toLowerCase()}/`


    return (
        <Grid className={className} direction="column" container spacing={0}>
            <Helmet>
                <title>{data.markdownRemark.frontmatter.title}</title>
            </Helmet>
            <Grid item className="header">
                <Header theme={theme} currPage="blog"/> 
            </Grid>
            <Grid item container className="content-wrapper" direction="column" spacing={0}>
                <Grid item container className="post-meta" direction="column" spacing={0}>
                    <Grid item className="title-text">
                        <Typography variant="h2"><strong>{data.markdownRemark.frontmatter.title}</strong></Typography>
                    </Grid>
                    <Grid item className="subtitle-text">
                        <Typography variant="h4"><strong>{data.markdownRemark.frontmatter.subtitle}</strong></Typography>
                    </Grid>
                    <Grid item container className="category-date" direction="row">
                        <Grid item className="category">
                            <Typography variant="h6" color="primary">
                                <StyledLink theme={theme} to={`/blog/${categoryAddition}`}>{data.markdownRemark.frontmatter.category}</StyledLink>
                            </Typography>
                        </Grid>
                        <Grid item className="date">
                            <Typography variant="h6" color="primary">{data.markdownRemark.frontmatter.date}</Typography>
                        </Grid>
                    </Grid>
                </Grid>
                <Grid item className="post-content">
                    <Container maxWidth="md">
                    <Typography variant="h5"><div dangerouslySetInnerHTML={{__html: data.markdownRemark.html}}></div></Typography>
                    </Container>
                </Grid>
                <Grid item container className="related-posts" direction="row" alignItems="center">
                    <Grid item className="related-posts-text" md={2} sm={12}>
                            <Typography variant="h5"><strong><StyledLink isTextColor theme={theme} to={`/blog/${categoryAddition}`}>RELATED POSTS</StyledLink></strong></Typography>
                    </Grid>
                    <Grid container item direction="row" md={10} sm={12}>
                        {data.allMarkdownRemark.edges.map( ({node}) => (
                            <Grid item key={node.id} md={4} sm={12}>
                                <RelatedPost className="related-post" theme={theme} content={{
                                    date: node.frontmatter.date,
                                    title: node.frontmatter.title,
                                    subtitle: node.frontmatter.subtitle,
                                    category: node.frontmatter.category,
                                    path: node.frontmatter.path
                                }}/>
                            </Grid>
                        ))} 
                    </Grid>
                </Grid>
                <Grid item container className="about-section" direction = "row" alignItems="center">
                    <Grid item className="about-title">
                        <Typography variant="h5" className="about-author-text"><strong><StyledLink isTextColor theme={theme} to="/">ABOUT THE AUTHOR</StyledLink></strong></Typography>
                    </Grid>
                    <Grid item container className="about-picture" justify="center">
                        <Grid item>
                            <Img className="picture" fixed={data.file.childImageSharp.fixed} />
                        </Grid>
                    </Grid>
                    <Grid item className="about-des">
                        <Typography variant="body1">
                            Thanks for reading! I usually write just for fun so if you enjoyed reading, check out my other blog posts <StyledLink theme={theme} to="/blog/">here</StyledLink>. Or, if you have any other questions,
                            feel free to contact me <StyledLink theme={theme} to="/contact/">here</StyledLink>. If you want to write something for my blog, feel free to reach out as well. Thanks once again for reading!
                        </Typography>
                    </Grid>
                </Grid>
            </Grid>
            <Grid item className="footer">
                <Footer theme={theme}/>
            </Grid>
        </Grid>
    )
}

export const Query = graphql`
    query BlogPage ($postid: String!, $relatedPosts: [String]!){
        markdownRemark(frontmatter: {postNumber: {eq: $postid}}){
            html
            frontmatter{
                category
                date
                title
                author
                subtitle
            }
        }
        file(relativePath: { eq: "sitProf.png" }) {
            childImageSharp {
            # Specify the image processing specifications right in the query.
            # Makes it trivial to update as your page's design changes.
                fixed (width: 100, height: 120){
                    ...GatsbyImageSharpFixed
                }
            }
        }
        allMarkdownRemark(filter: {frontmatter: {postNumber: {in: $relatedPosts}}}){
            edges{
                node{
                    frontmatter{
                        path
                        category
                        title
                        date
                        subtitle
                    }
                }
            }
        }
    }
`

export default styled(BlogPostTemplate)`
    position: relative;
    min-height: 100vh;
    overflow-x: hidden;
    align-items: center;

    .picture{
        border-radius: 3%;
    }
    .header{
        align-items: normal;
        height: 12vh;
    }
    .footer{
        height: 8vh;
    }
    .content-wrapper{
        padding-top: 3rem;
        min-height: 80vh;
        width: 75vw;
    }
    .post-content{
        margin-top: 1.5rem;
        padding-top: 1rem;
        padding-bottom: 1rem;
        border-top: 1px solid rgb(125,125,125);
        border-top: 1px solid rgba(255,255,255, 0.25);
        border-bottom: 1px solid rgb(125,125,125);
        border-bottom: 1px solid rgba(255,255,255, 0.25);
    }
    .related-posts{
        padding-top: 1rem;
        padding-bottom: 1rem;
        border-bottom: 1px solid rgb(125,125,125);
        border-bottom: 1px solid rgba(255,255,255, 0.25);
    }
    .about-section{
        padding-top: 1rem;
        padding-bottom: 1rem;
    }
    .category{
        margin-right: 2rem;
    }
    .category-date{
        margin-top: 0.5rem;
    }
    .subtitle-text{
        margin-top: 0.5rem;
    }
    .about-title{
        width: 22%;
    }
    .about-picture{
        width: 18%;
    }
    .about-des{
        width: 60%;
    }
    .related-posts-text{
    }
    @media only screen and (max-width: 960px){
        .header{
            align-items: normal;
            height: 8vh;
        }
        .footer{
            height: 12vh;
        }
        .related-posts{
            align-items: center;
            justify-content: center;
        }
        .related-posts-text{
            text-align: center;
            margin-bottom: 1rem;
        }
        .related-post{
            padding-top: .5rem;
            padding-bottom: .5rem;
        }
        .about-title{
            width: 100%;
        }
        .about-picture{
            width: 100%;
        }
        .about-des{
            width: 100%;
            margin-top: 1rem;
        }
        .about-section{
            text-align: center;
            align-items: center;
            justify-content: center;
        }
        .picture{
            margin-top: 1rem;
        }
    }
`