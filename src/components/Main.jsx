
import React from 'react';
import { Switch, Route } from 'react-router-dom';

import { withStyles } from 'material-ui/styles';
import Paper from 'material-ui/Paper';

import VideoPlayer from '../components/VideoPlayer';
import Login from '../components/Login';
import Register from '../components/Register';
import Playlists from './Playlists';
import BrowseItemByCategory from '../components/BrowseItemsByCategory';
import SearchItems from './SearchItems';

const styles = theme => ({
  content: {
    width: '100%',
    padding: theme.spacing.unit * 3,
    minHeight: 'calc(100vh - 112px)',
    marginTop: 56,
    [theme.breakpoints.up('sm')]: {
      minHeight: 'calc(100vh - 64px)',
      marginTop: 64
    }
  }
});

const Main = ({
  classes, shouldSticky, directionDown,
  videoplayer, videoOffsetHeight, logIn,
  setRef, setVideoOffsetHeight, updatePosition, closeVideo
}) => (
  <Paper id={'main-container'} className={classes.content}>
    {
      videoplayer.show ?
        <VideoPlayer
          shouldSticky={shouldSticky}
          directionDown={directionDown}
          closeVideo={closeVideo}
          setOffsetHeight={setVideoOffsetHeight}
          offsetHeight={videoOffsetHeight}
          updatePosition={updatePosition}
          url={videoplayer.url}
        />
        :
        null
    }
    <Switch>
      <Route
        exact path={'/login'}
        render={(props) => (
          <Login {...props} logIn={logIn} />
        )}
      />
      <Route
        exact path={'/register'}
        render={(props) => (
          <Register {...props} logIn={logIn} />
        )}
      />
      <Route
        path={'/playlists'}
        render={(props) => (
          <Playlists {...props} />
        )}
      />
      <Route
        exact path={'/:category'}
        render={
          (props) => (
            <BrowseItemByCategory
              {...props}
              setRef={setRef}
            />
          )
        }
      />
      <Route
        path={'/search/:query'}
        render={(props) =>
          <SearchItems
            {...props}
            setRef={setRef}
          />
        }
      />
    </Switch>
  </Paper>
);

export default withStyles(styles)(Main);
