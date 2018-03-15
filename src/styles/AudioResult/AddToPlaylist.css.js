
export default theme => ({
  appBar: {
    position: 'relative'
  },
  container: {
    [theme.breakpoints.up('md')]: {
      width: '80%',
      margin: '0 auto'
    }
  },
  formContainer: {
    padding: theme.spacing.unit * 2
  },
  formWrapper: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'flex-start',
    padding: theme.spacing.unit
  },
  formField: {
    marginBottom: theme.spacing.unit
  }
});
