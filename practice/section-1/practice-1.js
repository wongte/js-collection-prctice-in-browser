'use strict';

function collectSameElements(collectionA, collectionB) {
  return collectionA.filter((itemA) => collectionB.includes(itemA))
}
