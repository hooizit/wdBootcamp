// -- unshift/shift --
var numbers = [1,2,3];
console.log(numbers); //[1,2,3]
numbers[3]=4;
console.log(numbers); //[1,2,3,4]
numbers.push(5);
console.log(numbers); //[1,2,3,4,5]
numbers.pop();
console.log(numbers); //[1,2,3,4]

// -- unshift/shift --
numbers.unshift("Hello")
console.log(numbers); //["Hello",1,2,3,4]
numbers.shift();
console.log(numbers); //[1,2,3,4]

// --- indexOf ---
var friends=["Charlie", "Liz", "David", "Mattias", "Liz"];
friends.indexOf("David",); //2
friends.indexOf("Liz",); //1 not 4
friends.indexOf("Lee"); //-1

// --- slice ---
var slicedFriends = friends.slice(2,4); // slicedFriends = [David", "Mattias"], friends = ["Charlie", "Liz", "David", "Mattias", "Liz"] 
var otherSlicedFriends = slicedFriends.slice(); // both = [David", "Mattias"]

// --- splice - remove specific index
nums.splice(index,1);

// --- some practic --
var nums = [22, 65, 57, 85, 38];
console.log(nums[nums.length]); // undefined

//--
var friendGroups = [
  ["Harry", "Ron", "Hermione"],
  ["Malfoy", "Crabbe", "Goyle"],
  ["Mooney", "Wormtail", "Prongs"]
];

console.log(friendGroups[2][0]);

// for with arrays

var colors = ["red", "orange", "yelow", "green"];

for(var i = 0; i < colors.length; i++) {
  console.log(colors[i]);
}

// for.Each

colors.forEach(function(color) {
  //color is a placeholder, call it whatever you want
  console.log(color);
});
function printColor(color) {
  console.log("***********");
  console.log(color);
  console.log("***********");
}

// console:
colors.forEach(printColor); 
// [Log] ***********
// [Log] red
// [Log] ***********

// Excercise
var numbers = [1,2,3,4,5,6,7,8,9,10];
var colors = ["red", "orange", "yelow", "green"];

numbers.forEach(function(color) { // переменная colors тут не связана
  if(color % 3 === 0) {
    console.log(color);
  }
});

// - Array problem set

// -- 1. printRevers()
// --- Write a function printReverse() that takes an array as an argument
// --- and prints out the elements in the array in reverse order(don't acrually reverse the array itself)

function printReverse(rev) {
  console.log(rev.reverse());
}

// --- or

function printReverse(rev) {
  for(var i = rev.length -1; i >= 0; i--){
    console.log(rev[i]);
  }
}

// -- 2. isUniform()
// --- Write a function isUniform() which takes an array as an argument
// --- and returns true if all elements in the array are identical

function isUniform(uniform) {
  var f = uniform[0];
  for(var i = 1; i < uniform.length; i++) {
    if(uniform[i] !== f) {
      return false;
    }
  }
  return true;
}

// -- 3. sumArray()
// --- Write a function sumArray() that accepts an array of numbers and
// -- returns the sum of all numbers in the array

function sumArray(sum) {
  console.log(sum.reduce(function(a, b) {
    return a + b;
  }));
}
// --- or

function sumArray(sum) {
  var total = 0;
  sum.forEach(function(element){
    total += element;
  });
    return total;
}

// -- 4. max()
// --- Write a function sumArray() that accepts an array of numbers and
// --- returns the maximum number in the array

function max(arr) {
  var max = arr[0];
  for(var i = 1; i < arr.length; i++) {
    if(arr[i] > max){
      max = arr[i];
    }
  }
  return max;
}
