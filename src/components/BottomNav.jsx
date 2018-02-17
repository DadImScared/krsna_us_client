
import React, { Component } from 'react';

import classNames from 'classnames';

import { withStyles } from 'material-ui/styles';
import Hidden from 'material-ui/Hidden';
import Menu from 'material-ui-icons/Menu';
import BottomNavigation, { BottomNavigationAction } from 'material-ui/BottomNavigation';

import NavDrawer from '../components/NavDrawer';
import PlaylistPlay from 'material-ui-icons/PlaylistPlay';
import MusicNote from 'material-ui-icons/MusicNote';

const styles = theme => ({
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

class BottomNav extends Component {
  constructor(...args) {
    super(...args);
    this.state = {
      value: 4
    };
  }

  bottomNavChange = (event, value) => {
    const { mobileNavToggle } = this.props;
    let newValue;
    switch(value) {
    case 1:
      mobileNavToggle();
      newValue = 4;
      break;
    default:
      newValue = value;
    }
    this.setState({ value: newValue });
  };

  render() {
    const { classes, bottomOfPage, directionDown } = this.props;
    return (
      <Hidden mdUp>
        <BottomNavigation
          id={'bottom-nav'}
          className={classNames({
            [classes.hideNavBar]: !bottomOfPage && directionDown,
            [classes.showNavBar]: !directionDown
          })}
          style={{ width: '100%', position: 'sticky', bottom: '0' }}
          onChange={this.bottomNavChange}
          showLabels
          value={this.state.value}
        >
          <BottomNavigationAction label={'Audio player'} icon={<MusicNote />} />
          <BottomNavigationAction label={'Menu'} icon={<Menu />} />
          <BottomNavigationAction label={'Play lists'} icon={<PlaylistPlay />} />
        </BottomNavigation>
      </Hidden>
    );
  }
}

export default withStyles(styles)(BottomNav);
