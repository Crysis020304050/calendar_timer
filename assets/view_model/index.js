'use strict';

import model from '../model/index.js'
import createCalendar from "./createCalendar.js";
import createPreviosMonthButton from './createPreviosMonthButton.js';
import createNextMonthButton from './createNextMonthButton.js';

export let someDate = new Date();

createPreviosMonthButton();
createNextMonthButton();



const month = new model.Month( someDate );



document.body.appendChild( createCalendar(month) );

/*
const date = new Date();

console.log( date.toLocaleString('ru', {weekday: 'short'}) + " \n " + date.toLocaleString('ru', {month: 'long'}) + " " + date.getDate() );
*/