export function TasksInCards(item) {
    const card = document.createElement('div');

    const title = document.createElement('h3');
    const description = document.createElement('p');
    const date = document.createElement('span');
    const time = document.createElement('span');
    const status = document.createElement('p');
    const info = document.createElement('div');
    const editBtn = document.createElement('img');

    card.classList.add('card');
    description.classList.add('description');
    info.classList.add('info');
    editBtn.classList.add('cardIcon');

    title.textContent = item.title;
    description.textContent = item.description;
    date.textContent = item.date;
    time.textContent = item.time;
    status.textContent = item.status === true ? 'Выполнено' : item.status === 'in-progress' ? 'В прогрессе' : 'Не выполнено';
    status.style.color = item.status === true ? 'black' : item.status === 'in-progress' ? 'rgba(0, 127, 255, 1)' : 'red';
    editBtn.src = "./img/edit.512x512.png";

    editBtn.onclick = () => {
        currentEditTask = item;

        title.value = currentEditTask.title;
        description.value = currentEditTask.description;
        date.value = currentEditTask.date;
        time.value = currentEditTask.time;
        status.value = currentEditTask.status === true ? 'Выполнено' : item.status === 'in-progress' ? 'В прогрессе' : 'Не выполнено';

        editForm.style.display = 'flex';
    };

    info.append(date, time);
    card.append(title, description, info, status, editBtn);


    return card;
};