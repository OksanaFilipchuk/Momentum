const greeting = document.querySelector('.greeting-text');
const userName = document.querySelector('.name');
export const timeOfDay = getTimeOfDay();
function getTimeOfDay() {
    let date = new Date();
    let hour = date.getHours();
    let result;   
    switch(true){
        case(hour<6): result = 'night';
        break;
        case(hour<12): result = 'morning';
        break;
        case(hour<18): result = 'afternoon';
        break;
        case(hour<24): result = 'evening';
        break;
    }
    return result   
}
function showGreeting(){    
    greeting.textContent = `Good ${timeOfDay}`;
    setTimeout(showGreeting, 1000)
}
showGreeting()

function setLocalStorage(){
    localStorage.setItem('name', userName.value)
}
function getLocalStorage(){
    if(localStorage.getItem('name')){
        userName.value = localStorage.getItem('name')
    }
}
window.addEventListener('beforeunload', setLocalStorage)
window.addEventListener('load', getLocalStorage)

