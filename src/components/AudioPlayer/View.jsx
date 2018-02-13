
import React from 'react';

import ReactPlayer from 'react-player';

import { withStyles } from 'material-ui/styles';
import Card, { CardContent } from 'material-ui/Card';
import Typography from 'material-ui/Typography';

import UIControls from './UIControls';

const styles = theme => ({
  cardWrapper: {
    padding: theme.spacing.unit
  },
  card: {
    [theme.breakpoints.up('md')]: {
      height: '36vh'
    }
  },
  buttonControls: {
    display: 'flex'
  },
  withPlaylist: {
    justifyContent: 'center'
  },
  withSong: {
    justifyContent: 'space-around'
  }
});

const View = ({
  playing, playerType, items,
  currentIndex, currentSongUrl, currentSongName,
  togglePlaying, setPlaying, classes,
  playbackRate, played, duration,
  loaded, muted, volume, format,
  onProgress, setPlayerRef, setDuration,
  setVolume, onSeekDown, onSeekChange,
  onSeekUp
}) => {
  const seconds = duration * played;
  return (
    <div className={classes.cardWrapper}>
      <ReactPlayer
        ref={setPlayerRef}
        playing={playing}
        url={playerType === 'song' ? currentSongUrl:items[currentIndex] ? items[currentIndex].link:''}
        width={'0%'}
        height={'0%'}
        playbackRate={playbackRate}
        volume={muted ? 0:volume}
        onPlay={() => setPlaying(true)}
        onPause={() => setPlaying(false)}
        onProgress={onProgress}
        onEnded={() => {
          if (playing) togglePlaying();
        }}
        onDuration={setDuration}
      />
      <Card className={classes.card}>
        <CardContent>
          <Typography noWrap={true}>{currentSongName}</Typography>
        </CardContent>
        <UIControls
          played={played}
          format={format}
          seconds={seconds}
          classes={classes}
          togglePlaying={togglePlaying}
          volume={volume}
          setVolume={setVolume}
          onSeekDown={onSeekDown}
          onSeekChange={onSeekChange}
          onSeekUp={onSeekUp}
          playing={playing}
          playerType={playerType}
        />
      </Card>
    </div>
  );
};

export default withStyles(styles)(View);
