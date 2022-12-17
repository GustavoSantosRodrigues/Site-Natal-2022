const navMenu = document.getElementById('nav'),
    navToggle = document.getElementById('nav-toggle'),
    navClose = document.getElementById('nav-close')

if(navToggle){ 
    navToggle.addEventListener('click', () => {
        navMenu.classList.add('show-menu')
    } )
}

if(navClose){
     navClose.addEventListener('click', () =>{
        navMenu.classList.remove('show-menu')
     })
}

// remover menu mobile

const navLink = document.querySelectorAll('.nav__link')

function linkAction(){
    const navMenu = document.getElementById('nav')
    // quando o link for clicado a classe show-menu será removido

    navMenu.classList.remove('show-menu')
}

navLink.forEach(n => n.addEventListener('click', linkAction))