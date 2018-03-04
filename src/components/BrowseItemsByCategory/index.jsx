
import React, { Component } from 'react';
import axios from 'axios';

import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import * as BrowseActions from '../../actions/browse';
import View from './View';

class BrowseItemsByCategory extends Component {
  constructor(...args) {
    super(...args);
    this.state = {
      nextPage: false,
      items: [],
      isFetching: false,
      category: this.props.match.params.category || ''
    };
  }

  render() {
    const { match: { params: { category } }, browse } = this.props;
    return (
      <View
        updateCb={this.updateResults}
        shouldUpdate={category}
        items={browse[category] ? [...browse[category].results]:[]}
        nextPage={browse[category] && browse[category].nextPage}
        {...this.props}
        isFetching={this.state.isFetching}
      />
    );
  }

  async componentDidMount() {
    const { match: { params } } = this.props;
    this.setState({ isFetching: true });
    try {
      const { data: { results, nextPage } } = await axios.get(`/api/v1/items/${params.category}/`);
      this.setState({ items: results, isFetching: false, nextPage });
      this.props.updateResults(params.category, results, nextPage);
    }
    catch(e) {
      console.log(e);
    }
  }

  async componentWillReceiveProps(nextProps) {
    const { location, match: { params } } = nextProps;
    if (location.pathname !== this.props.location.pathname) {
      if (this.props.browse[params.category]) {
        this.setState({ isFetching: true });
        setTimeout(()=> {
          this.setState({ isFetching: false });
        }, 100);
        return;
      }
      this.setState({ isFetching: true, category: params.category });
      try {
        const { data: { results, nextPage } } = await axios.get(`/api/v1/items/${params.category}/`);
        this.setState({ items: results, isFetching: false, nextPage });
        this.props.updateResults(params.category, results, nextPage);
      }
      catch (e) {
        console.log(e);
      }
    }
  }

  componentWillUnmount() {
    this.props.clearResults();
  }

  updateResults = (results, nextPage, clearCache) => {
    const { match: { params }, updateResults } = this.props;
    updateResults(params.category, results, nextPage);
    clearCache();
  };
}

const mapStateToProps = ({ browse }) => ({
  browse
});

const mapDispatchToProps = dispatch => {
  return bindActionCreators({
    updateResults: BrowseActions.updateResults,
    clearResults: BrowseActions.clearResults
  }, dispatch);
};

export default connect(mapStateToProps, mapDispatchToProps)(BrowseItemsByCategory);
