
import React from 'react';

import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import * as VideoActionCreators from '../../actions/videoplayer';

import View from './View';

const mapDispatchToProps = dispatch => {
  return bindActionCreators({
    setVideo: VideoActionCreators.setVideo
  }, dispatch);
};

export default connect(null, mapDispatchToProps)((props) => (
  <View {...props} />
));
