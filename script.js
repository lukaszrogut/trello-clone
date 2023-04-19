const draggables = document.querySelectorAll("[draggable=true]")
const taskLanes = document.querySelectorAll(".tasks")

let draggedElement

document.addEventListener("dragstart", dragStart)

taskLanes.forEach((lane) => {
  lane.addEventListener("dragover", dragOver)
  lane.addEventListener("dragenter", dragEnter)
  lane.addEventListener("dragleave", dragLeave)
  lane.addEventListener("drop", dragDrop)
})

function dragStart(e) {
  if (e.target.classList.contains("task")) {
    draggedElement = e.target
    setTimeout(() => e.target.classList.add("dragging"), 0)
  }
}
function dragOver(e) {
  e.preventDefault()
  console.log("over")
}
function dragEnter() {
  this.parentElement.classList.add("hover")
}
function dragLeave() {
  this.parentElement.classList.remove("hover")
}
function dragDrop() {
  console.log("drop", this)
  this.appendChild(draggedElement)
  draggedElement.classList.remove("dragging")
  this.parentElement.classList.remove("hover")
}

const forms = document.querySelectorAll("form")
forms.forEach((form) => {
  form.addEventListener("submit", submitTask)
})

function submitTask(e) {
  e.preventDefault()

  let input = this.querySelector(".task-input").value
  if (input.length > 2) {
    const element = `<div draggable="true" class="task">${input}</div>`
    const closestTaskLane = this.previousElementSibling
    closestTaskLane.innerHTML += element
    this.querySelector(".task-input").value = ""
  }
}
