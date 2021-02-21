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
import {graphql} from 'gatsby';

const Index = ({className, data}) => {

  const theme = useTheme()

  return (
    <Grid className={className} direction="column" container spacing={0}>
      <Grid item className="header">
        <Header theme={theme} currPage="default"/> 
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
              <strong>Hey, I'm Liyang!</strong>
            </Typography>
          </Grid>
          <Grid item className="text-box">
            <Typography align="left" className="text">
              I'm a college student currently finishing up my sophomore year at UCLA. I enjoy playing games and making them too! 
              In my free time you can find me doing random things with my friends, or binging shows at home.
            </Typography>
          </Grid>
          <Grid item container direction="row" className="button-box" justify="flex-start" alignItems="center" spacing={2}>
            <Grid item>
              <MainButtonFill text="Read My Woes" theme={theme} to="/blog"/>
            </Grid>
            <Grid item>
              <MainButton text="Get In Touch" theme={theme} to="/contact"/>
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
    file(relativePath: { eq: "sitPic.jpg" }) {
      childImageSharp {
        # Specify the image processing specifications right in the query.
        # Makes it trivial to update as your page's design changes.
        fixed (quality: 100, width: 350, height: 350){
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
    border-radius:3%;
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
    margin-top: 0.4rem;
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