import React from 'react';
import Steckbrief from './Steckbrief';
import { Paper, withStyles } from '@material-ui/core';
import { Favorite as HeartIcon } from '@material-ui/icons';

function Main({ classes }) {
  return (
    <Paper className={classes.paper}>
      <h1 className={classes.title}>Kinzig Valley Steckbrief</h1>
      <div className={classes.intro}>
        Mit diesem Formular kannst du ganz bequem deinen Steckbrief für unsere Pinnwand erstellen. Einfach ausfüllen, ausdrucken, aufhängen!
      </div>
      <Steckbrief className={classes.steckbrief} />
      <footer className={classes.footer}>
        Gebastelt mit <HeartIcon className={classes.footerIcon} /> von{' '}
        <a href="https://jardas.de/" target="_blank" rel="noopener noreferrer">
          Philipp Jardas
        </a>
      </footer>
    </Paper>
  );
}

const styles = ({ breakpoints, spacing, palette, typography }) => ({
  paper: {
    padding: `${spacing.unit}px ${spacing.unit * 3}px ${spacing.unit * 2}px`,
    margin: 0,
    minHeight: '100vh',
    display: 'flex',
    flexDirection: 'column',
    [breakpoints.up('lg')]: {
      width: 1280 - spacing.unit * 3 * 2,
      margin: `${spacing.unit * 3}px auto`,
      minHeight: `calc(100vh - ${spacing.unit * 3 * 2}px)`,
    },
  },
  title: {
    ...typography.h4,
  },
  intro: {
    ...typography.body1,
    marginBottom: spacing.unit,
  },
  steckbrief: {
    flex: 1,
  },
  footer: {
    ...typography.caption,
    marginTop: spacing.unit * 2,
    textAlign: 'end',
    '& a': {
      color: 'inherit',
    },
  },
  footerIcon: {
    fontSize: '1em',
    color: palette.error.main,
  },
});

export default withStyles(styles)(Main);
