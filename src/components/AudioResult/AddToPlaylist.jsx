
import React, { Component } from 'react';

import { Link } from 'react-router-dom';

import { withStyles } from 'material-ui/styles';
import Dialog from 'material-ui/Dialog';
import Button from 'material-ui/Button';
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

import { getPlaylistsWithItem, createPlaylist } from '../../actions/playlist';
import { postItem, deleteItem } from '../../actions/playlistItem';
import { AddToPlaylist as styles } from '../../styles/AudioResult';

function Transition(props) {
  return <Slide direction="up" {...props} />;
}

class AddToPlaylist extends Component {
  constructor(...args) {
    super(...args);
    this.state = {
      playlists: {},
      errorMessage: false
    };
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
            <Typography style={{ wordBreak: 'break-word' }}>
              {item.title}
            </Typography>
          </Toolbar>
        </AppBar>
        <div className={classes.container}>
          <Paper>
            <div>
              {
                this.state.errorMessage ?
                  <div>
                    <Typography>
                      There is an error please <Link to={'/login'}>log in</Link> and try again
                    </Typography>
                  </div>
                  :
                  <div>
                    <div className={classes.formContainer}>
                      <div className={classes.formWrapper}>
                        <TextField
                          id='name'
                          error={!!formErrors['name']}
                          helperText={formErrors['name'] || ''}
                          value={form.name || ''}
                          onChange={(event) => updateForm(event, 'name')}
                          classes={{ root: classes.formField }}
                        />
                        <Button onClick={this.createPlaylistAndItem} variant='raised' color='primary'>
                          create playlist
                        </Button>
                      </div>
                    </div>
                    <Divider/>
                    <List>
                      {this.renderPlaylists()}
                    </List>
                  </div>
              }
            </div>
          </Paper>
        </div>
      </Dialog>
    );
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
    catch ({ response: { data, status } }) {
      this.setState({ errorMessage: true  });
    }
  }

  componentWillUnmount() {
    this.props.clearErrors();
    this.props.clearFields();
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

  createPlaylistAndItem = async () => {
    const { form, item, handleErrorResponse, clearFields, clearErrors } = this.props;
    const newData = {
      ...this.state
    };
    try {
      const { data } = await createPlaylist(form.name);
      const { data: { item_id } } = await postItem(data.playlist_id, item.item_id);
      newData.playlists = {
        ...this.state.playlists,
        [data.playlist_id]: {
          ...data,
          hasItem: item_id
        }
      };
      clearFields();
      clearErrors();
    }
    catch ({ response: { data, status } }) {
      if (status === 401) {
        newData.errorMessage = true;
      }
      else {
        handleErrorResponse(data);
      }
    }
    this.setState(newData);
  };
}

export default withStyles(styles)(AddToPlaylist);
