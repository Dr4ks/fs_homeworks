const instahead=document.getElementById('insta-head');

window.addEventListener('resize',function(){
    if(window.innerWidth>=768){
        instahead.innerHTML='- Latest Instagram Shots';
    }
    else if(window.innerWidth<768){
        instahead.innerHTML='- Last Instagram Shots';
    }
});
