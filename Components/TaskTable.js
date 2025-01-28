const modal = document.querySelector('#task-modal');
const form = document.forms.addNewTask;

export function TasksInTable(item) {
    const mainTitle = document.querySelector('#title');

    const tr = document.createElement('tr');
    const title = document.createElement('td');
    const description = document.createElement('td');
    const date = document.createElement('td');
    const time = document.createElement('td');
    const status = document.createElement('td');
    const iconEditTable = document.createElement('img');

    description.classList.add('descp');
    title.classList.add('title');
    status.classList.add('status');
    iconEditTable.classList.add('img');

    title.textContent = item.title;
    description.textContent = item.description;
    date.textContent = item.date;
    time.textContent = item.time;
    status.textContent = item.status === true ? 'Выполнено' : item.status === 'in-progress' ? 'В прогрессе' : 'Не выполнено';
    status.style.color = item.status === true ? 'black' : item.status === 'in-progress' ? 'rgba(0, 127, 255, 1)' : 'red';
    iconEditTable.src = "./img/edit.512x512.png";

    iconEditTable.onclick = () => {
        let currentEditTask = item;
        mainTitle.innerHTML = 'Изменить';

        form.id = item.id;
        form.title.value = currentEditTask.title;
        form.description.value = currentEditTask.description;
        form.date.value = currentEditTask.date;
        form.time.value = currentEditTask.time;
        form.status.value = currentEditTask.status;

        modal.style.display = 'flex';
    };

    tr.append(title, description, date, time, status, iconEditTable);

    return tr;
};