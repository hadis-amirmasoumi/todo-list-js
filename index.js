let ul = document.querySelector("#tasklist");
let btn = document.querySelector("button");
let input = document.querySelector("input");
let clear = document.getElementById("clearall");
let tasks = JSON.parse(localStorage.getItem("tasks")) || [];


function saveTasks() {
    localStorage.setItem("tasks", JSON.stringify(tasks));
}

function renderTasks() {
    ul.innerHTML = "";
    tasks.forEach((task, index) => {
        let li = document.createElement("li");
        li.classList.add("list");
        let div = document.createElement("div");
        div.classList.add("div-tc");
        let checkbox = document.createElement("input");
        checkbox.type = "checkbox";
        checkbox.checked = task.completed;
        checkbox.classList.add("checkbox")
        let span = document.createElement("span");
        span.textContent = task.text;
        span.classList.add("span")
        let img = document.createElement("img");
        img.src = "cross.png";
        img.classList.add("img")

        checkbox.addEventListener("change", () => {
            tasks[index].completed = checkbox.checked;
            saveTasks();
        });
        img.addEventListener("click", () => {
            tasks.splice(index, 1);
            saveTasks();
            renderTasks();
            
        });

        div.appendChild(checkbox);
        div.appendChild(span);
        li.appendChild(div);
        li.appendChild(img);
        ul.appendChild(li);
    });
        updatecounter();
}

btn.addEventListener("click", () => {
    let inputValue = input.value.trim();
    if (inputValue === "") return;
    tasks.push({
        text: inputValue,
        completed: false
    });
    saveTasks();
    renderTasks();
    input.value = "";
});

clear.addEventListener("click", () => {
    tasks = [];
    saveTasks();
    renderTasks();
});
let counter = document.querySelector("#count")
function updatecounter(){
    counter.innerText = `tasks : ${ul.childElementCount}`
}
renderTasks();


const sekhat = document.querySelector("#sekhat");
const sildebar = document.querySelector("#sildebar");
sekhat.addEventListener("click", () => {
    sildebar.classList.remove("opacity-0", "translate-x-full");
    sildebar.classList.add("opacity-100", "translate-x-0");
});
let clearall2 = document.querySelector("#clearall2")
clearall2.addEventListener("click" , ()=>{
    tasks = [];
    saveTasks();
    renderTasks();
})
let body = document.querySelector("body")

