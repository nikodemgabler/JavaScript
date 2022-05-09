const h4 = document.querySelectorAll('h4');

const wordsDays = 
[
    'Sunday',
    'Monday',
    'Tuesday',
    'Wednesday',
    'Thursday',
    'Friday',
    'Saturday'
]
const wordsMonths =
[
    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
    'July',
    'September',
    'August',
    'October',
    'November',
    'December'
]

const giveawayDate = new Date(2022, 09, 10, 13, 30, 0);
const year = giveawayDate.getFullYear();
const month = giveawayDate.getMonth();
const day = giveawayDate.getDate();
const hour = giveawayDate.getHours();
const minute = giveawayDate.getMinutes();
const second = giveawayDate.getSeconds();

h4[0].innerHTML = `giveaway ends on ${wordsDays[giveawayDate.getDay()]}, ${day} ${wordsMonths[month]} ${year}, ${hour}:${minute}:0${second} am`;

const countdown = function(){

    const currentDate = new Date()

    const giveawayDateMs = giveawayDate.getTime();
    const currentDateMs = currentDate.getTime();

    const timeToEnd = giveawayDateMs - currentDateMs;

    h4[1].innerHTML = Math.floor(timeToEnd / (24*60*60*1000));
    h4[2].innerHTML = Math.floor((timeToEnd / (60*60*1000)) % 24);
    h4[3].innerHTML = Math.floor((timeToEnd / (60*1000)) % 60);
    h4[4].innerHTML = Math.floor((timeToEnd / (1000)) % 60);

    if (h4[1].innerHTML < 10) {
        h4[1].innerHTML = `0${Math.floor(timeToEnd / (24*60*60*1000))}`;
    }
    else if (h4[2].innerHTML < 10) {
        h4[2].innerHTML = `0${Math.floor((timeToEnd / (60*60*1000)) % 24)}`;
    }
    else if (h4[3].innerHTML < 10) {
        h4[3].innerHTML = `0${Math.floor((timeToEnd / (60*1000)) % 60)}`;
    }
    else if (h4[4].innerHTML < 10) {
        h4[4].innerHTML = `0${Math.floor((timeToEnd / (1000)) % 60)}`;
    }


    if ((giveawayDate.getTime() - new Date().getTime()) < 0) {
        h4[0].innerHTML = `Time is over!`;
        h4[1].innerHTML = 0;
        h4[2].innerHTML = 0;
        h4[3].innerHTML = 0;
        h4[4].innerHTML = 0;
    }
}
countdown();
setInterval(countdown, 1000)

