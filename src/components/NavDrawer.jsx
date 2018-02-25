
import React from 'react';
import { NavLink } from 'react-router-dom';

import { withStyles } from 'material-ui/styles';
import { MenuItem, MenuList } from 'material-ui/Menu';
import { ListItemText } from 'material-ui/List';
import Typography from 'material-ui/Typography';
import Divider from 'material-ui/Divider';

import ResponsiveDrawer from '../components/ResponsiveDrawer';

// import AudioPlayer from '../containers/AudioPlayer';
import AudioPlayer from '../components/AudioPlayer';

import CATEGORIES from '../categories';

const drawerWidth = 240;

const styles = theme => ({
  drawerHeader: {
    ...theme.mixins.toolbar,
    display: 'flex',
    paddingLeft: theme.spacing.unit * 2,
    alignItems: 'center'
  },
  drawerPaper: {
    width: 250,
    height: '100%',
    overflow: 'auto',
    [theme.breakpoints.up('md')]: {
      width: drawerWidth,
      position: 'relative'
    }
  },
  activeLink: {
    '& .menu-item-text': {
      color: theme.palette.primary.contrastText
    }
  }
});

const NavDrawer =  ({ classes, isOpen, handleClose, showPlayer }) => {
  const renderCategories = () => {
    const categoryLinks = Object.keys(CATEGORIES).map((category, index) => {
      return (
        <MenuItem onClick={handleClose} activeClassName={classes.activeLink} key={index} component={NavLink} to={`/${category}`}>
          <ListItemText primary={
            <Typography className={'menu-item-text'} color={'secondary'}>
              {typeof CATEGORIES[category] === 'string' ? CATEGORIES[category]: CATEGORIES[category].displayName}
            </Typography>
          } />
        </MenuItem>
      );
    });
    return (
      <MenuList>
        {categoryLinks}
      </MenuList>
    );
  };

  const renderNavDrawerContent = () => {
    return (
      <div style={{ position: 'fixed' }} className={classes.drawerPaper}>
        <div className={classes.drawerHeader}>
          <Typography type='title'>
            Krsna.us
          </Typography>
        </div>
        <Divider/>
        {renderCategories()}
        <Divider/>
        {
          showPlayer ?
            <AudioPlayer/>
            :
            null
        }
      </div>
    );
  };

  return (
    <ResponsiveDrawer
      isOpen={isOpen}
      handleClose={handleClose}
      drawerClasses={{
        paper: classes.drawerPaper
      }}
      id={'nav-drawer'}
    >
      {renderNavDrawerContent()}
    </ResponsiveDrawer>
  );
};

export default withStyles(styles)(NavDrawer);
