export function TasksInTable(item) {

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
        currentEditTask = item;

        title.value = currentEditTask.title;
        description.value = currentEditTask.description;
        date.value = currentEditTask.date;
        time.value = currentEditTask.time;
        status.value = currentEditTask.status === true ? 'Выполнено' : item.status === 'in-progress' ? 'В прогрессе' : 'Не выполнено';

        editForm.style.display = 'flex';
    };

    tr.append(title, description, date, time, status, iconEditTable);

    return tr;
};