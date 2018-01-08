var todos = ["Buy new PC"];

var input = prompt("What you like to do?");

while (input !== "quit") {
  //handle input
  if (input === "list") {
    console.log(todos);
  } else if (input === "new") {
    //ask new todo
    var newTodo = prompt("Enter new todo");
    //add to todos array
    todos.push(newTodo);
  }
  //ask again for new input
  input = prompt("What you like to do?");
}
console.log("quit");
