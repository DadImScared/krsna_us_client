
import React, { Component } from 'react';

import _ from 'lodash';
// import axios from 'axios';

export default function(WrapperComponent) {
  return class extends Component {
    constructor(...args) {
      super(...args);
      this.state = {
        form: {},
        formErrors: {}
      };
    }

    validateDebounce = _.debounce((props, state, id, updateFormErrors, validator) => {
      validator(props, state, id, updateFormErrors);
    }, 500);

    updateForm = ({ target: { value } }, id, validator) => {
      const newForm = { ...this.state.form };
      newForm[id] = value;
      this.setState({ form: newForm }, () => {
        if (validator) {
          this.validateDebounce(this.props, this.state, id, this.updateFormErrors, validator);
        }
      });
    };

    updateFormErrors = (newErrors) => this.setState({ formErrors: newErrors });

    handleErrorResponse = (data) => {
      const newErrors = {};
      Object.keys(data).forEach((key) => {
        if (key === 'non_field_errors') {
          newErrors['nonFieldErrors'] = data[key].join(', ');
        }
        else {
          newErrors[key] = data[key].join(', ');
        }
      });
      this.updateFormErrors(newErrors);
    };

    render() {
      return (
        <WrapperComponent
          updateForm={this.updateForm}
          updateFormErrors={this.updateFormErrors}
          handleErrorResponse={this.handleErrorResponse}
          {...this.state}
          {...this.props}
        />
      );
    }
  };
}
