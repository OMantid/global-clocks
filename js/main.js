const clock = document.querySelector('.clock');
const secondHand = document.querySelector('.second-hand');
const minHand = document.querySelector('.min-hand');
const hourHand = document.querySelector('hour-hand');

for (let i = 0; i < 3; i++){
    const cloneClock = clock.cloneNode(true);
    clock.after(cloneClock);
}
//Los Angeles Time
//New York Time
//London Time
//Tokyo Time