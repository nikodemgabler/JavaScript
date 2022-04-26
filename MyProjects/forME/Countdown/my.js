const months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "September",
    "August",
    "October",
    "November",
    "December",
]
const weekDays = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
]

const giveawayFinish = document.querySelector('.giveaway');
const boxes = document.querySelectorAll('.deadline h4')

const giveawayDate = new Date(2022, 4, 25, 13, 30, 0);

const giveawayWeekDay = weekDays[giveawayDate.getDay()];
const giveawayDay = giveawayDate.getDate();
const giveawayMonth = months[giveawayDate.getMonth()];
const giveawayYear = giveawayDate.getFullYear();
const giveawayHour = giveawayDate.getHours();
const giveawayMinutes = giveawayDate.getMinutes();
const giveawaySeconds = giveawayDate.getSeconds();

giveawayFinish.innerHTML = `giveaway ends on ${giveawayWeekDay}, ${giveawayDay} ${giveawayMonth} ${giveawayYear}, ${giveawayHour}:${giveawayMinutes}am`;


const futureDate = giveawayDate.getTime();

function timer(){

    // 1 ms
    // 1 s = 1000 ms
    // 1 m = 60 s
    // 1 hr = 60 m 
    // 1 day = 24 hr 

    const now = new Date().getTime();
    const toTheEnd = futureDate - now;

    const days = toTheEnd / (24*60*60*1000);
    const hours = now % toTheEnd / (24*60*60*1000);
    const minutes = (now % toTheEnd) / (60*60*1000);

    console.log(minutes);
}

timer();