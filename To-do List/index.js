const task = document.querySelector('.newTask');
const app = document.querySelector('.app');
const add = document.querySelector('.addTask');
const dueDate = document.querySelector(".dueDate");
const list = document.querySelector('.Task-list');

const Tasks = [];
add.addEventListener('click' , ()=>
{
    if(task.value !== ""){
        const newToDo = document.createElement('div');
        renderUI(newToDo);
        Tasks.push(newToDo);
        list.appendChild(newToDo);
        console.log(Tasks);
        task.value = "";
    }
})

function renderUI(newToDo)
{
    const due = document.createElement('p');
    const newTask = document.createElement('p');
    const delBtn = document.createElement('button');
    const checkBtn = document.createElement('button');
    const actions = document.createElement('div');
    if(dueDate.value === ""){
        due.textContent  = " due not defined";
    }
    else{
        due.textContent = dueDate.value;
    }
    newTask.textContent = task.value;
    checkBtn.textContent = "✔";
    delBtn.textContent = "X";

    actions.appendChild(checkBtn);
    actions.appendChild(delBtn);
    newToDo.appendChild(newTask);
    newToDo.appendChild(due);
    newToDo.appendChild(actions);
    delBtn.addEventListener('click', () => {
        // Remove the newToDo element from the list and Tasks array
        list.removeChild(newToDo);
        const index = Tasks.indexOf(newToDo);
        if (index !== -1) {
            Tasks.splice(index, 1);
        }
    });
    newToDo.style.cssText = 'display: flex; justify-content: space-between; border: 1px solid black; border-top: none; padding: 20px; gap: 2px';

}
const clearBtn = document.querySelector('.ClearTasks');

clearBtn.addEventListener("click" , ()=>{
    Tasks.forEach((work) =>{
        list.removeChild(work);
    })
    Tasks.length = 0;
})

