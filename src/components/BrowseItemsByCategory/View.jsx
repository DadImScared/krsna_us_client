
import React from 'react';

import VirtualResults from '../VirtualResults';


const View = ({ items, nextPage, isFetching, setRef, shouldUpdate, updateCb }) => (
  <div>
    {
      isFetching ?
        <div />
        :
        items.length ?
          <VirtualResults updateCb={updateCb} shouldUpdate={shouldUpdate} items={items} nextPage={nextPage} setRef={setRef} />
          :
          <div><p>no results</p></div>
    }
  </div>
);

export default View;
