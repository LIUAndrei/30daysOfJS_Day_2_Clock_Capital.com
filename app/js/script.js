// This clock page was made by Andrei Liubiski on 25 Aug 2021 as a part of training on '30 days of JS' by Wes Bos 
// on https://courses.wesbos.com/ 
// The logo is of Capital.com 
// The gulp build is by Coder Coder from https://youtu.be/q0E1hbcj-NI

// This page is accessible from my github account (https://github.com/LIUAofStevensTransport/30daysOfJS_Day_2_Clock_Capital.com)
//  and my website (http://www.liubinski.com/projects/30DaysOfJS/30daysOfJS_Day_2_Clock_Capital.com/)




const secondsHand = document.querySelector('.seconds');
const minutesHand = document.querySelector('.minute');
const hoursHand = document.querySelector('.hour');

function setDate() {
    const now = new Date();
    const secondsToDegrees = now.getSeconds() * 6;
    const minutesToDegrees = now.getMinutes() * 6;
    const hoursToDegrees = (now.getHours() / 24) * 360;
    console.log(secondsToDegrees, minutesToDegrees, hoursToDegrees);


    secondsHand.style.transform = `translate(-50%) rotate(${secondsToDegrees}deg)`;
    minutesHand.style.transform = `translate(-50%) rotate(${minutesToDegrees}deg)`;
    hoursHand.style.transform = `translate(-50%) rotate(${hoursToDegrees}deg)`;
}



setInterval(setDate, 1000);