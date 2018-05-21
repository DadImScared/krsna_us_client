
import React from 'react';
import { withStyles } from 'material-ui/styles';
import Typography from 'material-ui/Typography';

import { RenderResult as styles } from '../styles/VirtualResults';

const Title = ({ item: { title, highlightedTitle }, classes }) => {
  return (
    <Typography>
      {
        highlightedTitle ?
          <span className={classes.contentStyle} dangerouslySetInnerHTML={{ __html: highlightedTitle }} />
          :
          <span className={classes.contentStyle}>{title}</span>
      }
    </Typography>
  );
};

export default withStyles(styles)(Title);
