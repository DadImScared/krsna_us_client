
import React, { Component } from 'react';

import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import axios from 'axios';
import queryString from 'query-string';

import * as SearchActionCreators from '../../actions/search';

import View from './View';

const mapStateToProps = ({ search: { categories } }) => ({
  categories
});

const mapDispatchToProps = dispatch => {
  return bindActionCreators({
    setQuery: SearchActionCreators.setQuery,
    toggleCategory: SearchActionCreators.toggleCategory
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
      return (
        <View {...this.state} {...this.props} />
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
        this.search(query, search);
        this.checkBoxes(search);
      }
    }

    search = async (query, queryS) => {
      const { data: { results, suggestions, nextPage } } = await axios.get(`/api/v1/search/${query}${queryS}`);
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
  }
);
