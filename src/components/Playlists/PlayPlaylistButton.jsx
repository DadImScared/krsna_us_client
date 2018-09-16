
import React from 'react';

import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import IconButton from '@material-ui/core/IconButton';
import Icon from '@material-ui/core/Icon';

import PlayArrow from '@material-ui/icons/PlayArrow';

import { getItems } from '../../actions/playlistItem';
import * as AudioActions from '../../actions/audioplayer';

const PlayPlaylistButton = ({ playlistId, setPlaylist, index }) => {
  const loadPlaylist = async () => {
    const { data: { name, items } } = await getItems(playlistId);
    setPlaylist(name, items, index);
  };

  return (
    <IconButton onClick={loadPlaylist}>
      <Icon>
        <PlayArrow />
      </Icon>
    </IconButton>
  );
};

const mapDispatchToProps = dispatch => {
  return bindActionCreators({
    setPlaylist: AudioActions.setPlaylist
  }, dispatch);
};

export default connect(null, mapDispatchToProps)(PlayPlaylistButton);
