
import React from 'react';

import { Link } from 'react-router-dom';

import { withStyles } from 'material-ui/styles';
import { indigo } from 'material-ui/colors';
import Button from 'material-ui/Button';
import GridList, { GridListTile } from 'material-ui/GridList';
import Card, { CardActions, CardContent } from 'material-ui/Card';
import Typography from 'material-ui/Typography';

import categoryTiles from './categoryTiles';

const styles = theme => ({
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


const View = ({ classes }) => (
  <div className={classes.container}>
    <div className={classes.heading}>
      <div>
        <Typography variant={'display1'}>
          Krsna.Us
        </Typography>
      </div>
      <Typography>
        A collection of Books, Songs, Videos, Harikatha, and more
      </Typography>
    </div>
    <div>
      <GridList>

        {
          categoryTiles.map((item, index) => (
            <GridListTile
              className={classes[item.className]}
              classes={{ tile: classes.tile, root: classes.root }}
              // width and height are none so they can be over written with classes instead of inline styles
              style={{ width: 'none', height: 'none' }}
              key={index}
            >
              <Card classes={{ root: classes.card }} style={{ order: index % 2 === 0 ? 1: 0 }}>
                <CardContent>
                  <Typography className={classes.cardTitle} variant={'title'}>{item.name}</Typography>
                  <Typography>
                    {item.text}
                  </Typography>
                </CardContent>
                <CardActions classes={{ root: classes.cardAction }}>
                  {
                    item.link.constructor === Array ?
                      item.link.map((link, index) => (
                        <Button color='secondary' component={Link} to={link.link} key={index}>
                          Browse {link.title}
                        </Button>
                      ))
                      :
                      <Button color='secondary' component={Link} to={item.link} key={index}>
                        Browse {item.name}
                      </Button>
                  }
                </CardActions>
              </Card>
              <div
                className={classes.pictures}
                style={
                  {
                    width: '30%',
                    height: '100%',
                    padding: '5px',
                    overflow: 'hidden',
                    backgroundSize: 'cover',
                    backgroundImage: `url(${item.picture})`,
                    backgroundPosition: 'center'
                  }
                }
              />
            </GridListTile>
          ))
        }
      </GridList>
    </div>
  </div>
);

export default withStyles(styles)(View);
