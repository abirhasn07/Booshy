
const loader=document.querySelector('.loading')

window.addEventListener("load",function () {
    loader.style.display="none"
})

const handleMenu=()=>{
    document.querySelector('.openMenu').classList.toggle('hidden')
    document.querySelector('.closeMenu').classList.toggle('hidden')
    document.querySelector('.nav-list').classList.toggle('active')
}


let navbar=document.querySelector('.nav-list').querySelectorAll('.nav-item');

navbar.forEach(element => {

    element.addEventListener("click",function() {
        navbar.forEach(nav=>nav.classList.remove("activeMenu"))
        this.classList.add("activeMenu")

       
    })
    
});

// const top=document.querySelector('.top')

// window.addEventListener(scroll,function () {
//     top.scrollY=0;
// })