
import React, { Component } from 'react';

import { CellMeasurer, CellMeasurerCache } from 'react-virtualized';

import axios from 'axios';

import RenderResult from './RenderResult';
import View from './View';

const cache = new CellMeasurerCache({
  minHeight: 40,
  fixedWidth: true,
  defaultHeight: 150
});

export default class VirtualResults extends Component {
  constructor(...args) {
    super(...args);
    this.state = {
      nextPage: this.props.nextPage || false,
      items: this.props.items || [],
      loadMoreResults: true
    };
    this.loadMoreRows = this.loadMoreRows.bind(this);
    this.isRowLoaded = this.isRowLoaded.bind(this);
    this.rowRenderer = this.rowRenderer.bind(this);
  }

  render() {
    // nextPage and items get passed from state instead
    const { nextPage, items, ...other } = this.props;
    return (
      <View
        {...other}
        {...this.state}
        cache={cache}
        loadMoreRows={this.loadMoreRows}
        isRowLoaded={this.isRowLoaded}
        rowRenderer={this.rowRenderer}
        setListRef={this.setListRef}
      />
    );
  }

  clearCache = () => {
    cache.clearAll();
  };

  componentWillReceiveProps(nextProps) {
    if (this.props.nextPage !== nextProps.nextPage) {
      this.setState(
        { items: nextProps.items,
          nextPage: nextProps.nextPage,
          loadMoreResults: true
        },
        () => {
          this.clearCache();
          // this.listEle.recomputeRowHeights();
          console.log('new props');
        });
    }
  }

  componentDidMount() {
    window.addEventListener('resize', this.clearCache);
    console.log('mounted');
    this.clearCache();
    this.listEle.recomputeRowHeights();
  }

  componentWillUnmount() {
    window.removeEventListener('resize', this.clearCache);
  }

  setListRef = el => this.listEle = el;

  async loadMoreRows() {
    const searchTerm = this.state.nextPage ?  this.state.nextPage : false;
    if (!searchTerm) {
      this.setState({ loadMoreResults: false });
      return;
    }
    const { data: { results: newResults, nextPage } } = await axios.get(searchTerm);

    const results = [].concat(this.state.items, newResults);

    if (!nextPage) {
      this.setState({ items: results, loadMoreResults: false, nextPage: false });
    }
    else {
      this.setState({ items: results, nextPage });
    }
  }

  isRowLoaded({ index }) {
    return !!this.state.items[index];
  }

  rowRenderer({ key, index, style, parent }) {
    const { items } = this.state;
    const { RowComponent = RenderResult } = this.props;
    return (
      <CellMeasurer
        cache={cache}
        columnIndex={0}
        key={`${key}-${items[index] && items[index].title}`}
        parent={parent}
        rowIndex={index}
      >
        {() => (
          // 'style' attribute required to position cell (within parent List)
          <div
            key={key}
            style={ { ...style, wordBreak: 'break-word' } }
          >
            {
              this.state.items.length ?
                React.cloneElement(
                  <RowComponent />,
                  { item: items[index] }
                )
                :
                null
            }
          </div>
        )}
      </CellMeasurer>
    );
  }
}
