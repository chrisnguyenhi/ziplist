/**
 * solving
 * Created by chrisnguyenhi on 2/5/17.
 */

const test1 = ['a', 'b', 'c'];
const test2 = [3, 3, 1];

function zipList(list1, list2) {
  let resultant = [];
  for (let i = 0; i < list1.length; i++) {
    resultant.push(list1[i]);
    resultant.push(list2[i]);
  }
  return resultant;
}

console.log(zipList(test1, test2));

function zipListTheSimpleWay(list1, list2) {
  return _.flatten(_.zip(list1, list2));
}

console.log(zipListTheSimpleWay(test1, test2));