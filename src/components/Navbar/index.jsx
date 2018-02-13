
import React, { Component } from 'react';

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import * as SearchActionCreators from '../../actions/search';
import * as UserActionCreators from '../../actions/user';

import View from './View';

const mapStateToProps = ({ search: { query, categories }, user }) => {
  return {
    query,
    categories,
    user
  };
};

const mapDispatchToProps = dispatch => {
  return {
    searchActions: bindActionCreators(SearchActionCreators, dispatch),
    userActions: bindActionCreators(UserActionCreators, dispatch)
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(
  class extends Component {
    constructor(...args) {
      super(...args);
    }

    render() {
      return (
        <View
          {...this.state}
          {...this.props}
        />
      );
    }
  }
);
