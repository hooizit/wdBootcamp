var todos = ["todo 1", "todo 2"];

var input = prompt("What you like to do? NOTE: l - list todo's; n - new todo; q - quit");

while (input !== "q") {
  //handle input
  if (input === "l") {
    console.log("-----------------");
    todos.forEach(function(todo, i){
      console.log(i + ": " + todo);
    });
    console.log("-----------------");
  } else if (input === "n") {
    //ask new todo
    var newTodo = prompt("Enter new todo");
    //add to todos array
    todos.push(newTodo);
    console.log("Added Todo")
  } else if (input === "r") {
    //ask for index of todo to be removed
    var index = prompt("Enter index of todo to remove");
    //delet that todo
    todos.splice(index,1);
    console.log("Removed Todo")
  }
  //ask again for new input
  input = prompt("What you like to do? NOTE: l - list todo's; n - new todo; q - quit");
}
console.log("quit");
