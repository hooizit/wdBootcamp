var p = document.querySelector("p");

p.classList.add("big");

// p.classList.remove("big");
// p.classList.toggle("big");

var tag = document.querySelector("li");

tag.textContent = "bla blah blah";

console.log(document.body.textContent);
console.log(document.body.innerHTML);

var link = document.querySelector("a");
link.setAttribute("href", "https://www.google.kz");

link.textContent = "Link to google.kz";

var img2 = document.getElementsByTagName("img")[1];
img2.setAttribute(
  "src",
  "https://images.unsplash.com/photo-1515135385067-5516a1e38bbe?auto=format&fit=crop&w=967&q=80"
);

document.querySelector("h1").textContent = "END OF THIS LESSON!";

// Events

var h1 = document.querySelector("h1");
h1.addEventListener("click", function() {
  h1.style.background = "orange";
});

document.querySelector("ul").addEventListener("click", function() {
  console.log("you clicked the ul!");
});

var lis = document.querySelectorAll("li");
for (var i = 0; i < lis.length; i++) {
  lis[i].addEventListener("click", function() {
    this.style.color = "pink";
  });
}
