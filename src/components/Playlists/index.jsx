
import React from 'react';

import { connect } from 'react-redux';

import View from './View';


const Playlists = (props) => <View {...props} />;

const mapStateToProps = ({ user: { loggedIn } }) => ({
  loggedIn
});

export default connect(mapStateToProps)(Playlists);
