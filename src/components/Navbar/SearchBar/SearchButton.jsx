
import React from 'react';

import { InputAdornment } from 'material-ui/Input';
import IconButton from 'material-ui/IconButton';
import { Search as SearchIcon } from 'material-ui-icons';

const SearchButtonContainer = ({ pushSearch, query }) => (
  <InputAdornment style={{ position: 'relative', bottom: '-0.4rem', paddingRight: '5px' }}>
    <IconButton buttonRef={(el) => this.autoButton = el} onClick={() => {
      pushSearch(query);

      // when button is clicked autosuggest renders suggestions
      // this happens because InputAdornment is part of the autosuggest container
      // but we just want to show search results after the button is clicked
      // this clears the focus
      setTimeout(() => {
        this.autoButton.blur();
      }, 400);
    }}>
      <SearchIcon />
    </IconButton>
  </InputAdornment>
);

export default SearchButtonContainer;
