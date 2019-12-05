'use strict';



const now = new Date();
const timeEnd = new Date(now.getFullYear() + 1, 0, 1, 0, 0, 0);

export default function () {


    function getTimeRemaining(endTime) {
        let t = Date.parse(endTime) - Date.parse(new Date());
        let seconds = Math.floor((t / 1000) % 60);
        let minutes = Math.floor((t / 1000 / 60) % 60);
        let hours = Math.floor((t / (1000 * 60 * 60)) % 24);
        let days = Math.floor(t / (1000 * 60 * 60 * 24));
        return {
            'total': t,
            'days': days,
            'hours': hours,
            'minutes': minutes,
            'seconds': seconds
        };
    }

    function initializeClock(id, endTime) {
        let clock = document.getElementById(id);


        function updateClock() {
            let t = getTimeRemaining(endTime);

            clock.innerText = `To a New Year: ${t.days}:${('0' + t.hours).slice(-2)}:${('0' + t.minutes).slice(-2)}:${('0' + t.seconds).slice(-2)}`;

            if (t.total <= 0) {
                clearInterval(timeInterval);
            }
        }

        updateClock();
        let timeInterval = setInterval(updateClock, 1000);
    }

    initializeClock("timerValue", timeEnd)


}

