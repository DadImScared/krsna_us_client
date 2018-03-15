
export default (theme) => ({
  paperBackground: {
    height: '100%',
    padding: theme.spacing.unit * 2,
    minHeight: 'calc(100vh - 161px)',
    justifyContent: 'center',
    [theme.breakpoints.up('md')]: {
      minHeight: '70vh'
    }
  },
  innerWrapper: {
    display: 'flex',
    alignItems: 'center',
    flexDirection: 'column',
    justifyContent: 'space-around',
    height: '100%',
    width: '100%',
    [theme.breakpoints.up('md')]: {
      height: '80%'
    }
  },
  fieldStyle: {
    marginBottom: theme.spacing.unit * 2
  },
  registerWrapper: {
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      width: '50vw',
      margin: '0 auto'
    },
    [theme.breakpoints.up('md')]: {
      width: '40vw'
    },
    [theme.breakpoints.up('lg')]: {
      width: '20vw'
    }
  }
});
