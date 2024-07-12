const inputBox = document.getElementById("input-box");
const listContainer = document.getElementById("list-container")

const addTask = () => {
    if (inputBox.value === '') {
        alert("Write a task!");
    } else {
        let li = document.createElement("li");
        li.innerHTML = inputBox.value;
        listContainer.appendChild(li);
    }
}