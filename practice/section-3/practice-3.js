'use strict';

function createUpdatedCollection(collectionA, objectB) {
  const counter = collectionA.reduce((count, val) => {
    count[val] = count[val] ? count[val] + 1 : 1
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
