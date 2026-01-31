let input = document.getElementById("text")
let button = document.getElementById("btn")
let list = document.getElementById("list")

button.addEventListener("click", function () {
    let task = input.value;
    let li = document.createElement("li");
    // create checkbox
    let checkbox = document.createElement("input");
    checkbox.type = "checkbox";

    // create text node
    let span = document.createElement("span");
    span.textContent = " " + task;

    li.appendChild(checkbox);
    li.appendChild(span);
    list.appendChild(li);
    input.value = "";
})


