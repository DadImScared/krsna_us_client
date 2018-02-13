
import React from 'react';

import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import * as AudioActionCreators from '../../actions/audioplayer';

import View from './View';

const mapDispatchToProps = dispatch => {
  return bindActionCreators({
    setSong: AudioActionCreators.setSong
  }, dispatch);
};

export default connect(null, mapDispatchToProps)((props) => (
  <View {...props} />
));
