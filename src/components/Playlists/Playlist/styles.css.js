
export const container = () => ({
  container: {
    minHeight: '50vh'
  }
});

export const inputRow = (theme) => ({
  spacing: {
    width: '100%',
    [theme.breakpoints.up('md')]: {
      width: '33%'
    },
    padding: theme.spacing.unit
  },
  inputRow: {
    minHeight: '130px',
    display: 'flex',
    alignItems: 'center',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
    padding: theme.spacing.unit * 2
  },
  playlistInfo: {
    display: 'flex',
    justifyContent: 'space-around'
  },
  formContainer: {
    display: 'flex',
    alignItems: 'flex-start'
  }
});

export const sortableList = () => ({
  listContainer: {
    height: '50vh',
    overflow: 'auto',
    wordBreak: 'break-word'
  }
});
