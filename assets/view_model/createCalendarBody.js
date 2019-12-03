'use strict';


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

           trWeek.appendChild(tdDay);
        });
        weeks.push(trWeek);
    });

    /*month.weeks.forEach( week => {
        week.days.forEach( item => console.log(item.date.getMonth()));
    });*/

    return weeks;

}


