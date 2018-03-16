
export default (theme) => ({
  cardWrapper: {
    padding: theme.spacing.unit
  },
  buttonControls: {
    display: 'flex'
  },
  withPlaylist: {
    justifyContent: 'center'
  },
  withSong: {
    justifyContent: 'space-around'
  },
  playlistItemsContainer: {
    height: '40vh',
    overflowY: 'auto',
    overflowX: 'hidden',
    [theme.breakpoints.up('md')]: {
      height: '30vh'
    }
  },
  playlistItem: {
    width: '100%',
    whiteSpace: 'nowrap',
    overflow: 'hidden',
    textOverflow: 'ellipsis'
  },
  playlistPopoverContainer: {
    padding: theme.spacing.unit * 2,
    wordBreak: 'break-word'
  },
  playlistPopover: {
    pointerEvents: 'none'
  },
  tooltip: {
    width: '100%',
    '&:hover': {
      cursor: 'pointer'
    }
  },
  infoIcon: {
    display: 'flex',
    [`${theme.breakpoints.only('xl')} and (orientation: landscape)`]: {
      display: 'none'
    }
  },
  currentlyPlaying: {
    backgroundColor: theme.palette.secondary.dark
  },
  volumeIcon: {
    display: 'flex',
    height: '24px',
    marginRight: theme.spacing.unit * 1.2,
    cursor: 'pointer'
  }
});
