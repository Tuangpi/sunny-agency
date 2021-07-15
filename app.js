let ul = document.querySelector('.nav-bar ul')
let angle = document.querySelector('.angle')
document.querySelector('.humburger').addEventListener('click', e=>{
    if(ul.style.display == 'flex' && angle.style.display == 'block'){
        ul.style.display = 'none';
        angle.style.display = 'none'
    }else{
        ul.style.display = 'flex';
        angle.style.display = 'block';
    }
})