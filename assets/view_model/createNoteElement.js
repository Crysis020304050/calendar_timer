'use strict';

export default function () {
    const tasks = [];

    const TASK_PATTERN= /(?!^\s*?$)^.+$/;

    let counter = 0;



    const mainContainer = document.createElement("div");
    mainContainer.setAttribute("class", "mainContainer");


    const closeButton = document.createElement("button");
    closeButton.classList.add("closeNoteButton");
    closeButton.innerText = "x";
    closeButton.onclick = function () {
        const container = document.getElementById("calendarContainer");

        mainContainer.style.display = "none";
        container.style.display = "flex";

    };

    const pendingTasks = document.createElement("div");
    pendingTasks.setAttribute("class", "pendingTasks");
    pendingTasks.innerText = "Pending tasks (0)";


    const taskListElem = document.createElement("div");
    taskListElem.setAttribute("id", "tasksList");

    const inputTask = document.createElement("div");
    inputTask.setAttribute("class", "inputTask");
    const inputValue = document.createElement("input");
    inputValue.setAttribute("class", "inputValue");
    inputValue.setAttribute("type", "text");
    inputValue.setAttribute("placeholder", "Write a new task");
    inputTask.appendChild(inputValue);
    const addTask = document.createElement("div");
    addTask.setAttribute("id", "addTask");
    addTask.innerText = "Add";

    addTask.addEventListener('click', event => {
        event.stopPropagation();



        /*const textInInput = document.getElementsByClassName("inputValue")[0];*/
        if (tasks.indexOf(inputValue.value) === -1 && inputValue.value.match(TASK_PATTERN)) {
            tasks.push(inputValue.value);
            inputValue.value = "";
            taskListElem.appendChild(createTask(tasks[tasks.length-1]));
            counter++;
          /*  const pendingTasks = document.getElementsByClassName("pendingTasks")[0];*/
            pendingTasks.innerText = `Pending tasks (${counter})`;
        }

        else {
            inputValue.classList.add("inputValueWrong");
            setTimeout(wrongValue, 200);
        }

        function wrongValue() {
            inputValue.classList.remove("inputValueWrong")
        }

    });

    inputTask.appendChild(addTask);


    mainContainer.appendChild(closeButton);
    mainContainer.appendChild(pendingTasks);
    mainContainer.appendChild(taskListElem);
    mainContainer.appendChild(inputTask);



    return mainContainer;






    function createTask(task) {
        const taskContainer = document.createElement("div");
        taskContainer.classList.add("task");

        const getId = mainContainer.id;

        taskContainer.setAttribute("id", `${tasks.indexOf(task)}${getId}`);

        const taskText = document.createElement("div");
        taskText.classList.add("userTask");
        taskText.innerText = task;

        const completeButton = document.createElement("label");
        completeButton.classList.add("completeButton");
        completeButton.innerText = "Complete";
        const completeButtonCheckbox = document.createElement("input");
        completeButtonCheckbox.setAttribute("type", "checkbox");
        completeButton.appendChild(completeButtonCheckbox);

        const removeButton = document.createElement("div");
        removeButton.classList.add("removeButton");
        removeButton.innerText = "X";

        removeButton.addEventListener('click', (event) => {
            event.stopPropagation();
            const userTaskList = document.getElementById(`${tasks.indexOf(task)}${getId}`);
            userTaskList.remove();

            counter--;
           /* const pendingTasks = document.getElementsByClassName("pendingTasks")[0];*/
            pendingTasks.innerText = `Pending tasks (${counter})`;

        });

        completeButtonCheckbox.addEventListener('change', event => {
            if (completeButtonCheckbox.checked) {
                taskText.classList.add("userTaskDone");
            }
            else {
                taskText.classList.remove("userTaskDone");
            }
        });


        taskContainer.appendChild(taskText);
        taskContainer.appendChild(completeButton);
        taskContainer.appendChild(removeButton);

        return taskContainer;

    }

    /*const addTaskButton = document.getElementById("addTask");
    addTaskButton.addEventListener('click', event => {
        event.stopPropagation();

        console.log("test");

        const textInInput = document.getElementsByClassName("inputValue")[0];
        if (tasks.indexOf(textInInput.value) === -1 && textInInput.value.match(TASK_PATTERN)) {
            tasks.push(textInInput.value);
            textInInput.value = "";
            taskListElem.appendChild(createTask(tasks[tasks.length-1]));
            counter++;

            const pendingTasks = document.getElementsByClassName("pendingTasks")[0];
            pendingTasks.innerText = `Pending tasks (${counter})`;
        }

        else {
            textInInput.classList.add("inputValueWrong");
            setTimeout(wrongValue, 200);
        }

        function wrongValue() {
            textInInput.classList.remove("inputValueWrong")
        }

    });*/
}