
import React from 'react';

import { withRouter, NavLink } from 'react-router-dom';

import classNames from 'classnames';

import { withStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Hidden from '@material-ui/core/Hidden';
import Button from '@material-ui/core/Button';

import SearchBar from './SearchBar';
import MoreOptions from './MoreOptions';

import { Navbar as styles } from '../../styles/Navbar';

const View = ({
  classes,
  directionDown,
  history,
  userActions,
  searchActions,
  user,
  query,
  categories,
  location
}) => (
  <AppBar position={'fixed'} className={classes.appBar} classes={{
    root: classNames({
      [classes.hideNavBar]: directionDown,
      [classes.showNavBar]: !directionDown
    })
  }}>
    <Toolbar style={{ justifyContent: 'space-between' }}>
      <SearchBar location={location} query={query} categories={categories} actions={searchActions} history={history} />
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
