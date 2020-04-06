'use strict';

function createUpdatedCollection(collectionA, objectB) {
  return collectionA.map((itemA) => ({
    count: objectB.value.includes(itemA.key) ? itemA.count - 1 : itemA.count,
    key: itemA.key
  }))
}
