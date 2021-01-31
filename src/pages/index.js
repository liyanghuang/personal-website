import React from 'react';
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import ProTip from '../components/ProTip';
import Link from '../components/Link';
import Copyright from '../components/Copyright';
import MainButton from '../components/MainButton';
import MainButtonFill from '../components/MainButtonFill';
import { useTheme } from '@material-ui/core/styles';
import HeaderButton from '../components/HeaderButton';

export default function Index() {

  const theme = useTheme()

  return (
    <Container maxWidth="sm">
      <Box my={4}>
        <MainButton text="Hire My Broke Ass" theme={theme}/>
        <MainButtonFill text="Read My Woes" theme={theme}/>
        <Typography variant="h4" component="h1" gutterBottom>
          Gatsby v4-beta example
        </Typography>
        <Link to="/about" color="secondary">
          Go to the about page
        </Link>
        <ProTip />
        <Copyright />
      </Box>
      <HeaderButton text="Testing" theme={theme}/>
    </Container>
  );
}
