
import React from 'react';

import { withRouter } from 'react-router-dom';

import classNames from 'classnames';

import { withStyles } from 'material-ui/styles';
import AppBar from 'material-ui/AppBar';
import Toolbar from 'material-ui/Toolbar';

import SearchBar from './SearchBar';
import MoreOptions from './MoreOptions';

const drawerWidth = 240;

const styles = theme => ({
  appBar: {
    position: 'fixed',
    marginLeft: drawerWidth,
    [theme.breakpoints.up('md')]: {
      width: `calc(100% - ${drawerWidth}px)`
    }
  },
  showNavBar: {
    [theme.breakpoints.down('md')]: {
      transition: theme.transitions.create(['opacity'], {
        easing: theme.transitions.easing.easeIn,
        duration: theme.transitions.duration.enteringScreen
      }),
      opacity: 1
    }
  },
  hideNavBar: {
    [theme.breakpoints.down('md')]: {
      transition: theme.transitions.create(['opacity'], {
        easing: theme.transitions.easing.easeOut,
        duration: theme.transitions.duration.leavingScreen
      }),
      opacity: 0
    }
  }
});

const View = ({
  classes,
  directionDown,
  history,
  userActions,
  searchActions,
  user,
  query,
  categories
}) => (
  <AppBar position={'fixed'} className={classes.appBar} classes={{
    root: classNames({
      [classes.hideNavBar]: directionDown,
      [classes.showNavBar]: !directionDown
    })
  }}>
    <Toolbar style={{ justifyContent: 'space-between' }}>
      <SearchBar query={query} categories={categories} actions={searchActions} history={history} />
      <MoreOptions user={user} actions={userActions} history={history} />
    </Toolbar>
  </AppBar>
);

export default withRouter(withStyles(styles)(View));
