'use strict';



const calendarBody = document.createElement('tbody');




function createTr() {
    const trElem = document.createElement("tr");
}

function createTd() {
    const tdElem = document.createElement("td");
}

function createAllWeeks(month) {
    month.weeks.forEach( week => {
        const trWeek = createTr();
        week.days.forEach( day => {
           const tdDay = createTd();
           tdDay.innerText = day.date();
           trWeek.appendChild(tdDay);
        });
        calendarBody.appendChild(trWeek);
    });
}


