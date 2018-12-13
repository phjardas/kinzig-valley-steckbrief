import { MuiThemeProvider, CssBaseline } from '@material-ui/core';
import React from 'react';
import Main from './Main';
import { theme } from './theme';

export default function App() {
  return (
    <MuiThemeProvider theme={theme}>
      <CssBaseline />
      <Main />
    </MuiThemeProvider>
  );
}
