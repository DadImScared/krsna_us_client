
import React from 'react';

import { Link } from 'react-router-dom';

import { withStyles } from '@material-ui/core/styles';

import Button from '@material-ui/core/Button';
import GridList from '@material-ui/core/GridList';
import GridListTile from '@material-ui/core/GridListTile';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';

import categoryTiles from './categoryTiles';
import styles from '../../styles/Home.css';


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
