
import React from 'react';

import { Link } from 'react-router-dom';

import classNames from 'classnames';

import { withStyles } from 'material-ui/styles';
import Typography from 'material-ui/Typography';

import VirtualResults from '../VirtualResults';

const styles = theme => ({
  suggestionsContainer: {
    display: 'flex',
    flexWrap: 'wrap',
    marginBottom: theme.spacing.unit,
    [theme.breakpoints.up('md')]: {
      width: '50%',
      margin: `0 auto ${theme.spacing.unit}px`
    },
    [`${theme.breakpoints.up('md')} and (orientation: landscape)`]: {
      width: '80%'
    }
  },
  link: {
    [theme.breakpoints.down('lg')]: {
      marginBottom: theme.spacing.unit
    }
  },
  spacing: {
    marginRight: theme.spacing.unit
  }
});

const View = ({
  suggestions, items, updateCb,
  nextPage, setRef, shouldUpdate,
  isFetching, location, classes
}) => (
  <div>
    {
      suggestions.length ?
        (
          <div className={classes.suggestionsContainer}>
            <Typography className={classes.spacing}>
              <span>You might be interested in: </span>
            </Typography>
            {
              suggestions.map((suggestion, i) => (
                <Typography
                  style={{ textDecoration: 'none' }}
                  className={classNames(classes.spacing, classes.link)}
                  component={Link}
                  to={`/search/${suggestion.text}${location.search}`}
                  key={i}>{suggestion.text}
                </Typography>
              ))
            }
          </div>
        )
        :null
    }
    {
      isFetching ?
        <div />
        :
        items.length ?
          <VirtualResults
            shouldUpdate={shouldUpdate}
            updateCb={updateCb}
            items={items}
            nextPage={nextPage}
            setRef={setRef}
          />
          :
          <div>no results</div>
    }
  </div>
);

export default withStyles(styles)(View);
