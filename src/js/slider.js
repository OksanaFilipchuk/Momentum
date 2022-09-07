import {timeOfDay} from './greeting.js'
const slideNext = document.querySelector('.slide-next');
const slidePrev = document.querySelector('.slide-prev');
const body = document.querySelector('body');


function changeSlide(time, num) {
    const img = new Image();
    img.src = `https://raw.githubusercontent.com/OksanaFilipchuk/momentum-images/assets/images/${time}/${num}.jpg`;
    img.onload = () =>{
    body.style.backgroundImage = `url('${img.src}')`;        
    }        
}

function getRandomNum(){
    let randomNum = Math.floor(Math.random()*(20-1))+1;
    return randomNum.toString().padStart(2, '0')
}
let randomNum = getRandomNum();

function showNextSlide(){
    if(document.querySelector("#github").checked){
        let imgNumber;
        if(randomNum == 20){
            imgNumber = 1;
        } else {
            imgNumber = +randomNum + 1
        }
        imgNumber = imgNumber.toString().padStart(2, '0')    
        changeSlide(timeOfDay, imgNumber);
        randomNum = imgNumber;
    }
    
    if(document.querySelector("#unsplash").checked){
        changeUnsplashPic();        
    }
    if(document.querySelector("#flickr").checked){
        changeFlickrPic()        
    }
    
}

function showPrevSlide(){

    if(document.querySelector("#github").checked){
        let imgNumber;
        if(randomNum == 1){
            imgNumber = 20;
        } else {
            imgNumber = +randomNum - 1
        }
        imgNumber = imgNumber.toString().padStart(2, '0')
        changeSlide(timeOfDay, imgNumber);
        randomNum = imgNumber;
    }
    if(document.querySelector("#unsplash").checked){
        changeUnsplashPic();         
    }
    if(document.querySelector("#flickr").checked){
        changeFlickrPic()        
    }
        
}
slideNext.addEventListener('click', showNextSlide)
slidePrev.addEventListener('click', showPrevSlide)
changeSlide(timeOfDay, randomNum)

async function changeUnsplashPic() {
    let userTag = document.querySelector('.user-tag');
    let userTagValue;
    userTag.value?userTagValue = userTag.value:userTagValue = "nature";    
    const url = `https://api.unsplash.com/photos/random?orientation=landscape&query=${userTagValue}&client_id=KZRf5YgqCEMaYWpNTc2ycDQabirGzIMmnfEKzDnSRrg`;
    const res = await fetch(url);
    const data = await res.json();
    body.style.backgroundImage = `url('${data.urls.regular}')`    
}

async function changeFlickrPic() {
    let userTag = document.querySelector('.user-tag');
    let userTagValue;
    userTag.value?userTagValue = userTag.value:userTagValue = "nature";
    const url = `https://www.flickr.com/services/rest/?method=flickr.photos.search&api_key=c96d1679db15f081d2672bbc1a8b1072&tags=${userTagValue}&extras=url_l&format=json&nojsoncallback=1`;
    const res = await fetch(url);
    const data = await res.json();
    let randomNum = Math.round(Math.random()*100)
    body.style.backgroundImage = `url('${data.photos.photo[randomNum].url_l}')`
            
}
function addUserTag(){
    
    document.querySelector('.user-tag').addEventListener('change', () => {
        if(document.querySelector("#flickr").checked){
            changeFlickrPic();
        }
        if(document.querySelector("#unsplash").checked){
            changeUnsplashPic();
        }
    })
}

document.querySelector("#github").addEventListener('change', ()=> {
    if(document.querySelector("#github").checked){
        changeSlide(timeOfDay, randomNum); 
        
    }
})

document.querySelector("#unsplash").addEventListener('change', ()=> {
    if(document.querySelector("#unsplash").checked){
        if(!document.querySelector('.user-tag')){
            addUserTag();
        }        
        changeUnsplashPic();        
    }

})

document.querySelector("#flickr").addEventListener('change', ()=> {
    if(document.querySelector("#flickr").checked){
        if(!document.querySelector('.user-tag')){
            addUserTag();
        }  
        changeFlickrPic();        
    }
})





