'use strict';

function createUpdatedCollection(collectionA, objectB) {
  const counter = collectionA.reduce((count, itemA) => {
    let key, localcount
    if (itemA.includes('-')) {
      [key, localcount] = itemA.split('-')
    } else {
      key = itemA
      localcount = 1
    }
    count[key] = count[key] ? count[key] + localcount : localcount
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
