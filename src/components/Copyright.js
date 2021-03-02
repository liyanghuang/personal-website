import React from 'react';
import Typography from '@material-ui/core/Typography';

export default function Copyright({className}) {
  return (
    <Typography variant="body2" color="textSecondary" align="left" className={className}>
      {'Copyright © '}
      Liyang Huang
      {' '}
      {new Date().getFullYear()}
    </Typography>
  );
}
