var num = 1;
while(num <= 20) {
  if (num % 4 ===0) {
    console.log(num);
  }
  num++;
}
// Print all numbers between -10 and 19
var num = 19;
while(num >= -10) {
  console.log(num);
  num--;
}
// Print all even numbers between 10 and 40
var num = 10;
while(num <= 40) {
  if (num % 2 === 0) {
    console.log(num);
  }
  num++;
}
// Print all odd numbers between 300 and 333
var num = 300;
while(num <= 333) {
  if (num % 2 != 0) {
    console.log(num);
  }
  num++;
}
// Print all numbers divisible by 5 and 3 between 5 and 50
var num = 5;
while(num <= 50) {
  if (num % 3 === 0 || num % 5 === 0) {
    console.log(num);
  }
  num++;
}