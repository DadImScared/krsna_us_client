
import React from 'react';

import MediaResultDisplay from '../../components/MediaResultDisplay';

const View = ({ item, setSong }) => (
  <MediaResultDisplay item={item} setMediaItem={setSong} />
);

export default View;
