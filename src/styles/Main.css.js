
export default (theme) => ({
  content: {
    width: '100%',
    padding: theme.spacing.unit * 3,
    minHeight: 'calc(100vh - 112px)',
    marginTop: 56,
    [theme.breakpoints.up('sm')]: {
      minHeight: 'calc(100vh - 64px)',
      marginTop: 64
    }
  }
});
