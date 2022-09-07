const settingButton = document.querySelector(".setting-button");
let blocks = ['player', 'weather', 'date', 'time', 'todo', 'quote', 'greeting'];
settingButton.addEventListener("click", ()=>{
    document.querySelector('.setting-box').classList.toggle('setting-box-active');
});

blocks.forEach(el =>{
    let div = document.createElement('div');
    div.className = "pagePart"
    div.innerHTML = `<input type="checkbox" id = "${el}" checked>
    <label for="${el}">${el}</label>`
    document.querySelector('.show').append(div);
    if(!document.querySelector(`#${el}`).checked){
        document.querySelector(`.${el}`).classList.toggle("element-hidden")
    }
    document.querySelector(`#${el}`).addEventListener("change", () =>{
        document.querySelector(`.${el}`).classList.toggle("element-hidden")
    })

})
let sourse = ['github', 'flickr','unsplash']
function setLocalStorage(){
    localStorage.setItem('github', document.querySelector("#github").checked);
    localStorage.setItem('flickr', document.querySelector("#flickr").checked);
    localStorage.setItem('unsplash', document.querySelector("#unsplash").checked);
    localStorage.setItem('userTag', document.querySelector(".user-tag").value);
    blocks.forEach(el => {
        localStorage.setItem(el, document.querySelector(`#${el}`).checked);
    } )
    
}
function getLocalStorage(){
    sourse.forEach(el =>{
        if(localStorage.getItem('el')){
            document.querySelector(`#${el}`).checked = localStorage.getItem(el)
        }
    })
    blocks.forEach(el =>{
        if(localStorage.getItem('el')){
            document.querySelector(`#${el}`).checked = localStorage.getItem(el);
        }
    })
    if(localStorage.getItem('userTag')){
        document.querySelector(".user-tag").value = localStorage.getItem('userTag')
    }
    if(localStorage.getItem('weather')){
        document.querySelector("#weather").checked  = localStorage.getItem('weather')
    }
    // if(localStorage.getItem('name')){
    //     userName.value = localStorage.getItem('name')
    // }
}
window.addEventListener('beforeunload', setLocalStorage)
window.addEventListener('load', getLocalStorage)
