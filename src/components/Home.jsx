
import React from 'react';

import { Link } from 'react-router-dom';

import { withStyles } from 'material-ui/styles';
import { indigo } from 'material-ui/colors';
import Button from 'material-ui/Button';
import GridList, { GridListTile } from 'material-ui/GridList';
import Card, { CardActions, CardContent } from 'material-ui/Card';
import Typography from 'material-ui/Typography';

import harikathaPicture from '../images/16195947_1692262924120955_6310857941221688920_n.jpg';
import moviePicture from '../images/12801104_10153703550414667_7753066565953657226_n.jpg';
import harmonistMagazine from '../images/15061_546925618693527_1678864991_n.jpg';
import bookPicture from '../images/10981739_10152931478179667_3783377580055403392_n.jpg';
import songPicture from '../images/madhavamaharaj.jpg';
import bpPicture from '../images/18193825_1268145456573514_6129258006103513857_n.jpg';

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

const categoryTiles = [
  {
    name: 'Movies & Lectures',
    className: 'movie',
    picture: moviePicture,
    link: [{ title: 'Movies', link: '/movie' }, { title: 'Lectures', link: '/lecture' }],
    text: `
    In the history of Vaishnavism there has never been a audio/video collection as extensive as Srila Bhaktivedanta 
    Narayan Maharaja's. They set the standard of truth for all future presentations of Krishna Consciousness. 
    Srila Gurudeva has provided indisputable evidence about the conclusions of Mahaprabhu's message as well as a clear 
    commentary on Srila Prabhupada's books and mission. He has shared the deep truths of Bhakti and distributed them 
    freely to the entire world. His movies and audio lectures are so important; the example of "Ram where have you been?" 
    is perfect in this case, when you read the words the tone and inflection are missing but when you hear Srila 
    Gurudeva speaking the mood is easily understood and felt. Of course personal association with a pure devotee is 
    essential and cannot be replaced by anything!
    `
  },
  {
    name: 'Hari Katha',
    className: 'harikatha',
    link: '/harikatha',
    picture: harikathaPicture,
    text: `
      Hari Katha Newsletters The hari-katha team sends Srila Narayana Gosvami Maharaja's transcribed lectures,
      informal discussions, and morning walk conversations that took place during his touring around the world
      from 1996 to 2010, as well as his classes given in India from 1991-1995. They are extremely inspiring
      and enlivening to read and to take into our hearts.
     `
  },
  {
    name: 'Harmonist Magazine',
    className: 'harmonistmagazine',
    link: [
      { title: 'Harmonist Magazine', link: '/harmonistmagazine' },
      { title: 'Harmonist Monthly', link: '/harmonistmonthly' }
    ],
    picture: harmonistMagazine,
    text: `
      Srila Gurudeva ordered his disciples to publish Rays of The Harmonist, and never stop. He wished to deliver 
      Mahaprabhu’s message to the English speaking world. That pristine message has been passed down through the 
      svarupa-rupanuga line, through Srila Prabhupada Bhaktisiddanta Sarasvati Thakura and through his pure and perfect 
      representatives like Srila Gurudeva. Read new online Rays of The Harmonist articles by Srila Prabhupada once a 
      month, and articles by his pure representatives on special days, and you will perceive the pure flow of the
       bhagavat-parampara in modern times.
    `
  },
  {
    name: 'Books',
    className: 'books',
    link: '/book',
    picture: bookPicture,
    text: `
      Srila Bhaktivedanta Narayana Gosvami Maharaja founded Gaudiya Vedanta Publications Inc. and published the books 
      of the previous masters in English, Hindi, Bengali, Spanish, and many other languages and has distributed 
      hundreds of thousands of these books all over the world.
    `
  },
  {
    name: 'Songs',
    className: 'songs',
    link: '/song',
    picture: songPicture,
    text: `
      An unprecedented collection of devotional songs Sanskrit, Bengali and Hindi devotional poems, prayers, songs and 
      bhajanas written by the Gaudiya Vaisnava acaryas and compiled for the practicing devotee.
    `
  },
  {
    name: 'Bhagavat Patrika',
    className: 'bhagavatpatrika',
    link: '/bhagavatpatrika',
    picture: bpPicture,
    text: `
      “Sri Bhagavata Patrika” was renamed to “Sri Sri Bhagavata Patrika” by the desire of Srila Gurudeva. Presently, 
      it is the only carrier of the unadulterated message of Sri Rupa- Raghunatha in the Hindi language. 
      “The use of the word ‘Sri’ before the word ‘Bhagavata’ implies the eternality of Bhagavata. The word ‘Patrika’ 
      means ‘the carrier of the message or the discussion’, so the use of the word ‘Patrika’ after the word ‘Bhagavata’
       means that this patrika bears the conduct‚ conceptions and discussions that are based on the eternal doctrines 
       of the Bhagavatam.
    `
  }
];

const Home = ({ classes }) => (
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

export default withStyles(styles)(Home);
