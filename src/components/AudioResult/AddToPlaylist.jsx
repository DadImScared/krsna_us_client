
import React, { Component } from 'react';

import { withStyles } from 'material-ui/styles';
import Dialog from 'material-ui/Dialog';
import List, { ListItem, ListItemText } from 'material-ui/List';
import Icon from 'material-ui/Icon';
import Divider from 'material-ui/Divider';
import TextField from 'material-ui/TextField';
import Checkbox from 'material-ui/Checkbox';
import Paper from 'material-ui/Paper';
import AppBar from 'material-ui/AppBar';
import Toolbar from 'material-ui/Toolbar';
import IconButton from 'material-ui/IconButton';
import Typography from 'material-ui/Typography';
import Slide from 'material-ui/transitions/Slide';

import CloseIcon from 'material-ui-icons/Close';
import AddBox from 'material-ui-icons/AddBox';

import { getPlaylistsWithItem } from '../../actions/playlist';
import { postItem, deleteItem } from '../../actions/playlistItem';

const styles = theme => ({
  appBar: {
    position: 'relative'
  },
  container: {
    [theme.breakpoints.up('md')]: {
      width: '80%',
      margin: '0 auto'
    }
  }
});

function Transition(props) {
  return <Slide direction="up" {...props} />;
}

class AddToPlaylist extends Component {
  constructor(...args) {
    super(...args);
    this.state = {
      playlists: {}
    };
  }

  async componentDidMount() {
    const newPlaylists = {};
    try {
      const { data } = await getPlaylistsWithItem(this.props.item.item_id);
      data.forEach((item) => {
        newPlaylists[item.playlist_id] = item;
      });
      this.setState({ playlists: newPlaylists });
    }
    catch ({ response: { data } }) {
      console.log(data);
    }
  }

  render() {
    const {
      item,
      isOpen,
      classes,
      openModal,
      closeModal,
      form,
      formErrors,
      updateForm
    } = this.props;
    return (
      <Dialog
        fullScreen
        open={isOpen}
        onClose={closeModal}
        transition={Transition}
      >
        <AppBar position='static' className={classes.appBar}>
          <Toolbar>
            <IconButton color="inherit" onClick={closeModal} aria-label="Close">
              <CloseIcon />
            </IconButton>
            <Typography variant='title'>
              Add to playlist
            </Typography>
          </Toolbar>
        </AppBar>
        <div className={classes.container}>
          <Paper>
            <div>
              <TextField
                id='playlistInput'
                onChange={(event) => updateForm(event, 'playlistInput')}
              />
            </div>
            <Divider/>
            <List>
              {this.renderPlaylists()}
            </List>
          </Paper>
        </div>
      </Dialog>
    );
  }

  renderPlaylists = () => {
    const { playlists } = this.state;
    return Object.keys(playlists).map((item, index) => (
      <ListItem key={index} onClick={() => this.toggleCheckbox(item)}>
        <Checkbox
          icon={
            <Icon color='secondary'>
              <AddBox />
            </Icon>
          }
          checked={playlists[item].hasItem}
          color='secondary'
        />
        <ListItemText primary={playlists[item].name} />
        <span>{playlists[item].hasItem ? 'true':'false'}</span>
      </ListItem>
    ));
  };

  toggleCheckbox = async (playlistId) => {
    const { playlists } = this.state;
    const newPlaylists = { ...playlists };
    if (playlists[playlistId].hasItem) {
      // delete item
      try {
        await deleteItem(playlists[playlistId].hasItem);
        newPlaylists[playlistId] = {
          ...newPlaylists[playlistId],
          hasItem: false
        };
      }
      catch ({ response: data }) {
        console.log(data);
      }
    }
    else {
      // add item
      try {
        const { data: { item_id } } = await postItem(playlistId, this.props.item.item_id);
        newPlaylists[playlistId] = {
          ...newPlaylists[playlistId],
          hasItem: item_id
        };
      }
      catch ({ response: data }) {
        console.log(data);
      }
    }
    this.setState({ playlists: newPlaylists });
  };
}

export default withStyles(styles)(AddToPlaylist);
