
import React from 'react';
import Typography from 'material-ui/Typography';

const Title = ({ item: { title, highlightedTitle } }) => {
  return highlightedTitle ? (
    <Typography>
      <span dangerouslySetInnerHTML={{ __html: highlightedTitle }} />
    </Typography>
  ): (
    <Typography>
      {title}
    </Typography>
  );
};

export default Title;
