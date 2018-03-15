
import React from 'react';
import { Route } from 'react-router-dom';

import { withStyles } from 'material-ui/styles';

import ProtectedRoute from '../ProtectedRoute';
import AllPlaylists from './AllPlaylists';
import MyPlaylists from './MyPlaylists';
import Playlist from './Playlist';
import { Playlists as styles } from '../../styles/Playlists/';


const View = ({ match, classes, loggedIn }) => (
  <div>
    <Route
      exact
      path={`${match.url}/`}
      render={(props) => (
        <AllPlaylists classes={classes} {...props} />
      )}
    />
    <ProtectedRoute
      exact
      loggedIn={loggedIn}
      path={`${match.url}/me/`}
      componentProps={{ classes }}
      component={MyPlaylists}
    />
    <Route
      exact
      path={`${match.url}/:playlistId([0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12})/`}
      render={(props) => (
        <Playlist {...props} />
      )}
    />
  </div>
);

export default withStyles(styles)(View);
