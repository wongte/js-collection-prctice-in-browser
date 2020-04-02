'use strict';

function createUpdatedCollection(collectionA, objectB) {
  const counter = collectionA.reduce((count, val) => {
    let key, localcount
    if (val.includes('-')) {
      [key, localcount] = val.split('-')
    } else {
      key = val
      localcount = 1
    }
    count[key] = count[key] ? count[key] + localcount : localcount
    return count
  }, {})
  return Object.keys(counter).map(key => ({
    key,
    count: counter[key]
  }))
  .map((val) => ({
    count: objectB.value.includes(val.key) ? val.count - parseInt(val.count / 3) : val.count,
    key: val.key
  }))
}
