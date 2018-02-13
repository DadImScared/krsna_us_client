
import React, { Component } from 'react';
import axios from 'axios';

import View from './View';

export default class extends Component {
  constructor(...args) {
    super(...args);
    this.state = {
      nextPage: false,
      items: [],
      isFetching: false
    };
  }

  render() {
    return (
      <View
        {...this.state}
        {...this.props}
      />
    );
  }

  async componentDidMount() {
    const { match: { params } } = this.props;
    this.setState({ isFetching: true });
    try {
      const { data: { results, nextPage } } = await axios.get(`/api/v1/items/${params.category}/`);
      this.setState({ items: results, isFetching: false, nextPage });
    }
    catch(e) {
      console.log(e);
    }
  }

  async componentWillReceiveProps(nextProps) {
    const { location, match: { params } } = nextProps;
    if (location.pathname !== this.props.location.pathname) {
      this.setState({ isFetching: true });
      try {
        const { data: { results, nextPage } } = await axios.get(`/api/v1/items/${params.category}/`);
        this.setState({ items: results, isFetching: false, nextPage });
      }
      catch (e) {
        console.log(e);
      }
    }
  }
}
