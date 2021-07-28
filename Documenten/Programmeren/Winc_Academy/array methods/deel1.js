// const addTheWordCool = function(array){
//     // add your code
// }
// console.log("Add cool:", addTheWordCool(["nice", "awesome", "tof"]));
// // resultaat: ["nice", "awesome", "tof", "cool"]

var expressions = ["nice", "awesome", "tof"]
expressions.push('cool')

console.log(expressions)
// resultaat: ["nice", "awesome", "tof", "cool"]


// console.log(amountOfElementsInArray(['appels', 'peren', 'citroenen'])); 
// // 3

var fruits = ['appels', 'peren', 'citroenen']
console.log(fruits.length)
// 3

// console.log(selectBelgiumFromBenelux(["Belgie", "Nederland", "Luxemburg"])); 
// resultaat: "Belgie" 
var arr = ["Belgie", "Nederland", "Luxemburg"]
console.log(arr[0])


// console.log(lastElementInArray(["Haas", "Cavia", "Kip", "Schildpad"])); 
// resultaat: "Schildpad"
var lastElementInArray = ["Haas", "Cavia", "Kip", "Schildpad"]
console.log(lastElementInArray[3])
// OF
console.log(lastElementInArray[lastElementInArray.length - 1])


const presidents = ["Trump", "Obama", "Bush", "Clinton"] 
const presidents2 = ["Trump", "Obama", "Bush", "Clinton"] 
  
//   const impeachTrumpSlice = function(array) {
//   (...)
//   }
//   const impeachTrumpSplice = function(array) {
//         (...)
//   }
  
//   console.log(impeachTrumpSlice(presidents)); // ["Obama", "Bush", "Clinton"]
//   console.log(impeachTrumpSplice(presidents)); // ["Obama", "Bush", "Clinton"]

  var removedItem = presidents.splice(1)
  console.log(removedItem)  

  var shallowCopy = presidents2.slice(1,4) 
  console.log(shallowCopy)


//   console.log(stringsTogether(['Winc', 'Academy', 'is', 'leuk', ';-}'])) 
  //resultaat: "Winc Academy is leuk ;-}"

  const stringsTogether = ['Winc', 'Academy', 'is', 'leuk', ';-}'];
  console.log(stringsTogether.join(' '));


//   combineArrays([1,2,3], [4,5,6]) 
  // resultaat: [1,2,3,4,5,6]

const arr1 = [1,2,3];
const arr2 = [4,5,6];

const combined = [].concat(arr1, arr2);
console.log (combined)