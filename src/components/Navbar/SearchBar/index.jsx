
import React, { Component } from 'react';

import axios from 'axios';
import queryString from 'query-string';
import match from 'autosuggest-highlight/match';
import parse from 'autosuggest-highlight/parse';

import { MenuItem } from 'material-ui/Menu';
import { withStyles } from 'material-ui/styles';
import Paper from 'material-ui/Paper';

import View from './View';
import { SearchBar as styles } from '../../../styles/Navbar';

class SearchBar extends Component {
  constructor(...args) {
    super(...args);
    this.state = {
      suggestions: []
    };
  }

  render() {
    return (
      <View
        {...this.state}
        {...this.props}
        pushSearch={this.pushWithCategories}
        handleChange={this.handleChange}
        clearSuggestions={this.clearSuggestions}
        renderSuggestion={this.renderSuggestion}
        renderSuggestionsContainer={this.renderSuggestionsContainer}
        getSuggestionValue={this.getSuggestionValue}
        handleSuggestionsFetchRequested={this.handleSuggestionsFetchRequested}
        handleSuggestionsClearRequested={this.handleSuggestionsClearRequested}
      />
    );
  }

  renderSuggestion = (suggestion, { query, isHighlighted }) => {
    const matches = match(suggestion.text, query);
    const parts = parse(suggestion.text, matches);

    return (
      <MenuItem classes={{
        root: this.props.classes.menuItem
      }} selected={isHighlighted} component='div'>
        <div>
          {parts.map((part, index) => {
            return part.highlight ? (
              <span key={String(index)} style={{ fontWeight: 300 }}>
                {part.text}
              </span>
            ) : (
              <strong key={String(index)} style={{ fontWeight: 500 }}>
                {part.text}
              </strong>
            );
          })}
        </div>
      </MenuItem>
    );
  };

  renderSuggestionsContainer = (options) => {
    const { containerProps, children } = options;

    return (
      <Paper {...containerProps} square>
        {children}
      </Paper>
    );
  };

  pushWithCategories = (searchQuery) => {
    const categories = Object.keys(this.props.categories).filter((category) => {
      return this.props.categories[category];
    });
    const queryS = categories.length ? `?${queryString.stringify({ categories })}`:'';
    this.props.history.push(`/search/${searchQuery}${queryS}`);
  };

  fetchSuggestions = async (value) => {
    const { data } = await axios.get(`/api/v1/completeme/${value}/`);
    this.setState({ suggestions: data });
  };

  handleSuggestionsFetchRequested = async ({ value }) => {
    // this.setState({ suggestions: this.getSuggestions(value) });
    this.fetchSuggestions(value);
  };

  handleSuggestionsClearRequested = () => {
    this.setState({ suggestions: [] });
  };

  handleChange = (event, { newValue }) => {
    this.props.actions.setQuery(newValue);
  };

  getSuggestionValue = (suggestion) => suggestion.text;

  clearSuggestions = () => this.setState({ suggestions: [] });
}

export default withStyles(styles)(SearchBar);
