'use strict';

function collectSameElements(collectionA, collectionB) {
  return collectionA.filter((itemA) => collectionB.flat().includes(itemA))
}
