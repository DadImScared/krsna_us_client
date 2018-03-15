
export default (theme) => ({
  paperBackground: {
    display: 'flex',
    alignItems: 'center',
    flexDirection: 'column',
    padding: theme.spacing.unit * 2,
    minHeight: 'calc(100vh - 161px)',
    justifyContent: 'space-around'
  },
  textField: {
    display: 'flex'
  }
});
