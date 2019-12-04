'use strict';

import model from '../model/index.js'
import createCalendar from "./createCalendar.js";
import createPreviosMonthButton from './createPreviosMonthButton.js';
import createNextMonthButton from './createNextMonthButton.js';

export let someDate = new Date();

createPreviosMonthButton();
createNextMonthButton();



export let month = new model.Month( someDate );



const calendar = document.body.appendChild( createCalendar(month) );
calendar.setAttribute("id", "calendar");

/*
const date = new Date();

console.log( date.toLocaleString('ru', {weekday: 'short'}) + " \n " + date.toLocaleString('ru', {month: 'long'}) + " " + date.getDate() );
*/