import React from 'react'
import {useTheme} from '@material-ui/core/styles'
import {Grid, Typography} from '@material-ui/core'
import Header from '../components/Header'
import Footer from '../components/Footer'
import styled from 'styled-components'
import Img from 'gatsby-image'
import StyledALink from '../components/StyledALink'
import {graphql} from 'gatsby'

function About({className, data}) {

    const theme = useTheme()

    return (
        <Grid className={className} direction="column" container spacing={0}>
            <Grid item className="header">
                <Header theme={theme} currPage="contact"/> 
            </Grid>
            <Grid item container className="content-wrapper" direction="row" spacing={0}>
                <Grid item container className="pic-content" md={5} sm={12} justify="flex-end" alignItems="center">
                    <Grid item>
                        <Img className="picture" fixed={data.file.childImageSharp.fixed}></Img>
                    </Grid>
                </Grid>
                <Grid item container className="text-content" md={7} sm={12} justify="center" alignItems="flex-start" direction="column">
                    <Grid item className="text-box">
                        <Typography variant="h4">
                            <strong>
                            Contact Me
                            </strong>
                        </Typography>
                    </Grid>
                    <Grid item className="text-box">
                        <Typography>
                            If you have any questions or just want to chat, you can reach me at my <StyledALink theme={theme} to="mailto: liyanghuang@ucla.edu">email</StyledALink>.
                            You can also find me on <StyledALink theme={theme} to="https://www.facebook.com/liyang.huang.da.wang/">Facebook</StyledALink>, <StyledALink theme={theme} to="https://www.instagram.com/liyangdawang/">Instagram</StyledALink>, 
                            and <StyledALink theme={theme} to="https://www.linkedin.com/in/liyang-huang-767b28154/">LinkedIn</StyledALink>. If you feel like playing a game of League or Valorant, add me 
                            as <StyledALink theme={theme} to="https://na.op.gg/summoner/userName=thechineserapper">TheChineseRapper</StyledALink> on League and <StyledALink theme={theme} to="https://tracker.gg/valorant/profile/riot/TheChineseRapper%23NA1/overview">TheChineseRapper#NA1</StyledALink> on Valorant.
                            If you want to see what I'm working on, check out my <StyledALink theme={theme} to="https://github.com/liyanghuang">Github</StyledALink>. Hope to hear from you soon!
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

export const query = graphql`
  query {
    file(relativePath: { eq: "treeProf.jpg" }) {
      childImageSharp {
        # Specify the image processing specifications right in the query.
        # Makes it trivial to update as your page's design changes.
        fixed (quality: 100, width: 250, height: 250){
          ...GatsbyImageSharpFixed
        }
      }
    }
  }
`

export default styled(About)`
    position: relative;
    min-height: 100vh;
    overflow-x: hidden;

    .picture{
        border-radius: 3%;
    }

    .text-box{
        width: 65%;
        margin-left: 4rem;
    }

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
    }
    @media only screen and (max-width: 960px){
        .text-content{
            height: 100%;
            margin-top: 1rem;
            align-items: center;
            justify-content: flex-start;
        }
        .text-box{
            text-align: center;
            margin-left: 0;
        }
        .pic-content{
            justify-content: center;
            align-items: flex-end;
        }
    }
`