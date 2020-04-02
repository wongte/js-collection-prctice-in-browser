'use strict';

function collectSameElements(collectionA, collectionB) {
  return collectionA.filter((val) => collectionB.flat().includes(val))
}
