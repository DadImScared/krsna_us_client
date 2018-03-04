
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
    const { nextPage, items, ...other } = this.props;
    const { loadMoreResults, ...otherState } = this.state;
    const data = {
      ...(this.props.updateCb ? { items, nextPage }:{ ...otherState })
    };
    return (
      <View
        {...other}
        {...data}
        loadMoreResults={loadMoreResults}
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
    if (!this.props.updateCb && this.props.nextPage !== nextProps.nextPage) {
      this.listEle.recomputeRowHeights();
      return;
    }
    if (this.props.updateCb && this.props.shouldUpdate !== nextProps.shouldUpdate) {
      this.listEle.recomputeRowHeights();
    }
  }

  componentDidMount() {
    window.addEventListener('resize', this.clearCache);
    this.clearCache();
  }

  componentWillUnmount() {
    window.removeEventListener('resize', this.clearCache);
  }

  setListRef = el => this.listEle = el;

  async loadMoreRows() {
    const { updateCb } = this.props;
    const searchTerm = updateCb ? this.props.nextPage :this.state.nextPage ?  this.state.nextPage : false;
    if (!searchTerm) {
      this.setState({ loadMoreResults: false });
      return;
    }
    const { data: { results: newResults, nextPage } } = await axios.get(searchTerm);
    const results = [].concat(updateCb ? this.props.items:this.state.items, newResults);

    const newData = {};

    newData.loadMoreResults = Boolean(nextPage); // nextPage is either a url or false we explicitly want true or false
    if (updateCb) {
      updateCb(newResults, nextPage, this.clearCache);
    }
    else {
      newData.items = results;
      newData.nextPage = nextPage;
    }
    this.setState(newData);
  }

  isRowLoaded({ index }) {
    if (this.props.updateCb) {
      return !!this.props.items[index];
    }
    else {
      return !!this.state.items[index];
    }
  }

  rowRenderer({ key, index, style, parent }) {
    const { items } = this.state;
    const { items: propItems, updateCb } = this.props;
    const usedItems = updateCb ? propItems:items;
    const { RowComponent = RenderResult } = this.props;
    return (
      <CellMeasurer
        cache={cache}
        columnIndex={0}
        key={`${key}-${usedItems[index] && usedItems[index].title}`}
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
              usedItems.length ?
                React.cloneElement(
                  <RowComponent />,
                  { item: usedItems[index], ...this.props }
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
