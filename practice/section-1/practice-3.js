'use strict';

function collectSameElements(collectionA, objectB) {
  return collectionA.filter((itemA) => objectB.value.includes(itemA))
}
