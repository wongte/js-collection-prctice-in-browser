'use strict';

function collectSameElements(collectionA, collectionB) {
  return collectionA.filter((val) => collectionB.includes(val))
}
