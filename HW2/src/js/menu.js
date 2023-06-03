const menu=document.getElementById('menu');
const navmenu=document.getElementById('menu-nav');

menu.addEventListener('click',function(){
    menu.classList.toggle('menu-active');
    navmenu.classList.toggle('active-menu-nav');
});
