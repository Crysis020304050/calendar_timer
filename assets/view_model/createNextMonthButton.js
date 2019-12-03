'use strict';

import {someDate} from './index.js';

export default function () {
    const nextMonthButton = document.getElementById("nextMonth");

    nextMonthButton.onclick = incrementMonth;

    function incrementMonth() {
        someDate.setMonth(someDate.getMonth() + 1);
        console.log(someDate);
    }

    return someDate;
}