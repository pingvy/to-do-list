const main = document.querySelector('.container');
const form = main.querySelector('.list');
const input = form.querySelector('.list__input');
const buttonAddTask = form.querySelector('.list__add-task-btn');
const listOfTasks = main.querySelector('.tasks');

//ad task function
const addTask = (task) => {
    const tasksTemplate = listOfTasks.querySelector('#tasks__template').content;
    const taskElement = tasksTemplate.cloneNode(true);
    const taskItem = taskElement.querySelector('.tasks__item');
    const checkboxContainer = taskItem.querySelector('.tasks__checkbox-containter');
    const checkbox = checkboxContainer.querySelector('.tasks__checkbox');
    const taskText = checkboxContainer.querySelector('.tasks__text');
    const deleteTaskButton = taskItem.querySelector('.tasks__delete-btn');

    taskText.textContent = task;
    listOfTasks.prepend(taskElement);
    input.value = '';

    deleteTaskButton.addEventListener('click', () => {
        const closestElementsItem = deleteTaskButton.closest('.tasks__item');
        closestElementsItem.remove();
    })
}

form.addEventListener('submit', (event) => {
    event.preventDefault();
    addTask(input.value);   
});