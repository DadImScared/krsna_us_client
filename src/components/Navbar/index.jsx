
import React from 'react';

import { withRouter } from 'react-router-dom';

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import * as SearchActionCreators from '../../actions/search';
import * as UserActionCreators from '../../actions/user';

import View from './View';

const Navbar = (props) => <View {...props} />;

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

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Navbar));
