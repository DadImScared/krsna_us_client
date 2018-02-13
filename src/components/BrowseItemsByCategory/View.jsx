
import React from 'react';

// import VirtualResults from '../oldVirtualResults';
import VirtualResults from '../VirtualResults';

const View = ({ items, nextPage, isFetching, setRef }) => (
  <div>
    {
      isFetching ?
        <div>loading data here</div>
        :
        items.length ?
          <VirtualResults items={items} nextPage={nextPage} setRef={setRef} />
          :
          <div><p>no results</p></div>
    }
  </div>
);

export default View;
