function guessNumber() {
  var secretNumber = 3;
  var guess = Number(document.getElementById("numberInput").value);
  if (guess == secretNumber) {
    alert("Красавчик, угадали!");
  } else if (guess < 1 || guess > 9) {
    alert("Ээй, че вы там ввели!?");
  } else if (guess > secretNumber){
    alert("Неа, много");
  } else {
    alert("Неа, мало");
  }
}