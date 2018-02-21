
import React, { Component } from 'react';

import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import * as AudioActionCreators from '../../actions/audioplayer';

import handleFormState from '../handleFormState';
import View from './View';

const mapDispatchToProps = dispatch => {
  return bindActionCreators({
    setSong: AudioActionCreators.setSong
  }, dispatch);
};

class AudioResult extends Component {
  constructor(...args) {
    super(...args);
    this.state = {
      isOpen: false
    };
  }

  render() {
    return (
      <View
        {...this.props}
        {...this.state}
        closeModal={this.closeModal}
        openModal={this.openModal}
      />
    );
  }

  openModal = () => this.setState({ isOpen: true });

  closeModal = () => this.setState({ isOpen: false });
}

export default handleFormState(connect(null, mapDispatchToProps)(AudioResult));
