
import React from 'react';

import Autosuggest from 'react-autosuggest';

import { withStyles } from 'material-ui/styles';

import Input from './Input';
import Filter from './Filter';

const styles = theme => ({
  container: {
    flexGrow: 1,
    position: 'relative'
  },
  suggestionsContainerOpen: {
    position: 'absolute',
    marginTop: theme.spacing.unit,
    marginBottom: theme.spacing.unit * 3,
    left: 0,
    right: 0
  },
  suggestion: {
    display: 'block'
  },
  suggestionsList: {
    margin: 0,
    padding: 0,
    listStyleType: 'none'
  },
  input: {
    width: '100%'
  },
  inkbar: {
    '&:after': {
      backgroundColor: theme.palette.secondary.main
    }
  },
  formLabel: {
    paddingLeft: theme.spacing.unit * 2
  },
  checkedBox: {
    color: theme.palette.secondary.main,
    '& span:first-child': {
      height: '15px',
      width: '15px',
      backgroundColor: theme.palette.text.primary
    }
  }
});

const View = ({
  classes, pushSearch, query,
  suggestions, isOpen,
  handleSuggestionsFetchRequested,
  handleSuggestionsClearRequested,
  renderSuggestionsContainer,
  getSuggestionValue,
  renderSuggestion,
  handleChange,
  categories,
  clearSuggestions,
  actions: { toggleCategory }
}) => (
  <div style={{ width: '500px', display: 'flex' }}>
    <Filter
      isOpen={isOpen}
      classes={classes}
      categories={categories}
      toggleCategory={toggleCategory}
    />
    <Autosuggest
      theme={{
        container: classes.container,
        suggestionsContainerOpen: classes.suggestionsContainerOpen,
        suggestionsList: classes.suggestionsList,
        suggestion: classes.suggestion
      }}
      renderInputComponent={Input}
      suggestions={suggestions}
      onSuggestionsFetchRequested={handleSuggestionsFetchRequested}
      onSuggestionsClearRequested={handleSuggestionsClearRequested}
      renderSuggestionsContainer={renderSuggestionsContainer}
      getSuggestionValue={getSuggestionValue}
      renderSuggestion={renderSuggestion}
      onSuggestionSelected={(event,{ suggestionValue }) => {
        clearSuggestions();
        pushSearch(suggestionValue);
      }}
      inputProps={{
        classes,
        pushSearch,
        placeholder: 'Search items',
        value: query,
        onChange: handleChange
      }}
      ref={autoSuggest => {
        if (autoSuggest !== null) this.input = autoSuggest.input;
      }}
    />
  </div>
);

export default withStyles(styles)(View);
