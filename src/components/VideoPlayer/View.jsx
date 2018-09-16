
import React from 'react';

import ReactPlayer from 'react-player';

import classNames from 'classnames';

import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';

import styles from '../../styles/VideoPlayer.css';


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
