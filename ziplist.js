// Arnold Shek
// ICS 314 Spring 2018

const letterlist = ['a', 'b', 'c'];
const numberlist = [1, 2, 3];

function zipList(list1, list2) {
  const returnlist = [];
  for (let i = 0; i < list1.length; i++) {
    returnlist.push(list1[i]);
    returnlist.push(list2[i]);
  }
  return returnlist;
}

function zipListTheSimpleWay(list1, list2) {
  return _.flatten(_.zip(list1, list2));
}

console.log(zipList(letterlist, numberlist));
console.log(zipListTheSimpleWay(letterlist, numberlist));