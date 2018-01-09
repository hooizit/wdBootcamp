for (var var i = 0; i < 16; i+=8) {
  console.log(i);
}

var str = "ahselljlgo";

for(var i = 1; i < str.length; i+=2) {
  console.log(str[i]);
}

// Print all numbers between -10 and 19
for(var i = -10; i < 20; i++) {
  console.log(i);
}
// Print all even numbers between 10 and 40
for(var i = 10; i < 41; i++) {
  if (i % 2 === 0) {
    console.log(i);
  }
}

// Print all odd numbers between 300 and 333
for(var i = 300; i < 334; i++) {
  if (i % 2 != 0) {
    console.log(i);
  }
}

// Print all numbers divisible by 5 and 3 between 5 and 50
for(var i = 5; i < 51; i++) {
  if (i % 3 === 0 || i % 5 === 0) {
    console.log(i);
  }
}

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