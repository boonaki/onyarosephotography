function menu(){
    let menu = document.getElementById('menu-mobile')
    //if menu is not showing
    if(menu.classList.contains('invisible')){
        menu.classList.remove('invisible')
        menu.classList.add('translate-x-0')
    }else{ //if menus is showing
        menu.classList.add('invisible')
        menu.classList.remove('translate-x-0')
    }
}

if(window.innerWidth > 768){
    document.querySelector('#bg').style.height = window.innerHeight + 'px'
}

const gallery = document.querySelector('#paginated_gallery');
if(gallery){
    const gallery_scroller = gallery.querySelector('#gallery_scroller');
    const gallery_item_size = gallery_scroller.querySelector('li').clientWidth;

    document.querySelector('#move-left').addEventListener('click', moveLeft)
    document.querySelector('#move-right').addEventListener('click', moveRight)

    function moveLeft(){
        gallery_scroller.scrollLeft -= gallery_item_size
    }

    function moveRight(){
        console.log(gallery_item_size)
        gallery_scroller.scrollLeft += gallery_item_size
    }
}

let contact = document.querySelector('#contact')
let about = document.querySelector('#about')
if(about){
    document.getElementById('dt-aboutButton').addEventListener('click', scrollAbout)
}
if(contact){
    document.getElementById('contactButton').addEventListener('click', scrollContact)
    document.getElementById('dt-contactButton').addEventListener('click', scrollContact)
}

function scrollContact(){
    contact.scrollIntoView({behavior: 'smooth'})
}

function scrollAbout(){
    about.scrollIntoView({behavior: 'smooth'})
}