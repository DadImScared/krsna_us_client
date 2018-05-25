
const videoWidths = {
  xs: {
    height: 150,
    width: 300
  },
  mdUp: {
    height: 250,
    width: 400
  }
};

const getVideoSizes = (size, dimension, increaseAmount = 0) => {
  return `${videoWidths[size][dimension] + increaseAmount}px`;
};

export const fixedVideo = theme => ({
  fixedVideo: {
    position: 'fixed',
    width: '250px',
    height: '125px',
    top: '0',
    zIndex: 100,
    transition: theme.transitions.create(['transform', 'width', 'height'], {
      easing: theme.transitions.easeIn,
      duration: theme.transitions.duration.enteringScreen
    }),
    transform: 'translate(15vw, 64px)',
    [`${theme.breakpoints.down('md')} and (orientation: landscape)`]: {
      width: '160px',
      height: '80px',
      transform: 'translate(45vw, 66px)'
    },
    [theme.breakpoints.up('md')]: {
      height: '150px',
      width: '300px',
      transform: 'translate(20vw, 66px)'
    },
    [`${theme.breakpoints.up('lg')} and (orientation: landscape)`]: {
      height: '300px',
      width: '400px',
      transform: 'translate(24vw, 66px)'
    },
    [theme.breakpoints.only('xl')]: {
      transform: 'translate(35vw, calc(100vh - 400px))'
    }
  }
});

export const fixedVideoScrollDown = theme => ({
  fixedVideoScrollDown: {
    transition: theme.transitions.create(['transform', 'width', 'height'], {
      easing: theme.transitions.easeIn,
      duration: theme.transitions.duration.leavingScreen
    }),
    transform: 'translate(20vw, 5px)',
    [`${theme.breakpoints.only('sm')} and (orientation: landscape)`]: {
      transform: 'translate(41vw, 6px)',
      height: '100px',
      width: '200px'
    },
    [`${theme.breakpoints.up('md')} and (orientation: landscape)`]: {
      transform: 'translate(27vw, 5px)'
    }
  }
});

export const unStuckVideo = theme => ({
  unStuckVideo: {
    width: getVideoSizes('xs', 'width'),
    height: getVideoSizes('xs', 'height'),
    zIndex: 100,
    [theme.breakpoints.up('md')]: {
      width: getVideoSizes('mdUp', 'width'),
      height: getVideoSizes('mdUp', 'height')
    },
    [theme.breakpoints.only('xl')]: {
      height: '250px',
      width: '400px'
    },
    position: 'relative',
    transition: theme.transitions.create(['transform', 'height', 'width'], {
      duration: theme.transitions.duration.enteringScreen
    }),
    transform: 'translate(0, 0)'
  }
});

export const videoWrapper = theme => ({
  videoWrapper: {
    width: getVideoSizes('xs', 'width'),
    height: getVideoSizes('xs', 'height', 50),
    [theme.breakpoints.up('md')]: {
      width: getVideoSizes('mdUp', 'width'),
      height: getVideoSizes('mdUp', 'height', 50)
    },
    [theme.breakpoints.only('xl')]: {
      height: '290px',
      width: '400px'
    }
  }
});

export default (theme) => ({
  ...fixedVideo(theme),
  ...fixedVideoScrollDown(theme),
  ...videoWrapper(theme),
  ...unStuckVideo(theme)
});
