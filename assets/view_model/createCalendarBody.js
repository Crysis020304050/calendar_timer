'use strict';

import createNoteElement from "./createNoteElement.js";

import {someDate} from './index.js';


export default function(month) {
    const calendarBody = document.createElement('tbody');

    createAllWeeks(month).forEach( week => {
       calendarBody.appendChild(week);
    });
    return calendarBody;
}



function createTr() {
    return document.createElement("tr");
}

function createTd() {
    return document.createElement("td");
}

function createAllWeeks(month) {
    const weeks = [];
    month.weeks.forEach( week => {
        const trWeek = createTr();
        week.days.forEach( day => {
           const tdDay = createTd();


           tdDay.innerText = day.date.getDate();
           if (day._isCurrent) {
               tdDay.style.color= 'red';
           }
           if (day.date.getMonth() !== someDate.getMonth()) {
               tdDay.style.opacity = '0.3';
           }
           else {
               tdDay.style.cursor = "pointer";
               tdDay.addEventListener('click', function () {
                   const container = document.getElementById("calendarContainer");
                   container.style.display = "none";

                   if (document.getElementById(`${day.date.getTime()}`) === null) {
                       const notesContainer = document.getElementById("notesContainer");
                       const task = createNoteElement();
                       task.setAttribute("id", `${day.date.getTime()}`);
                       notesContainer.appendChild(task);
                   }
                   else {
                       document.getElementById(`${day.date.getTime()}`).style.display = "flex";
                   }


               });

           }
            trWeek.appendChild(tdDay);


        });
        weeks.push(trWeek);
    });



    return weeks;

}


