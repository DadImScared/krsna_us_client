
import orange from 'material-ui/colors/orange';

export default (theme) => ({
  buttonStyle: {
    margin: theme.spacing.unit,
    marginLeft: '0'
  },
  contentStyle: {
    '& em': {
      backgroundColor: orange[900]
    }
  }
});
