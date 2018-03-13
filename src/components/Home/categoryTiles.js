
import harikathaPicture from '../../images/16195947_1692262924120955_6310857941221688920_n.jpg';
import moviePicture from '../../images/12801104_10153703550414667_7753066565953657226_n.jpg';
import harmonistMagazine from '../../images/15061_546925618693527_1678864991_n.jpg';
import bookPicture from '../../images/10981739_10152931478179667_3783377580055403392_n.jpg';
import songPicture from '../../images/madhavamaharaj.jpg';
import bpPicture from '../../images/18193825_1268145456573514_6129258006103513857_n.jpg';

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

export default categoryTiles;
