
import React from 'react';

import { withStyles, createMuiTheme, MuiThemeProvider } from 'material-ui/styles';
import { indigo, blue } from 'material-ui/colors';
import Reboot from 'material-ui/CssBaseline';

import Navbar from '../Navbar';
import Main from '../../components/Main';
import NavDrawer from '../../components/NavDrawer';
import BottomNav from '../../components/BottomNav';
import styles from '../../styles/Base.css';

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

const View =  ({
  directionDown, bottomOfPage, shouldSticky,
  classes, mobileNavToggle, updatePosition,
  closeVideo, setWindowScroller, setVideoOffsetHeight,
  mobileNavOpen, videoplayer, showPlayer,
  userActions: {
    logIn, logOut
  },
  audioActions: {
    showPlayer: setShowPlayer
  },
  ...other
}) => (
  <MuiThemeProvider theme={theme}>
    <Reboot/>
    <div className={classes.appFrame}>
      <Navbar directionDown={directionDown}/>
      <NavDrawer setShowPlayer={setShowPlayer} showPlayer={showPlayer} isOpen={mobileNavOpen} handleClose={mobileNavToggle} />
      <Main
        setRef={setWindowScroller}
        shouldSticky={shouldSticky}
        directionDown={directionDown}
        updatePosition={updatePosition}
        closeVideo={closeVideo}
        setVideoOffsetHeight={setVideoOffsetHeight}
        videoplayer={videoplayer}
        logIn={logIn}
        logOut={logOut}
        {...other}
      />
      <BottomNav
        {...other}
        showPlayer={showPlayer}
        bottomOfPage={bottomOfPage}
        directionDown={directionDown}
        mobileNavToggle={mobileNavToggle}
      />
    </div>
  </MuiThemeProvider>
);

export default withStyles(styles)(View);
