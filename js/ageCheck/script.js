function ageCheck() {
  var age = Number(document.getElementById("ageInput").value);
  if (age < 0) {
    alert("Приходи, когда вылезешь из мамки ;)");
  } else if (age == 21) {
    alert("Ура, вам уже 21 годиков!");
  } else if (age % 2 != 0) {
    alert("Просто к сведению. У вас нечетный возраст :)");
  } else if (age % Math.sqrt(age) === 0) {
    alert("Ух ты! Идеальный квадрат!");
  } else {
    alert("Спасибо, мы теперь знаем ваш возраст. Это же так важно...");
  }
}