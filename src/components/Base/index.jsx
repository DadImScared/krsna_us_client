
import React, { Component } from 'react';

import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { bindActionCreators } from 'redux';

import _ from 'lodash';
import Cookies from 'js-cookie';

import withWidth from 'material-ui/utils/withWidth';

import * as SearchActionCreators from '../../actions/search';
import * as VideoActionCreators from '../../actions/videoplayer';
import * as UserActionCreators from '../../actions/user';

import View from './View';

class Base extends Component {
  constructor(...args) {
    console.log(...args);
    super(...args);
    this.state = {
      mobileNavOpen: false,
      shouldSticky: false,
      lastScrollTop: 0,
      directionDown: false,
      bottomOfPage: false,
      videoOffsetHeight: 0
    };
  }

  render() {
    return (
      <View
        {...this.state}
        {...this.props}
        mobileNavToggle={this.mobileNavToggle}
        updatePosition={this.updatePosition}
        closeVideo={this.closeVideo}
        setWindowScroller={this.setRef}
        setVideoOffsetHeight={this.setVideoOffsetHeight}
      />
    );
  }

  componentDidMount() {
    window.addEventListener('scroll', this.scrollListener);
    window.addEventListener('resize', this.resizeListener);
    const token = Cookies.get('token');
    if (token) {
      const provider = Cookies.get('provider');
      this.props.userActions.logIn(provider);
    }
    this.setState({ lastScrollTop: this.getScrollTop() });
  }

  componentWillUnmount() {
    window.removeEventListener('scroll', this.scrollListener);
    window.removeEventListener('resize', this.resizeListener);
  }

  setRef = (el) => {
    this._windowScroller = el;
  };

  setVideoContainerRef = (el) => {
    this.videoContainer = el;
  };

  setVideoRef = (el) => {
    this.videoPlayer = el;
  };

  setVideoOffsetHeight = (offset) => {
    // const offset = Math.floor(this.videoContainer.offsetTop + ( this.videoPlayer.offsetHeight / 2));
    this.setState({ videoOffsetHeight: offset });

  };

  updatePosition = () => {
    this._windowScroller && this._windowScroller.updatePosition();
  };

  closeVideo = () => {
    const { videoActions: { toggleShowVideo } } = this.props;
    toggleShowVideo();
    setTimeout(this.updatePosition, 100);
  };

  toggleStickyPlayer = (scrollTop) => {
    const { shouldSticky, videoOffsetHeight: offset } = this.state;
    if (scrollTop > offset && !shouldSticky) {
      this.setState({ shouldSticky: true });
    }
    else if (scrollTop <= offset && shouldSticky) {
      this.setState({ shouldSticky: false });
    }
  };

  toggleStickyNav = (scrollTop) => {
    const { lastScrollTop, directionDown, bottomOfPage } = this.state;
    if (scrollTop > lastScrollTop) { // scroll down
      if (!directionDown) {
        this.setState({ directionDown: true });
      }
      if (this.atBottomOfPage() && !bottomOfPage) {
        this.setState({ bottomOfPage: true });
      }
    }
    else { // scroll up
      if (directionDown) {
        this.setState({ directionDown: false, bottomOfPage: false });
      }
    }
    this.setState({ lastScrollTop: scrollTop });
  };

  toggleStickyClass = () => {
    const { width, videoplayer } = this.props;
    const scrollTop = this.getScrollTop();
    if (videoplayer.show) this.toggleStickyPlayer(scrollTop);
    switch (width) {
    case 'xs':
    case 'sm':
    case 'md':
      this.toggleStickyNav(scrollTop);
      break;
    default:
      return;
    }
  };

  scrollListener = _.throttle(this.toggleStickyClass, 200);

  resizeListener = _.debounce(this.updatePosition, 200);

  mobileNavToggle = () => {
    this.setState({ mobileNavOpen: !this.state.mobileNavOpen });
  };

  getScrollTop = () => {
    const docEl = document.documentElement;
    return (window.pageYOffset || docEl.scrollTop) - (docEl.clientTop || 0);
  };

  atBottomOfPage = () => {
    const isAtBottom = (window.innerHeight + window.pageYOffset) >= document.body.offsetHeight - 2;
    this.setState({ bottomOfPage: isAtBottom });
  };
}

const mapStateToProps = ({ search: { query, categories }, videoplayer, user }) => ({
  query,
  categories,
  videoplayer,
  user
});

const mapDispatchToProps = dispatch => {
  return {
    searchActions: bindActionCreators(SearchActionCreators, dispatch),
    videoActions: bindActionCreators(VideoActionCreators, dispatch),
    userActions: bindActionCreators(UserActionCreators, dispatch)
  };
};

export default withWidth()(withRouter(connect(mapStateToProps, mapDispatchToProps)(Base)));
