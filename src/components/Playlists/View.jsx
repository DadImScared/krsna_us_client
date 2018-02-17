
import React from 'react';
import { Route } from 'react-router-dom';

import { withStyles } from 'material-ui/styles';

import AllPlaylists from './AllPlaylists';
import MyPlaylists from './MyPlaylists';
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
  </div>
);

export default withStyles(styles)(View);
