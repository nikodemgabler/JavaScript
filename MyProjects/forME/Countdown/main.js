const months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
];
const weekdays = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
];

const giveaway = document.querySelector('.giveaway');
const deadLine = document.querySelector('.deadline');
const items = document.querySelectorAll('.box h4');


// let tempDate = new Date();
// let tempYear = tempDate.getFullYear();
// let tempMonth = tempDate.getMonth();
// let tempDay = tempDate.getDate();
// const futureDate = new Date(tempYear, tempMonth, tempDay + 10, 21, 30, 0)
// Gdybym chcial stworzyc sobie od dzisiejszej daty tez jest to mozliwe

let futureDate = new Date(2022, 4, 25, 11, 30, 0); // it shows current or future date


const year = futureDate.getFullYear();
const hours = futureDate.getHours();
const minutes = futureDate.getMinutes();

let month = futureDate.getMonth()
month = months[4]

const date = futureDate.getDate();
const weekday = weekdays[futureDate.getDay()];


giveaway.textContent = `giveaway ends on ${weekday}, ${date} ${month} ${year} ${hours}:${minutes}am`;

// future time in ms
const futureTime = futureDate.getTime();

function getRemainingTime() {
    const today = new Date().getTime();
    const t = futureTime - today;

    // console.log(t);
    // 1 s = 1000 ms
    // 1 m = 60 s
    // 1 hr = 60 min
    // 1 d = 24 hr

    // values in ms
    const oneDay = 24*60*60*1000;
    const oneHour = 60*60*1000;
    const oneMinute = 60*1000;

    // calculate all calues
    let days = t/oneDay;
    days = Math.floor(days);


    // let hours = t/oneHour; - Uzywajac takiego dzialania, otrzymamy ilosc godzin calkowita (tyle ile dni tylko w godzinach)
    let hours = (t % oneDay) / oneHour; // Uzywajac takiego wyrazenia, otrzymamy reszte z tego ile dni nam zostalo
    hours = Math.floor(hours)

    let minutes = Math.floor((t % oneHour) / oneMinute);
    let seconds = Math.floor((t % oneMinute) / 1000);

    // set values array;
    const values = [days, hours, minutes, seconds];

    function format(item){
        if(item < 10){
            return item = `0${item}`
        }
        return item
    }

    items.forEach(function(item, index){
        item.innerHTML = format(values[index]);
    });

    if(t < 0){
        clearInterval(countdown);
    }
}
// countdown
let countdown = setInterval(getRemainingTime, 1000);
getRemainingTime();