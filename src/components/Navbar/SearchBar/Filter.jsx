
import React, { Component } from 'react';

import Button from '@material-ui/core/Button';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import Popover from '@material-ui/core/Popover';
import FormControl from '@material-ui/core/FormControl';
import FormGroup from '@material-ui/core/FormGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
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
    const {
      categories,
      actions: { toggleCategory, selectAllCategories, unSelectAllCategories },
      classes
    } = this.props;
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
      <div>
        <Toolbar disableGutters={true} classes={{ root: classes.toolbar }}>
          <Button style={{ marginRight: 4 }} onClick={selectAllCategories} variant={'outlined'} size={'small'}>
            select all
          </Button>
          <Button onClick={unSelectAllCategories} variant={'outlined'} size={'small'}>
            un-select all
          </Button>
        </Toolbar>
        <FormControl component='fieldset'>
          <FormGroup>
            {checkBoxGroup}
          </FormGroup>
        </FormControl>
      </div>
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
