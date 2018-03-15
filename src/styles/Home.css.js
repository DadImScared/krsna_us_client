
import { indigo } from 'material-ui/colors';

export default (theme) => ({
  container: {
    display: 'flex',
    justifyContent: 'center',
    flexDirection: 'column'
  },
  heading: {
    alignSelf: 'center',
    paddingBottom: theme.spacing.unit * 2
  },
  root: {
    height: '100%',
    width: '100%',
    [theme.breakpoints.up('md')]: {
      height: '404px'
    },
    [theme.breakpoints.up('xl')]: {
      width: '50%'
    }
  },
  tile: {
    display: 'flex',
    alignItems: 'center'
  },
  pictures: {
    [theme.breakpoints.down('sm')]: {
      display: 'none'
    }
  },
  card: {
    width: '100%',
    height: '100%',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-around',
    [theme.breakpoints.up('md')]: {
      width: '60%',
      margin: '0 auto',
      height: 'auto'
    }
  },
  cardTitle: {
    marginBottom: theme.spacing.unit
  },
  cardAction: {
    height: 'auto',
    display: 'flex',
    flexDirection: 'column',
    [theme.breakpoints.up('sm')]: {
      height: '52px',
      flexDirection: 'row'
    }
  },
  movie: {
    backgroundColor: indigo[700]
  },
  harikatha: {
    backgroundColor: indigo[400]
  },
  harmonistmagazine: {
    backgroundColor: indigo[600],
    [theme.breakpoints.only('xl')]: {
      backgroundColor: indigo[300]
    }
  },
  books: {
    backgroundColor: indigo[300],
    [theme.breakpoints.only('xl')]: {
      backgroundColor: indigo[600]
    }
  },
  songs: {
    backgroundColor: indigo[500]
  },
  bhagavatpatrika: {
    backgroundColor: indigo[200]
  }
});
