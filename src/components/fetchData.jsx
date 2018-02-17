
import React, { Component } from 'react';

import axios from 'axios';

const fetchData = (dataDepsFn, loadFromNewProps, axiosOptions) => (Wrapper) => {
  return class FetchData extends Component {
    constructor(...args) {
      super(...args);
      this.state = {
        isLoading: false,
        data: {},
        errorData: {}
      };
    }

    render() {
      const{ isLoading, data } = this.state;
      return isLoading ? (
        <div>load here</div>
      ) : (
        <Wrapper {...this.props} getUrl={() => dataDepsFn(this.props)} reloadPage={this.getData} data={data} />
      );
    }

    componentDidMount() {
      this.getData();
    }

    async componentWillReceiveProps(nextProps) {
      // optional check to determine if the data source should be fetched
      // used to prevent fetching the same url if no change like /playlists/12
      // console.log(loadFromNewProps(this.props, nextProps));
      if (loadFromNewProps && loadFromNewProps(this.props, nextProps)) {
        this.getData();
      }
      if (!loadFromNewProps) { // default of fetch data is to load data on nextProps
        this.getData();
      }
    }

    getData = async () => {
      const url = dataDepsFn(this.props);
      this.setState({ isLoading: true });
      try {
        const { data } = await axios.get(url, axiosOptions && axiosOptions());
        this.setState({ data, isLoading: false });
      }
      catch ({ response: { data } }) {
        this.setState({ errorData: data, isLoading: false });
      }
    }
  };
};

export default fetchData;
