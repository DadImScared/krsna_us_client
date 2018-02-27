
import React from 'react';
import { Route } from 'react-router-dom';

import { withStyles } from 'material-ui/styles';

import AllPlaylists from './AllPlaylists';
import MyPlaylists from './MyPlaylists';
import Playlist from './Playlist';
import { playlistForm } from './styles.css';

const styles = theme => ({
  ...playlistForm(theme)
});

const View = ({ match, classes }) => (
  <div>
    <Route
      exact
      path={`${match.url}/`}
      render={(props) => (
        <AllPlaylists classes={classes} {...props} />
      )}
    />
    <Route
      exact
      path={`${match.url}/me/`}
      render={(props) => (
        <MyPlaylists classes={classes} {...props} />
      )}
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
