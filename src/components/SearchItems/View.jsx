
import React from 'react';

import VirtualResults from '../VirtualResults';

const View = ({
  suggestions, items,
  nextPage, isFetching, setRef
}) => (
  <div>
    {suggestions.map((suggestion, i) => <p key={i}>{suggestion.text}</p>)}
    {
      items.length ?
        <VirtualResults items={items} nextPage={nextPage} setRef={setRef} />
        :
        <div>no results</div>
    }
  </div>
);

export default View;
