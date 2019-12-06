'use strict';

import createCalendarHeader from "./calendarHead.js";
import createCalendarBody from "./createCalendarBody.js";



export default function (month) {

  /*  const calendarContainer = document.getElementById("calendarContainer");*/
    const calendarTableElem = document.createElement('table');
    calendarTableElem.classList.add('month');

    calendarTableElem.appendChild( createCalendarHeader(month) );
    calendarTableElem.appendChild( createCalendarBody(month) );




    return calendarTableElem;

};