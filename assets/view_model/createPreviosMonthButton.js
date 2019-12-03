'use strict';

import {someDate} from './index.js';

export default function () {
    const previosMonthButton = document.getElementById("previosMonth");

    previosMonthButton.onclick = decrementMonth;


    function decrementMonth() {
        someDate.setMonth(someDate.getMonth() - 1);
        console.log(someDate);

    }

    return someDate;


}