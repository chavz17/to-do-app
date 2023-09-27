function add() {
    const input = document.querySelector("input");
    const addBtn = document.querySelector("#addBtn");
    const cancelBtn = document.querySelector("#cancelBtn");
    const div = document.createElement("div");
    const heading = document.querySelector("h1");

    div.className = "list-item";
    div.innerHTML = input.value;
    heading.after(div);

    input.setAttribute("hidden", "hidden");
    addBtn.setAttribute("hidden", "hidden");
    cancelBtn.setAttribute("hidden", "hidden");
}

function cancel() {
    const input = document.querySelector("input");
    const addBtn = document.querySelector("#addBtn");
    const cancelBtn = document.querySelector("#cancelBtn");

    input.setAttribute("hidden", "hidden");
    addBtn.setAttribute("hidden", "hidden");
    cancelBtn.setAttribute("hidden", "hidden");
}

function addItem() {
    const input = document.querySelector("input");
    const addBtn = document.querySelector("#addBtn");
    const cancelBtn = document.querySelector("#cancelBtn");

    input.removeAttribute("hidden");
    addBtn.removeAttribute("hidden");
    cancelBtn.removeAttribute("hidden");
}