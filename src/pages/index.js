import React from 'react';
import Box from '@material-ui/core/Box';
import MainButton from '../components/MainButton';
import MainButtonFill from '../components/MainButtonFill';
import { useTheme } from '@material-ui/core/styles';
import Header from '../components/Header';
import Footer from '../components/Footer';
import styled from 'styled-components';
import { Typography } from '@material-ui/core';
import Img from 'gatsby-image';
import {graphql} from 'gatsby'

const Index = ({className, data}) => {

  const theme = useTheme()

  return (
    <Box className={className}>
      <Header theme={theme}/> 
        <Box className="content-wrapper">
          <Box component="span" className="pic-content">
            <Box className="picture-box">
              <Img className="picture" fluid={data.file.childImageSharp.fluid} />
            </Box>
          </Box>
          <Box component="span" className="text-content">
            <Box className="vertical-container">
              <Box className="header-box">
                <Typography variant="h2"><strong>Hello, I'm Liyang.</strong></Typography>
              </Box>
              <Box className="text-box">
                <Typography>
                  This is my website. I am very cool yup. I do the beep beep boop boop with my computer and then it
                  runs a program. Beepadaboop. Please hire me. I do cool things like make Minecraft mobs. Elon Musk.
                  Tesla. One Piece is very good. Code. Click click.
                </Typography>
              </Box>
              <Box className="button-box">
                <Box component="span" className="button1">
                  <MainButtonFill text="Read My Woes" theme={theme}/>
                </Box>
                <Box component="span" className="button2">
                  <MainButton text="Hire My Broke Ass" theme={theme}/>
                </Box>
              </Box>
            </Box>
          </Box>
        </Box>
      <Footer theme={theme}/>
    </Box>
  );
}

export const query = graphql`
  query {
    file(relativePath: { eq: "dog.png" }) {
      childImageSharp {
        # Specify the image processing specifications right in the query.
        # Makes it trivial to update as your page's design changes.
        fluid {
          ...GatsbyImageSharpFluid_noBase64
        }
      }
    }
  }
`

export default styled(Index)`
  
  position: relative;
  min-height: 100vh;

  .pic-content{
    width: 47%;
    display: flex;
    align-items: center;
    justify-content: flex-end;
  }

  .picture-box{
    margin-right: 3rem;
    width: 50%;
    height: 70%;
    display: flex;
  }

  .picture{
    width: 100%;
    border-radius:5%;
  }

  .text-content{
    display: flex;
    align-items: center;
    width: 53%;
  }

  .vertical-container{
    display: flex;
    justify-content:center;
    flex-direction: column;
    height: 60%;
    width: 100%;
  }

  .text-box{
    width: 65%;
    margin-bottom: 2rem;
    margin-left: 1rem;
  }

  .header-box{
    width: 65%;
    margin-bottom: 1rem;
    margin-left: 1rem;
  }

  .button-box{
    width: 65%;
    margin-bottom: 1rem;
    margin-left: 1rem;
  }

  .button-box .button1{
    margin-right: 2rem;
  }

  .button-box .button2{
  }

  header{
    position:absolute;
    top:0;
    left:0;
    right:0;
  }
  footer{
    position:absolute;
    bottom:0;
    left:0;
    right:0;
  }
  .content-wrapper{
    padding-top: 6rem;
    padding-bottom: 4rem;
    height: 100vh;
    display: flex;
    align-items: stretch;
  }
`