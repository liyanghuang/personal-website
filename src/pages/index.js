import React from 'react';
import Box from '@material-ui/core/Box';
import MainButton from '../components/MainButton';
import MainButtonFill from '../components/MainButtonFill';
import { useTheme } from '@material-ui/core/styles';
import Header from '../components/Header';
import Footer from '../components/Footer';
import styled from 'styled-components';

const Index = ({className}) => {

  return (
    <Box className={className}>
      <Header/> 
        <Box className="content-wrapper">
          <Box component="span" className="pic-content"><p>hello</p></Box>
          <Box component="span" className="text-content"><p>hello</p></Box>
        </Box>
      <Footer/>
    </Box>
  );
}

export default styled(Index)`
  
  position: relative;
  min-height: 100vh;

  .pic-content{
    display: inline-block;
    width: 50%;
  }

  .text-content{
    display: inline-block;
    width: 50%;
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
    padding-top: 8rem;
    padding-bottom: 4rem;
  }
`