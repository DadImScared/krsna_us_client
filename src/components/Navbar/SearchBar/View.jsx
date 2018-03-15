
import React from 'react';

import Autosuggest from 'react-autosuggest';

import { withStyles } from 'material-ui/styles';

import Input from './Input';
import Filter from './Filter';
import { SearchBar as styles } from '../../../styles/Navbar';

 
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
