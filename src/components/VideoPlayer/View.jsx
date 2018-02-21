
import React from 'react';

import ReactPlayer from 'react-player';

import classNames from 'classnames';

import { withStyles } from 'material-ui/styles';
import Button from 'material-ui/Button';

import { fixedVideo, fixedVideoScrollDown, videoWrapper, unStuckVideo } from './styles.css';

const styles = theme => ({
  ...fixedVideo(theme),
  ...fixedVideoScrollDown(theme),
  ...videoWrapper(theme),
  ...unStuckVideo(theme)
});

const View = ({
  classes,
  shouldSticky,
  url,
  closeVideo,
  directionDown,
  setVideoRef,
  setVideoContainerRef
}) => (
  <div
    style={{
      margin: '0 auto',
      position: 'relative',
      marginBottom: '5px'
    }}
    className={classes.videoWrapper}
    ref={setVideoContainerRef}
  >
    <div
      className={classNames({
        [classes.fixedVideo]: shouldSticky,
        [classes.unStuckVideo]: !shouldSticky,
        [classes.fixedVideoScrollDown]: directionDown && shouldSticky
      })}
      ref={setVideoRef}
    >
      <div style={{ height: '100%', width: '100%' }}>
        <ReactPlayer
          youtubeConfig={{
            'playerVars': {
              'controls': 1
            }
          }}
          height={'100%'}
          width={'100%'}
          url={url}
        />
        <Button onClick={closeVideo} variant='raised' size='small' color='secondary'>X</Button>
      </div>
    </div>
  </div>
);

export default withStyles(styles)(View);
