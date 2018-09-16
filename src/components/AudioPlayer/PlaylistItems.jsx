
import React, { Component } from 'react';

import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Hidden from '@material-ui/core/Hidden';
import Icon from '@material-ui/core/Icon';
import Tooltip from '@material-ui/core/Tooltip';
import Popover from '@material-ui/core/Popover';
import Typography from '@material-ui/core/Typography';

import Info from '@material-ui/icons/Info';

class PlaylistItem extends Component {
  constructor(...args) {
    super(...args);
    this.state = {
      anchorEl: null,
      item: null
    };
  }

  render() {
    const { playerType, showPlayer, classes, items, currentIndex, updateIndex } = this.props;
    const { anchorEl, item } = this.state;
    return (
      <div>
        {
          playerType === 'playlist' && showPlayer ?
            <List classes={{ root: classes.playlistItemsContainer }}>
              {
                items.map((item, index) => (
                  <ListItem
                    id={`playlist-item-${index}`}
                    className={`${currentIndex === index ? `${classes.currentlyPlaying}`:''}`}
                    dense
                    key={`${item.item_id}-${index}`}
                  >
                    <div>
                      <Icon
                        className={classes.infoIcon}
                        onClick={(event) => this.handlePopoverOpen(event, item)}
                        color='secondary'>
                        <Info />
                      </Icon>
                    </div>
                    <Hidden lgDown>
                      <Tooltip classes={{
                        tooltip: classes.tooltip,
                        popper: `${classes.playlistPopoverContainer}`
                      }} placement='top' title={item.title}>
                        <ListItemText onClick={() => updateIndex(index)} primary={
                          <Typography noWrap>
                            {item.title}
                          </Typography>
                        } />
                      </Tooltip>
                    </Hidden>
                    <Hidden xlUp>
                      <ListItemText onClick={() => updateIndex(index)} primary={
                        <Typography noWrap>
                          {item.title}
                        </Typography>
                      } />
                    </Hidden>
                  </ListItem>
                ))
              }
            </List>
            :
            null
        }
        {
          item ?
            <Popover
              open={!!anchorEl}
              anchorEl={anchorEl}
              classes={{
                paper: classes.playlistPopoverContainer
              }}
              anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'left'
              }}
              transformOrigin={{
                vertical: 'top',
                horizontal: 'left'
              }}
              onClose={this.handlePopoverClose}
              disableRestoreFocus
            >
              <Typography>
                {item.title}
              </Typography>
            </Popover>
            :
            null
        }
      </div>
    );
  }

  handlePopoverOpen = (event, item) => {
    this.setState({ anchorEl: event.target, item });
  };

  handlePopoverClose = () => this.setState({ anchorEl: null, item: null });
}

export default PlaylistItem;
