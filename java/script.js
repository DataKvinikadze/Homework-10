// adding needed Elements:

let input = document.getElementById("input");
let btn = document.getElementById("main_btn");
let unorderedList = document.querySelector(".list");
let x = 1;
let header = document.querySelector("h1");

// Adding EventListener function:

btn.addEventListener("click", function () {
  // creating list item STRUCTURE: <li>

  let list_item = document.createElement("li");
  let listContent = document.createElement("span");
  let done_delete = document.createElement("div");
  let btn1 = document.createElement("img");
  let btn2 = document.createElement("img");
  btn1.src = "./photos/Vector.svg";
  btn2.src = "./photos/TrashSimple.svg";

  // appending each

  list_item.appendChild(listContent);
  list_item.appendChild(done_delete);
  done_delete.appendChild(btn1);
  done_delete.appendChild(btn2);

  // adding classes:

  done_delete.classList.add("done_delete");

  // if input value isnt nothing

  if (input.value.trim() !== "") {
    listContent.textContent = input.value.trim();
    unorderedList.appendChild(list_item);
  }

  // done_delete Event Listener

  btn2.addEventListener("click", function () {
    list_item.remove();
  });

  btn1.addEventListener("click", function () {
    listContent.classList.toggle("done");
  });

  input.value = "";
});
