
import React from 'react';

import VirtualResults from '../VirtualResults';

const View = ({
  suggestions, items, updateCb,
  nextPage, setRef, shouldUpdate, isFetching
}) => (
  <div>
    {suggestions.map((suggestion, i) => <p key={i}>{suggestion.text}</p>)}
    {
      isFetching ?
        <div />
        :
        items.length ?
          <VirtualResults
            shouldUpdate={shouldUpdate}
            updateCb={updateCb}
            items={items}
            nextPage={nextPage}
            setRef={setRef}
          />
          :
          <div>no results</div>
    }
  </div>
);

export default View;
