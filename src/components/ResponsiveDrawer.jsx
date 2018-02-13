
import React from 'react';
import Drawer from 'material-ui/Drawer';
import Hidden from 'material-ui/Hidden';

const ResponsiveDrawer = ({ drawerClasses, anchor = 'left', children, isOpen, handleClose, id }) => {
  return (
    [
      <Hidden mdUp key={`hidden-up-drawer-${id}`}>
        <Drawer
          disableRestoreFocus={true}
          type="temporary"
          anchor={anchor}
          open={isOpen}
          onClose={handleClose}
          classes={drawerClasses}
        >
          {children}
        </Drawer>
      </Hidden>,
      <Hidden smDown key={`hidden-down-drawer-${id}`}>
        <Drawer
          type="permanent"
          open
          anchor={anchor}
          classes={drawerClasses}
        >
          {children}
        </Drawer>
      </Hidden>
    ]
  );
};

export default ResponsiveDrawer;
