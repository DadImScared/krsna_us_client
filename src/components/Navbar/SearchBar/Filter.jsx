
import React, { Component } from 'react';

import IconButton from 'material-ui/IconButton';
import Popover from 'material-ui/Popover';
import {
  FormLabel,
  FormControl,
  FormGroup,
  FormControlLabel,
  FormHelperText,
} from 'material-ui/Form';
import Checkbox from 'material-ui/Checkbox';

import { FilterList as FilterIcon } from 'material-ui-icons';

class Filter extends Component {
  constructor(...args) {
    super(...args);
    this.state = {
      isOpen: false
    };
  }

  render() {
    return (
      <div>
        <div style={{ margin: '.42rem' }}>
          <IconButton buttonRef={(el) => this.filterButton = el} onClick={this.openPopover}>
            <FilterIcon/>
          </IconButton>
        </div>
        <Popover
          open={this.state.isOpen}
          anchorEl={this.filterButton}
          anchorPosition={{ top: 200, left: 400 }}
          anchorOrigin={{ vertical: 'bottom', horizontal: 'center' }}
          transformOrigin={{ vertical: 'top', horizontal: 'center' }}
          onClose={this.closePopover}
        >
          {this.renderCheckboxes()}
        </Popover>
      </div>
    );
  }

  renderCheckboxes = () => {
    const { categories, toggleCategory, classes } = this.props;
    const checkBoxGroup = Object.keys(categories).map((category, i) => (
      <FormControlLabel
        classes={{
          root: classes.formLabel
        }}
        key={i}
        control={
          <Checkbox
            checked={categories[category]}
            onChange={() => toggleCategory(category)}
            value={category}
            classes={{
              checked: classes.checkedBox
            }}
          />
        }
        label={category}
      />
    ));

    return (
      <FormControl component='fieldset'>
        <FormGroup>
          {checkBoxGroup}
        </FormGroup>
      </FormControl>
    );
  };

  openPopover = () => {
    this.setState({ isOpen: true });
  };

  closePopover = () => {
    this.setState({ isOpen: false });
  };
}

export default Filter;
