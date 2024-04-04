const task = document.querySelector('.newTask');
const app = document.querySelector('.app');
const add = document.querySelector('.addTask');
const dueDate = document.querySelector(".dueDate");
const list = document.querySelector('.Task-list');
const popSuccess = document.querySelector('.popUpSuccess');
const Tasks = [];
const popAdded = document.querySelector('.addedMsg');

const emptyMsg = document.querySelector('.emptyMsg');
add.addEventListener('click' , ()=>
{
    if(task.value !== ""){
        const newToDo = document.createElement('div');
        renderUI(newToDo);
        Tasks.push(newToDo);
        list.appendChild(newToDo);
        console.log(Tasks);
        task.value = "";
        showPopUp(popAdded);
    }
})

function renderUI(newToDo)
{
    const due = document.createElement('p');
    const newTask = document.createElement('p');
    const delBtn = document.createElement('button');
    const checkBtn = document.createElement('button');
    const actions = document.createElement('div');
    const status = document.createElement('p');
    if(dueDate.value === ""){
        due.textContent  = "not defined";
    }
    else{
        due.textContent = dueDate.value;
    }
    newTask.textContent = task.value;
    checkBtn.textContent = "✔";
    delBtn.textContent = "X";
    status.textContent = "pending"
    
    actions.appendChild(checkBtn);
    actions.appendChild(delBtn);
    newToDo.appendChild(newTask);
    newToDo.appendChild(due);
    newToDo.appendChild(status);
    newToDo.appendChild(actions);
    delBtn.addEventListener('click', () => {
        // Remove the newToDo element from the list and Tasks array
        list.removeChild(newToDo);
        const index = Tasks.indexOf(newToDo);
        if (index !== -1) {
            Tasks.splice(index, 1);
        }
    });
    checkBtn.addEventListener('click' , ()=>{
        newTask.style.cssText = 'width: 20%; overflow: hidden; white-space: nowrap; text-overflow: ellipsis; text-decoration:line-through';
        due.style.cssText = ' text-decoration:line-through';
        status.textContent = "Completed"
        showPopUp(popSuccess);
    })
    newToDo.style.cssText = 'display: flex; justify-content: space-between; border-bottom: 1px solid black; align-items: center;  padding: 20px; gap: 10px';
    checkBtn.style.cssText = 'padding: 14px; margin-right: 4px' ;
    delBtn.style.cssText = 'padding: 15px 15px';
    
    newTask.style.cssText = 'width: 20%; overflow: hidden; white-space: nowrap; text-overflow: ellipsis;';
    emptyMsg.classList.add('remove');

}
const clearBtn = document.querySelector('.ClearTasks');

clearBtn.addEventListener("click" , ()=>{
    Tasks.forEach((work) =>{
        list.removeChild(work);
    })
    Tasks.length = 0;
    emptyMsg.classList.remove('remove');
})

async function showPopUp(Message) {
    // Add the 'active' class to the element
    Message.classList.add('active');

    // Create a promise that resolves after 3 seconds
    const timeoutPromise = new Promise(resolve => {
        setTimeout(resolve, 2500);
    });

    // Wait for the timeout to complete
    await timeoutPromise;

    // After 3 seconds, remove the 'active' class
    Message.classList.remove('active');
}