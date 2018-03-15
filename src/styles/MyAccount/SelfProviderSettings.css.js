
import { green } from 'material-ui/colors';

export default (theme) => ({
  container: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    padding: theme.spacing.unit * 2,
    [theme.breakpoints.up('md')]: {
      width: '50vw',
      margin: '0 auto'
    }
  },
  formButton: {
    margin: `${theme.spacing.unit * 2}px 0`
  },
  formRoot: {
    marginTop: theme.spacing.unit * 2,
    width: '100%'
  },
  formWrapper: {
    marginTop: theme.spacing.unit * 2
  },
  successMessage: {
    color: green[500],
    textAlign: 'center',
    marginTop: theme.spacing.unit * 2
  }
});
