
import React from 'react';
import { Switch, Route } from 'react-router-dom';

import { withStyles } from 'material-ui/styles';
import Paper from 'material-ui/Paper';

import VideoPlayer from '../components/VideoPlayer';
import Login from '../components/Login';
import Logout from '../components/Logout';
import Register from '../components/Register';
import VerifyEmail from '../components/VerifyEmail';
import Playlists from './Playlists';
import Home from './Home';
import MyAccount from './MyAccount';
import BrowseItemByCategory from '../components/BrowseItemsByCategory';
import SearchItems from './SearchItems';
import ProtectedRoute from './ProtectedRoute';

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
  setRef, setVideoOffsetHeight, updatePosition,
  closeVideo, user: {
    loggedIn, provider
  }, logOut
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
        exact path={'/logout/'}
        render={(props) => (
          <Logout {...props} logOut={logOut} />
        )}
      />
      <Route
        exact path={'/register'}
        render={(props) => (
          <Register {...props} logIn={logIn} />
        )}
      />
      <Route
        exact path={'/verify_email/:key/'}
        render={(props) => (
          <VerifyEmail {...props} />
        )}
      />
      <ProtectedRoute
        exact path={'/my_account/'}
        loggedIn={loggedIn}
        componentProps={{ provider }}
        component={MyAccount}
      />
      <Route
        exact
        path={'/'}
        render={(props) => (
          <Home {...props} />
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
