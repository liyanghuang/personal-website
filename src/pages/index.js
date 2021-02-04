import React from 'react';
import {Grid} from '@material-ui/core';
import MainButton from '../components/MainButton';
import MainButtonFill from '../components/MainButtonFill';
import { useTheme } from '@material-ui/core/styles';
import Header from '../components/Header';
import Footer from '../components/Footer';
import styled from 'styled-components';
import { Typography } from '@material-ui/core';
import Img from 'gatsby-image';
import {graphql, Link} from 'gatsby'


const ThemeLink = ({className, to, children}) => {
  return (
    <Link to={to} className={className}>{children}</Link>
  )
}

const ALink = ({className, to, children}) => {
  return (
    <a target="_blank" rel="noreferrer" className={className} href={to}>{children}</a>
  )
}
const StyledLink = styled(ThemeLink)`
  text-decoration: none;
  color: ${props => props.theme.palette.secondary.main};
  :hover{
    color:${props => props.theme.palette.primary.main};
  }
`
const StyledALink = styled(ALink)`
  text-decoration: none;
  color: ${props => props.theme.palette.secondary.main};
  :hover{
    color:${props => props.theme.palette.primary.main};
  }
`

const Index = ({className, data}) => {

  const theme = useTheme()

  return (
    <Grid className={className} direction="column" container spacing={0}>
      <Grid item className="header">
        <Header theme={theme}/> 
      </Grid>
      <Grid item container className="content-wrapper" direction="row" spacing={0}>
        <Grid item container alignItems="center" justify="flex-end" className="pic-content" xs={12} md={5}>
          <Grid item className="picture-box">
            <Img className="picture" fixed={data.file.childImageSharp.fixed} />
          </Grid>
        </Grid>
        <Grid item container className="text-content" justify="center" alignItems="flex-start" direction="column" spacing={2} xs={12} md={7}>
          <Grid item className="header-box">
            <Typography variant="h2" align="left" className="text">
              <strong>Hello, I'm Liyang.</strong>
            </Typography>
          </Grid>
          <Grid item className="text-box">
            <Typography align="left" className="text">
              This is my website. I am very <StyledLink theme={theme} to="/about">cool</StyledLink> yup. I do the beep beep boop boop with my computer and then it
              runs a program. <StyledLink theme={theme} to="/blog">Beepadaboop</StyledLink>. Please hire me. I do cool things like make Minecraft mobs. Elon Musk.
              Tesla. One Piece is very good. <StyledALink theme={theme} to="https://github.com/liyanghuang/personal-website">Code</StyledALink>. Click click.
            </Typography>
          </Grid>
          <Grid item container direction="row" className="button-box" justify="flex-start" alignItems="center" spacing={2}>
            <Grid item>
              <MainButtonFill text="Read My Woes" theme={theme} to="/blog"/>
            </Grid>
            <Grid item>
              <MainButton text="Hire My Broke Ass" theme={theme} to="/contact"/>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
      <Grid item className="footer">
        <Footer theme={theme}/>
      </Grid>
    </Grid>
  );
}

export const query = graphql`
  query {
    file(relativePath: { eq: "dog.png" }) {
      childImageSharp {
        # Specify the image processing specifications right in the query.
        # Makes it trivial to update as your page's design changes.
        fixed (width: 400){
          ...GatsbyImageSharpFixed
        }
      }
    }
  }
`

export default styled(Index)`

    
  position: relative;
  min-height: 100vh;
  overflow-x: hidden;

  .picture{
    border-radius:5%;
  }

  .text-box{
    width: 65%;
    margin-left:4rem;
  }

  .header-box{
    margin-left:4rem;
    width: 65%;
  }

  .button-box{
    width: 70%;
    margin-left: 3.5rem;
    margin-top: 0.8rem;
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
    display: flex;
    align-items: stretch;
  }
  @media only screen and (max-width: 960px){
    .button-box{
      margin-left:0.5rem;
    }
    .header-box{
      margin-left:1rem;
    }
    .text-box{
      margin-left:1rem;
    }
    .pic-content{
      justify-content: center;
    }
    .text-content{
      align-items: center;
    }
    .text{
      text-align: center;
    }
    .button-box{
      justify-content: center;
    }
  }
  .loaded .header-box{
    color: red;
  }

`