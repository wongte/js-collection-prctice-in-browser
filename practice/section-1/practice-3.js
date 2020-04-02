'use strict';

function collectSameElements(collectionA, objectB) {
  return collectionA.filter((val) => objectB.value.includes(val))
}
