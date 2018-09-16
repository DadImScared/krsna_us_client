
import React from 'react';

import TextField from '@material-ui/core/TextField';

import SearchButton from './SearchButton';

const Input = ({ classes, value , ref, pushSearch, ...other }) => (
  <TextField
    placeholder={'Search items'}
    label='Search content'
    onKeyDown={(event) => event.key === 'Enter' ? pushSearch(value):null}
    inputRef={ref}
    value={value}
    classes={{
      root: classes.input
    }}
    InputProps={{
      classes: {
        input: classes.input,
        underline: classes.inkbar
      },
      // disableUnderline: true,
      startAdornment: (
        <SearchButton pushSearch={pushSearch} query={value} />
      ),
      ...other
    }}
    InputLabelProps={{
      hidden: true,
      ['aria-hidden']: true
    }}
  />
);

export default Input;
