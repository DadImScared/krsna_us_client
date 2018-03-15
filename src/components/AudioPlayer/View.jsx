
import React from 'react';

import ReactPlayer from 'react-player';

import { withStyles } from 'material-ui/styles';
import Card, { CardContent } from 'material-ui/Card';

import Marquee from './Marquee';
import UIControls from './UIControls';
import PlaylistItems from './PlaylistItems';
import styles from '../../styles/AudioPlayer.css';


const View = ({
  playing, playerType, items,
  currentIndex, currentSongUrl, currentSongName,
  togglePlaying, setPlaying, classes,
  playbackRate, played, duration,
  loaded, muted, volume, format,
  onProgress, setPlayerRef, setDuration,
  setVolume, onSeekDown, onSeekChange,
  onSeekUp, showPlayer, updateIndex, changeSong,
  color, shouldReset
}) => {
  const seconds = duration * played;

  return (
    <div id='audioPlayer' className={classes.cardWrapper}>
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
          if (playerType === 'song') {
            if (playing) togglePlaying();
          }
          else {
            changeSong(1);
            setPlaying(true); // need to set playing to true again because onEnded stops playing
          }
        }}
        onDuration={setDuration}
      />
      <Card>
        <CardContent>
          {
            (currentSongName && playerType === 'song') || items[currentIndex] ?
              <div>
                <Marquee
                  shouldReset={shouldReset}
                  Size={'p'}
                  items={[playerType === 'song' ? currentSongName:items[currentIndex].title]}
                  timeToChange={0}
                  timeToCross={7000}
                  color={color}
                  pause={playing}
                />
              </div>
              :
              null
          }
        </CardContent>
        <UIControls
          played={played}
          format={format}
          seconds={seconds}
          classes={classes}
          items={items}
          changeSong={changeSong}
          currentIndex={currentIndex}
          updateIndex={updateIndex}
          togglePlaying={togglePlaying}
          volume={volume}
          setVolume={setVolume}
          onSeekDown={onSeekDown}
          onSeekChange={onSeekChange}
          onSeekUp={onSeekUp}
          playing={playing}
          playerType={playerType}
        />
        <PlaylistItems
          playerType={playerType}
          showPlayer={showPlayer}
          classes={classes}
          items={items}
          currentIndex={currentIndex}
          updateIndex={updateIndex}
        />
      </Card>
    </div>
  );
};

export default withStyles(styles)(View);
