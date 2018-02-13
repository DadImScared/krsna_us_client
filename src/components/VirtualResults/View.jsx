
import React from 'react';

import { InfiniteLoader, List, AutoSizer, WindowScroller } from 'react-virtualized';

import { withStyles } from 'material-ui/styles';
import Paper from 'material-ui/Paper';

const styles = theme => ({
  container: {
    [theme.breakpoints.up('md')]: {
      width: '50%',
      margin: '0 auto'
    },
    [`${theme.breakpoints.up('md')} and (orientation: landscape)`]: {
      width: '80%'
    }
  }
});

const View = ({
  classes, cache, items,
  loadMoreResults, setRef,
  loadMoreRows, isRowLoaded,
  rowRenderer, setListRef
}) => (
  <Paper className={classes.container}>
    <InfiniteLoader
      isRowLoaded={isRowLoaded}
      loadMoreRows={loadMoreResults ? loadMoreRows:() => {}}
      rowCount={items.length + 2}
      threshold={15}
    >
      {({ onRowsRendered, registerChild, onChildScroll }) => (
        <WindowScroller
          ref={setRef}
        >
          {({ height, scrollTop }) => {
            return (
              <AutoSizer disableHeight>
                {({ width }) => (
                  <List
                    ref={(el) => {
                      setListRef(el);
                      return registerChild(el);
                    }}
                    onScroll={onChildScroll}
                    deferredMeasurementCache={cache}
                    autoHeight
                    height={height}
                    width={width}
                    onRowsRendered={onRowsRendered}
                    rowCount={items.length}
                    rowHeight={cache.rowHeight}
                    scrollTop={scrollTop}
                    rowRenderer={rowRenderer}
                  />
                )}
              </AutoSizer>
            );
          }}
        </WindowScroller>
      )}
    </InfiniteLoader>
  </Paper>
);

export default withStyles(styles)(View);
