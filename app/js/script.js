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