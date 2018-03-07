
import React, { Component } from 'react';

import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import { withTheme } from 'material-ui/styles';

import * as AudioActionCreators from '../../actions/audioplayer';

import View from './View';

class AudioPlayer extends Component {
  constructor(...args) {
    super(...args);
    this.state = {
      volume: 0.2,
      played: 0,
      loaded: 0,
      duration: 0,
      playbackRate: 1.0,
      muted: false,
      seeking: false,
      shouldReset: false
    };
  }

  render() {
    return (
      <View
        {...this.state}
        {...this.props}
        format={this.format}
        onProgress={this.onProgress}
        onSeekDown={this.onSeekMouseDown}
        onSeekChange={this.onSeekChange}
        onSeekUp={this.onSeekMouseUp}
        setDuration={this.setDuration}
        setVolume={this.setVolume}
        setPlayerRef={this.setPlayerRef}
        changeSong={this.changeSong}
        color={this.props.theme.palette.text.primary}
      />
    );
  }

  onProgress = state => {
    // We only want to update time slider if we are not currently seeking
    if (!this.state.seeking) {
      this.setState(state);
    }
  };

  onSeekMouseDown = () => {
    this.setState({ seeking: true });
  };

  onSeekChange = (value) => {
    this.setState({ played: parseFloat(value) });
  };

  onSeekMouseUp = (value) => {
    this.setState({ seeking: false });
    this.player.seekTo(parseFloat(value));
  };

  setDuration = (duration) => {
    this.setState({ duration });
  };

  setPlayerRef = (el) => this.player = el;

  setVolume = (val) => this.setState({ volume: parseFloat(val) });

  format = (seconds) => {
    const date = new Date(seconds * 1000);
    const hh = date.getUTCHours();
    const mm = date.getUTCMinutes();
    const ss = date.getUTCSeconds();

    return `${
      hh ?
        hh >= 10
          ? ('0' + hh).slice(-2) + ':'
          :
          ('0' + hh).slice(-1) + ':'
        :
        ''}${('0' + mm).slice(-2)}:${('0' + ss).slice(-2)
    }`;
  };

  changeSong = (change) => {
    let newIndex = this.props.currentIndex + change;
    if (newIndex < 0) {
      newIndex = 0;
      this.onSeekChange(0);
      this.onSeekMouseUp(0);
      this.setState({ shouldReset: true });
      setTimeout(()=> this.setState({ shouldReset: false }), 50);
    }
    else if (newIndex > this.props.items.length - 1) {
      newIndex = 0;
    }
    document.querySelector(`#playlist-item-${newIndex}`).scrollIntoView({ behavior: 'smooth' });
    this.props.updateIndex(newIndex);
  };
}

const mapStateToProps = ({
  audioplayer: {
    name,
    playing,
    items,
    playerType,
    showPlayer,
    currentIndex,
    currentSongUrl,
    currentSongName
  }
}) => ({
  name,
  playing,
  items,
  playerType,
  showPlayer,
  currentIndex,
  currentSongUrl,
  currentSongName
});

const mapDispatchToProps = dispatch => {
  return bindActionCreators({
    togglePlaying: AudioActionCreators.togglePlaying,
    setPlaying: AudioActionCreators.setPlaying,
    updateIndex: AudioActionCreators.updateIndex
  }, dispatch);
};

export default withTheme()(connect(mapStateToProps, mapDispatchToProps)(AudioPlayer));
