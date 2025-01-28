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
const mainTitle = document.querySelector('#title');


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
    mainTitle.innerHTML = 'Добавить';
    deleteBtnInModal.style.display = 'none';
};

btnCloseBtn.onclick = () => {
    modal.style.display = 'none';
};

let form = document.forms.addNewTask;

form.onsubmit = (event) => {
    event.preventDefault();

    let fn = new FormData(form);

    let task = {
        id: Math.random(),
        title: fn.get('title'),
        description: fn.get('description'),
        date: fn.get('date'),
        time: fn.get('time'),
        status: fn.get('status') === 'true' ? true : fn.get('status') === 'false' ? false : 'in-progress'
    };

    if (form.id) {
        const newTasks = tasks.map(item => {
            if (form?.id == item.id) {
                item = task;
            }

            return item;
        });


        render(newTasks, tableBody, TasksInTable);
        render(newTasks, cardContainer, TasksInCards);

        modal.style.display = 'none';
        form.reset();

        return;
    }

    tasks.push(task);

    render(tasks, tableBody, TasksInTable);
    render(tasks, cardContainer, TasksInCards);

    modal.style.display = 'none';
    form.reset();

};