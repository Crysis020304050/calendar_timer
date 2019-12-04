'use strict';

import {someDate} from './index.js';

import model from '../model/index.js';
import createCalendar from "./createCalendar.js";


export default function () {
    const previosMonthButton = document.getElementById("previosMonth");

    previosMonthButton.onclick = decrementMonth;


    function decrementMonth() {
        someDate.setMonth(someDate.getMonth() - 1);

        const month = new model.Month( someDate );

        document.getElementById("calendar").remove();
        const calendar = document.body.appendChild( createCalendar(month) );
        calendar.setAttribute("id", "calendar");

    }

}