import { tasks } from "./Libs/tasks.js";
import { render } from "./Libs/utils.js";
import { TasksInTable } from "./Components/TaskTable.js";
import { TasksInCards } from "./Components/TaskCards.js";

const tableBody = document.querySelector('tbody');
const cardContainer = document.querySelector('.cards');

render(tasks, tableBody, TasksInTable);
render(tasks, cardContainer, TasksInCards);

const tableView = document.querySelector('table');
const gridView = document.querySelector('#cards-view');
const table = document.querySelector('#table');
const grid = document.querySelector('#grid')

table.onclick = () => {
    tableView.style.display = 'table';
    gridView.style.display = 'none';

    grid.classList.remove('active');
    table.classList.add('active');

    render(tasks, tableBody, TasksInTable);

};

grid.onclick = () => {
    tableView.style.display = 'none';
    gridView.style.display = 'grid';

    table.classList.remove('active');
    grid.classList.add('active');

    render(tasks, cardContainer, TasksInCards);

};

const btnAddTask = document.querySelector('.add-task');
const modal = document.querySelector('#task-modal');
const btnCloseBtn = document.querySelector('.form-close');

btnAddTask.onclick = () => {
    modal.style.display = 'flex';
};

btnCloseBtn.onclick = () => {
    modal.style.display = 'none';
};


let addForm = document.forms.addNewTask;

addForm.onsubmit = (event) => {
    event.preventDefault();
    
    let fn = new FormData(form);
    
    let newTask = {
        title: fn.get('title'),
        description: fn.get('description'),
        date: fn.get('date'),
        time: fn.get('time'),
        status: fn.get('status') === 'true' ? true : fn.get('status') === 'false' ? false : 'in-progress'
    };

    console.log(newTask);
    tasks.push(newTask);
    
    render(tasks, tableBody, TasksInTable);
    render(tasks, cardContainer, TasksInCards);
    
    modal.style.display = 'none';
    form.reset();
};

let editForm = document.forms.editTask;
let currentEditTask = null;

editForm.onsubmit = (e) => {
    e.preventDefault()

    if (currentEditTask) {

        currentEditTask.title = editForm.title.value;
        currentEditTask.description = editForm.description.value;
        currentEditTask.date = editForm.date.value;
        currentEditTask.time = editForm.time.value;
        currentEditTask.status = editForm.status.value === 'true' ? true : editForm.status.value === 'false' ? false : 'in-progress';

        render(tasks, tableBody, TasksInTable);
        render(tasks, cardContainer, TasksInCards);

        modal.style.display = 'none';
        editForm.reset();
        currentEditTask = null;
    };
};
