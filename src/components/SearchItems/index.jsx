
import React, { Component } from 'react';

import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import axios from 'axios';
import queryString from 'query-string';

import * as SearchActionCreators from '../../actions/search';

import View from './View';

const mapStateToProps = ({ search: { categories, results } }) => ({
  categories,
  results
});

const mapDispatchToProps = dispatch => {
  return bindActionCreators({
    setQuery: SearchActionCreators.setQuery,
    toggleCategory: SearchActionCreators.toggleCategory,
    updateResults: SearchActionCreators.updateResults,
    clearResults: SearchActionCreators.clearResults
  }, dispatch);
};

export default connect(mapStateToProps, mapDispatchToProps)(
  class extends Component {
    constructor(...args) {
      super(...args);
      this.state = {
        nextPage: false,
        items: [],
        isFetching: false,
        suggestions: []
      };
    }

    render() {
      const { match: { params: { query } }, location: { search }, results } = this.props;
      return (
        <View
          items={
            results[`${this.getQueryId(query, search)}`] ?
              results[`${query.trim().toLowerCase()}-${search}`].results
              :
              []
          }
          nextPage={
            results[`${query.trim().toLowerCase()}-${search}`]
            &&
            results[`${query.trim().toLowerCase()}-${search}`].nextPage
          }
          updateCb={this.updateResults}
          shouldUpdate={this.getQueryId(query, search)}
          suggestions={this.state.suggestions}
          {...this.props}
        />
      );
    }

    componentDidMount() {
      const { match: { params }, location , setQuery } = this.props;
      setQuery(params.query);
      this.search(params.query, location.search);
      this.checkBoxes(location.search);
    }

    componentWillReceiveProps(nextProps) {
      const { match: { params: { query } }, location: { search } } = nextProps;
      const { match: { params: { query: oldQuery } }, location: { search: oldSearch }, setQuery } = this.props;
      if (query !== oldQuery || search !== oldSearch) {
        setQuery(query);
        this.checkBoxes(search);
        if (this.props.results[`${query.trim().toLowerCase()}-${search}`]) {
          return;
        }
        this.search(query, search);
      }
    }

    componentWillUnmount() {
      this.props.clearResults();
    }

    getQueryId = (query, search) => `${query.trim().toLowerCase()}-${search}`;

    search = async (query, queryS) => {
      // need to add suggestions to result in search reducer
      const { data: { results, suggestions, nextPage } } = await axios.get(`/api/v1/search/${query}${queryS}`);
      this.props.updateResults(this.getQueryId(query, queryS), results, nextPage);
      this.setState({ suggestions, nextPage, items: results });
    };

    checkBoxes = (search) => {
      const { categories, toggleCategory } = this.props;
      const allCategories = Object.keys(categories);
      const { categories: selectedCategories } = queryString.parse(search);
      allCategories.forEach((category) => {
        if (selectedCategories.indexOf(category) !== -1 && !categories[category]) {
          toggleCategory(category);
        }
        if(selectedCategories.indexOf(category) === -1 && categories[category]) {
          toggleCategory(category);
        }
      });
    };

    updateResults = (results, nextPage) => {
      const { match: { params: { query } }, location: { search } } = this.props;
      this.props.updateResults(this.getQueryId(query, search), results, nextPage);
    }
  }
);
