
import React from 'react';

import PropTypes from 'prop-types';

import { InfiniteLoader, List, AutoSizer, WindowScroller } from 'react-virtualized';

import { withStyles } from 'material-ui/styles';
import Paper from 'material-ui/Paper';

import { VirtualResults as styles } from '../../styles/VirtualResults';


const View = ({
  classes, cache, items,
  loadMoreResults, setRef,
  loadMoreRows, isRowLoaded,
  rowRenderer, setListRef
}, { setWindowScroller }) => (
  <Paper className={classes.container}>
    <InfiniteLoader
      isRowLoaded={isRowLoaded}
      loadMoreRows={loadMoreResults ? loadMoreRows:() => {}}
      rowCount={items.length + 2}
      threshold={15}
    >
      {({ onRowsRendered, registerChild, onChildScroll }) => (
        <WindowScroller
          ref={setWindowScroller}
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

View.contextTypes = {
  setWindowScroller: PropTypes.func
};

export default withStyles(styles)(View);
