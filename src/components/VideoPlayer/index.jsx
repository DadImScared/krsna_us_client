
import React, { Component } from 'react';

import _ from 'lodash';

import View from './View';

export default class extends Component {
  render() {
    return (
      <View
        {...this.props}
        setVideoRef={this.setVideoRef}
        setVideoContainerRef={this.setVideoContainerRef}
      />
    );
  }

  updateOffsetHeight = _.debounce(() => {
    this.props.setOffsetHeight(this.getOffset());
  }, 200);

  componentDidMount() {
    window.addEventListener('resize', this.updateOffsetHeight);
    const { setOffsetHeight, offsetHeight, updatePosition } = this.props;

    if (!offsetHeight) setOffsetHeight(this.getOffset());
    updatePosition(); // needed for react-virtualized WindowScroller to work properly
  }

  componentWillUnmount() {
    window.removeEventListener('resize', this.updateOffsetHeight);
  }

  setVideoContainerRef = (el) => {
    this.videoContainer = el;
  };

  setVideoRef = (el) => {
    this.videoPlayer = el;
  };

  getOffset = () => {
    return Math.floor(this.videoContainer.offsetTop + ( this.videoPlayer.offsetHeight / 2));
  };
}
