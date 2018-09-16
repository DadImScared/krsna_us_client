
import React from 'react';
import { NavLink, Link } from 'react-router-dom';

import { withStyles } from '@material-ui/core/styles';
import MenuItem from '@material-ui/core/MenuItem';
import MenuList from '@material-ui/core/MenuList';
import ListItemText from '@material-ui/core/ListItemText';
import Typography from '@material-ui/core/Typography';
import Icon from '@material-ui/core/Icon';
import Divider from '@material-ui/core/Divider';

import Close from '@material-ui/icons/Close';

import ResponsiveDrawer from '../components/ResponsiveDrawer';

import AudioPlayer from '../components/AudioPlayer';

import CATEGORIES from '../categories';
import styles from '../styles/NavDrawer.css';


const NavDrawer =  ({ classes, isOpen, handleClose, showPlayer, setShowPlayer }) => {
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
        <div id='navDrawerTop' className={classes.drawerHeader}>
          <Link to='/'>
            <Typography type='title'>
              Krsna.us
            </Typography>
          </Link>
        </div>
        <Divider/>
        {renderCategories()}
        <Divider/>
        {
          showPlayer ?
            <div style={{ position: 'relative' }}>

              <Icon onClick={() => setShowPlayer(false)} color='error' className={classes.closeIcon}>
                <Close />
              </Icon>

              <AudioPlayer/>
            </div>
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
