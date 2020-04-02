'use strict';

function createUpdatedCollection(collectionA, objectB) {
  return collectionA.map((val) => ({
    count: objectB.value.includes(val.key) ? val.count - parseInt(val.count / 3) : val.count,
    key: val.key
  }))
}
