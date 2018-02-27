
import React from 'react';

import { withRouter, NavLink } from 'react-router-dom';

import classNames from 'classnames';

import { withStyles } from 'material-ui/styles';
import AppBar from 'material-ui/AppBar';
import Toolbar from 'material-ui/Toolbar';
import Hidden from 'material-ui/Hidden';
import Button from 'material-ui/Button';

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
  },
  link: {
    color: theme.palette.text.secondary
  },
  activeLink: {
    color: theme.palette.text.primary
  },
  hiddenLg: {
    [theme.breakpoints.up('lg')]: {
      display: 'none'
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
      <div style={{ display: 'flex' }}>
        <Hidden mdDown>
          <Button
            component={NavLink}
            activeClassName={classes.activeLink}
            className={classes.link}
            exact
            to={'/playlists/'}
          >
            all playlists
          </Button>
          <Button
            component={NavLink}
            activeClassName={classes.activeLink}
            className={classes.link}
            to={'/playlists/me/'}
          >
            my playlists
          </Button>
        </Hidden>
        <MoreOptions classes={classes} user={user} actions={userActions} history={history} />
      </div>
    </Toolbar>
  </AppBar>
);

export default withRouter(withStyles(styles)(View));
