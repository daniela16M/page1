var contentNav = document.getElementById('headNav');
window.addEventListener('scroll', ()=>{
    var scroll = window.scrollY
    if(scroll > 10){
        contentNav.style.backgroundColor = '#F5F9FC'
    }else{
        contentNav.style.backgroundColor = 'transparent'
    }
})