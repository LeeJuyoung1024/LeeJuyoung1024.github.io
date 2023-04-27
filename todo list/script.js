const form = document.getElementById("todo-form");
const input = document.querySelector("input[type='text']");
const clear = document.getElementById("clear-button");
const todo_list = document.getElementById("todo-list");
const todo_text = input.value;

form.addEventListener("submit", (e) => {
    e.preventDefault();
    const todo_text = input.value;

    if (todo_text.trim()) {
        const todo_item = document.createElement("li");
        todo_item.innerHTML = todo_text;
        todo_list.appendChild(todo_item);
        input.value = "";
    }
});

todo_list.addEventListener("click", (e) => {
    if (e.target.tagName === "LI") {
        e.target.remove();
    }
});


clear.addEventListener("click", () => {
    todo_list.innerHTML = "";
});