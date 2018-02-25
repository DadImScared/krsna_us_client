
import React from 'react';

import { withStyles, createMuiTheme, MuiThemeProvider } from 'material-ui/styles';
import { indigo, blue } from 'material-ui/colors';
import Reboot from 'material-ui/Reboot';

import Navbar from '../Navbar';
import Main from '../../components/Main';
import NavDrawer from '../../components/NavDrawer';
import BottomNav from '../../components/BottomNav';

const theme = createMuiTheme({
  palette: {
    primary: {
      light: indigo[100],
      main: indigo[500],
      dark: indigo[700]
    },
    secondary: {
      main: blue['A200'],
      light: blue['500'],
      dark: blue['700']
    },
    type: 'dark'
  }
});

const styles = theme => ({
  appFrame: {
    position: 'relative',
    display: 'flex',
    width: '100%',
    height: '100%',
    flexWrap: 'wrap',
    [theme.breakpoints.up('md')]: {
      flexWrap: 'nowrap'
    }
  },
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

const View =  ({
  directionDown, bottomOfPage, shouldSticky,
  classes, mobileNavToggle, updatePosition,
  closeVideo, setWindowScroller, setVideoOffsetHeight,
  mobileNavOpen, videoplayer, showPlayer,
  userActions: {
    logIn, logOut
  }, ...other
}) => (
  <MuiThemeProvider theme={theme}>
    <Reboot/>
    <div className={classes.appFrame}>
      <Navbar directionDown={directionDown}/>
      <NavDrawer showPlayer={showPlayer} isOpen={mobileNavOpen} handleClose={mobileNavToggle} />
      <Main
        setRef={setWindowScroller}
        shouldSticky={shouldSticky}
        directionDown={directionDown}
        updatePosition={updatePosition}
        closeVideo={closeVideo}
        setVideoOffsetHeight={setVideoOffsetHeight}
        videoplayer={videoplayer}
        logIn={logIn}
      />
      <BottomNav
        {...other}
        bottomOfPage={bottomOfPage}
        directionDown={directionDown}
        mobileNavToggle={mobileNavToggle}
      />
    </div>
  </MuiThemeProvider>
);

export default withStyles(styles)(View);
