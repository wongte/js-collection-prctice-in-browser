'use strict';

function createUpdatedCollection(collectionA, objectB) {
  const counter = collectionA.reduce((count, itemA) => {
    count[itemA] = count[itemA] ? count[itemA] + 1 : 1
    return count
  }, {})
  return Object.keys(counter).map(key => ({
    key,
    count: counter[key]
  }))
  .map((itemA) => ({
    count: objectB.value.includes(itemA.key) ? itemA.count - parseInt(itemA.count / 3) : itemA.count,
    key: itemA.key
  }))

}
