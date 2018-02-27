
import React from 'react';

import AudioResult from './components/AudioResult';
import VideoResult from './components/VideoResult';

const CATEGORIES = {
  'movie': {
    displayName: 'Movies',
    component: <VideoResult />
  },
  'song': {
    displayName: 'Song',
    component: <AudioResult />
  },
  'book': 'Books',
  'harikatha': 'Harikatha',
  'lecture': {
    displayName: 'Lectures',
    component: <AudioResult />
  },
  'harmonistmonthly': 'Harmonist Monthly',
  'harmonistmagazine': 'Harmonist Magazine',
  'bhagavatpatrika': 'Bhagavat Patrika'
};

export default CATEGORIES;
