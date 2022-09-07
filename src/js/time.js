const time = document.querySelector('.time');
const day =document.querySelector('.date') 

function showTime(){
    const date = new Date();
    const currentTime = date.toLocaleTimeString();
    time.textContent = currentTime;
    setTimeout(showTime, 1000)
}
function showDate(){
    const date  = new Date();
    const options = {month:'long', day:'numeric', weekday: 'long'};
    const currentDate = date.toLocaleDateString('en-US', options);
    day.textContent = currentDate;
    setTimeout(showDate, 1000)
}

showTime()
showDate()
