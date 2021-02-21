import React from 'react';
import PropTypes from 'prop-types';
import { Helmet } from 'react-helmet';
import CssBaseline from '@material-ui/core/CssBaseline';
import { StylesProvider, ThemeProvider } from '@material-ui/core/styles';
import theme from '../../src/theme';
import favicon from '../../src/images/favicon.ico'

export default function TopLayout(props) {
  return (
    <React.Fragment>
      <Helmet>
        <link rel="icon" href={favicon} />
        <meta name="viewport" content="minimum-scale=1, initial-scale=1, width=device-width" />
        <link href="https://fonts.googleapis.com/css?family=Asap:400,500,600,700&display=block" rel="stylesheet" />
        <title>liyanghuang.com</title>
      </Helmet>
      <StylesProvider>
      <ThemeProvider theme={theme}>
        {/* CssBaseline kickstart an elegant, consistent, and simple baseline to build upon. */}
        <CssBaseline />
        {props.children}
      </ThemeProvider>
      </StylesProvider>
    </React.Fragment>
  );
}

TopLayout.propTypes = {
  children: PropTypes.node,
};
