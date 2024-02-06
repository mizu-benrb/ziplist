const zipList = (arr1, arr2) => {
  if (arr1.length !== arr2.length) {
    return;
  }
  let zippedArr = [];
  for (let i = 0; i < arr1.length; i++) {
    zippedArr.push(arr1[i]);
    zippedArr.push(arr2[i]);
  }
  return zippedArr;
}

const zipListTheSimpleWay = (arr1, arr2) => {
  const zipSeparated = _.zip(arr1, arr2);
  return _.flatten(zipSeparated);
}

let arr1 = ['a','b','c'];
let arr2 = [1, 2, 3];

console.log(zipList(arr1, arr2));
console.log(zipListTheSimpleWay(arr1, arr2));