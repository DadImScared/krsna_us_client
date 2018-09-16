
import React, { Component } from 'react';

import IconButton from '@material-ui/core/IconButton';
import Popover from '@material-ui/core/Popover';
import FormLabel from '@material-ui/core/FormLabel';
import FormControl from '@material-ui/core/FormControl';
import FormGroup from '@material-ui/core/FormGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormHelperText from '@material-ui/core/FormHelperText';
import Checkbox from '@material-ui/core/Checkbox';

import FilterIcon from '@material-ui/icons/FilterList';

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
