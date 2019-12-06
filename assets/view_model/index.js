'use strict';

import model from '../model/index.js'
import createCalendar from "./createCalendar.js";
import createPreviosMonthButton from './createPreviosMonthButton.js';
import createNextMonthButton from './createNextMonthButton.js';
import createNewYearTimer from './createNewYearTimer.js';


export let someDate = new Date();

createPreviosMonthButton();
createNextMonthButton();
createNewYearTimer();




export let month = new model.Month( someDate );



const calendarContainer = document.getElementById("calendarContainer");
const calendar = createCalendar(month);
calendar.setAttribute("id", "calendar");
calendarContainer.appendChild(calendar);

/*
const date = new Date();

console.log( date.toLocaleString('ru', {weekday: 'short'}) + " \n " + date.toLocaleString('ru', {month: 'long'}) + " " + date.getDate() );
*/