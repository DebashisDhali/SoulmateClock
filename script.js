
function setClock() {
    const now = new Date();

    const seconds = now.getSeconds();
    const secondsDegrees = ((seconds / 60) * 360) + 90;
    const secondHand = document.getElementById('second');
    secondHand.style.transform = `rotate(${secondsDegrees}deg)`;

    const minutes = now.getMinutes();
    const minutesDegrees = ((minutes / 60) * 360) + ((seconds / 60) * 6) + 90;
    const minuteHand = document.getElementById('minute');
    minuteHand.style.transform = `rotate(${minutesDegrees}deg)`;

    const hours = now.getHours();
    const hoursDegrees = ((hours / 12) * 360) + ((minutes / 60) * 30) + 90;
    const hourHand = document.getElementById('hour');
    hourHand.style.transform = `rotate(${hoursDegrees}deg)`;
}

setInterval(setClock, 1000);

setClock(); 
