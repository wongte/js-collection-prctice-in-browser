'use strict';

function createUpdatedCollection(collectionA, objectB) {
  return collectionA.map((itemA) => ({
    count: objectB.value.includes(itemA.key) ? itemA.count - parseInt(itemA.count / 3) : itemA.count,
    key: itemA.key
  }))
}
